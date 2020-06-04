import React, { useState } from 'react';
import './Login.css';
import Drawing from './Drawing';

const Login = () => {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'alice',
    },
    {
      id: '2',
      name: 'bob',
    },
    {
      id: '3',
      name: 'dan',
    },
  ]);

  const userList = users.map(user => (
    <li key={user.id}>
      <a href={`/${user.name}`}>{user.name}</a>
    </li>
  ));
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <nav>
          <ul>{userList}</ul>
        </nav>
      </div>
      {window.location.pathname !== '/' && <Drawing />}
    </div>
  );
};

export default Login;
