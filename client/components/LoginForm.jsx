import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
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
    navigate('/mainPage');
  };

  const handleBypass = () => {
    navigate('/mainPage');
  };

  const StyledButton = styled(Button)({
    root: {
      textColor: '#a9a9a9',
      backgroundColor: '#6fa8dc',
      color: '#6fa8dc',
      '&:hover': {
        backgroundColor: '#6fa8dc',
        color: '#3c52b2',
    },
  }});

    return (
    <>
    <h2>Login</h2>
    <div id='login'>
      <form id='fields' onSubmit={handleLogin}>
        <div>
          <TextField
            id='filled-basic'
            label='Username'
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
        </div>
        <div>
        <TextField 
        id="filled-basic" 
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
        <Button variant="contained" onClick={handleBypass} type='submit'>BYPASS</Button>
        <Button variant="contained" type='submit'>Login</Button>
        <Button variant="contained" onClick={handleSignUpClick}>Sign Up</Button>
      </form>
    </div></>
  );
};


export default LoginForm;
