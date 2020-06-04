import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';

const Drawing = () => {
  const viewer = useRef(null);
  const currentUser = window.location.pathname.slice(1);

  const createTimestampAnnotation = Annotations => {
    // error to get page width
    // console.log('page width', CoreControls.DocumentViewer.getPageWidth(1));
    // try to get page width for place annotation to the bottom right corner
    // const iframe = document.getElementById('webviewer-1');
    // const currentDoc = iframe.contentWindow.document.querySelector(
    //   '#pageContainer0'
    // );
    // const docWidth = currentDoc.offsetWidth;
    // addAnnotation(annotManager, freeText);
    // annotManager.redrawAnnotation(freeText);
    const freeText = new Annotations.FreeTextAnnotation();
    freeText.PageNumber = 1;
    console.log(freeText.getBottom());

    freeText.X = 400;
    freeText.Y = 350;
    freeText.Width = 200;
    freeText.Height = 20;
    freeText.setPadding(new Annotations.Rect(0, 0, 0, 0));
    // content is the time stamp
    const date = new Date();
    // timestamp in YYYY-M-D hh:mm:ss format
    const timestamp = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    freeText.setContents(`last action: ${timestamp}`);
    freeText.FillColor = new Annotations.Color(0, 255, 255);
    freeText.FontSize = '14pt';
    return freeText;
  };

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://i.imgur.com/u2oPC.jpg',
      },
      viewer.current
    ).then(instance => {
      const { Annotations, annotManager, docViewer } = instance;
      annotManager.setCurrentUser(currentUser);
      // disable all tools and only enable free hand tool
      instance.disableTools();
      instance.enableTools(['AnnotationCreateFreeHand']);

      annotManager.disableFreeTextEditing();
      annotManager.on('annotationChanged', (annotations, action, event) => {
        // if (imported) return;
        // do event handling
        console.log('ANNOTATION CHANGED');
        if (annotations[0].ToolName === 'AnnotationCreateFreeHand') {
          // find previous timestamp annotation
          const annots = annotManager.getAnnotationsList();
          const timestampAnnotIndex = annots.findIndex(
            annot => annot.ToolName === 'AnnotationCreateCallout'
          );
          // delete previous timestamp annotation
          if (timestampAnnotIndex) {
            annotManager.deleteAnnotation(annots[timestampAnnotIndex]);
          }
          // create new timestamp annotation
          const timestampAnnot = createTimestampAnnotation(Annotations);
          annotManager.addAnnotation(timestampAnnot);
          annotManager.redrawAnnotation(timestampAnnot);
          docViewer.on('documentLoaded', () => {});
        }
      });
    });
  }, [currentUser]);

  return (
    <>
      <h2>current user: {currentUser}</h2>
      <div className="webviewer" ref={viewer}></div>
    </>
  );
};

export default Drawing;
