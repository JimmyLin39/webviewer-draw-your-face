# WebViewer - React sample

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)

This repo is specifically designed for any users interested in integrating WebViewer into React project. This project was generated with [Create React App](https://github.com/facebook/create-react-app). See [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for more information.

## Initial setup

Before you begin, make sure your development environment includes [Node.js](https://nodejs.org/en/).

## Install

```
git clone https://github.com/PDFTron/webviewer-react-sample.git
cd webviewer-react-sample
npm install
```

## Run

```
npm start
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `build/` directory. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To test the build directory locally you can use [serve](https://www.npmjs.com/package/serve) or [http-server](https://www.npmjs.com/package/http-server). In case of serve, by default it strips the .html extension stripped from paths. We added serve.json configuration to disable cleanUrls option.

## WebViewer APIs

See [API documentation](https://www.pdftron.com/documentation/web/guides/ui/apis).

## Contributing

See [contributing](./CONTRIBUTING.md).

## License

See [license](./LICENSE).
![](https://onepixel.pdftron.com/webviewer-react-sample)

## First Task
To get you started with WebViewer we will have you build a webapp called draw-your-face, using a modern framework, that contains the following two pages. This task is expected to be completed in a day or two.

### Login page
- Not a real login page with authentication, just list of a few user names.
- When clicking a list item, it navigates to the drawing page and you are now logged in as that user.

### Drawing page
- Default image (any image you find online) is loaded inside WebViewer.
- Users can start drawing their face using a pen (other annotation tools should be disabled)
- When user draws, there is a timestamp at bottom right corner that shows (and updates automatically) when the latest action was
- The drawing and timestamp should be in the document itself so that users can download the document and store it in their device
- After user has done drawing, he/she can save it using a save button
- When user comes back, all their work should be persisted
