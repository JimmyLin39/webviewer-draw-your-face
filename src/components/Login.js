import React, { useState } from 'react';
import './Login.css';
import Drawing from './Drawing';

const Login = () => {
  const [users, setUsers] = useState({
    alice: {
      id: '1',
      doc: null,
    },
    bob: {
      id: '2',
      doc: null,
    },
    dan: {
      id: '3',
      doc: null,
    },
  });
  // const [currentUser, setCurrentUser] = useState(null);
  const userList = Object.keys(users).map((user, index) => (
    <li key={index}>
      <a href={`/${user}`}>{user}</a>
    </li>
  ));

  const saveDoc = (user, doc) => {
    const newUser = { [user]: { doc } };
    console.log(newUser);

    setUsers(prevState =>
      // Object.assign would also work
      ({ ...prevState, ...newUser })
    );
  };
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">/</a>
            </li>
            {userList}
          </ul>
        </nav>
      </div>
      {window.location.pathname !== '/' && <Drawing saveDoc={saveDoc} />}
    </div>
  );
};

export default Login;
