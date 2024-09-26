import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authSlice';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

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
        navigate('/mainPage');
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
    <div id= 'head1'>
      <img src={logo} alt='logo' width='400w'></img>
    <div id='login'>
      <form id='fields'>
        <div>
          <TextField
            className='Input'
            label='Username'
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        <div>
        <TextField 
        className='Input' 
        label="Password" 
        variant="filled" 
        type='password'
        id='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        </div>
      </form>
      <div id='buttonField'>
        <Button variant="contained" onClick={handleLogin}>Login</Button>
        <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
