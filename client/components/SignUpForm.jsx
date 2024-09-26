import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../reducers/authSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [fieldsFilled, setFieldsFilled] = useState(true);
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signup({ username, password }))
      .unwrap()
      .then(() => {
        setUsername('');
        setPassword('');
        setUsernameTaken (false);
        setFieldsFilled(true);
        navigate('/mainPage');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleBackToLogin = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <div >
      <form className='SignUp'>
      <h1>Sign Up</h1>
          <TextField
            className='Input'
            label='Username'
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required />
          <TextField
          marginBottom='15px'
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
      <div>
      <Button 
      variant="contained" 
      sx={{color: '#d6d3ff'}}
      onClick={handleSignUp}
      >Sign Up</Button>

      <Button 
      variant="contained" 
      sx={{color: '#d6d3ff'}} 
      onClick={handleBackToLogin}
      >Back To Login</Button>
      </div>
      {usernameTaken && <p>Username has already been taken.</p>}
      {!fieldsFilled && <p>All fields are required.</p>}
      {error && <p>Username may already taken, please try again.</p>}
      </form>
    </div>
  );
};

export default SignUpForm;
