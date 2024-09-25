import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        setUsername('');
        setPassword('');
        navigate('/mainPage')
      })
      .catch((error) => {
        console.log('Error with login, check logs.', error);
      });
    };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleBypass = () => {
    navigate('/mainPage');
  };
    return (
      <div id='login'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <button onClick={handleBypass} type='submit'>BYPASS</button>
        <button type='submit'>Login</button>
      </form>
      <button onClick={handleSignUpClick}>Sign Up</button>
    </div>
  );
};


export default LoginForm;
