import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'Alice',
    },
    {
      id: '2',
      name: 'Bob',
    },
    {
      id: '3',
      name: 'Dan',
    },
  ]);

  const [currentUser, setCurrentUser] = useState([]);

  const userList = users.map(user => (
    <button
      type="button"
      className="user-button"
      key={user.id}
      onClick={() => setCurrentUser(user)}
    >
      {user.name}
    </button>
  ));
  return (
    <div className="login-container">
      <h1>Login</h1>
      {userList}
      <h2>current user: {currentUser.name}</h2>
    </div>
  );
};

export default Login;
