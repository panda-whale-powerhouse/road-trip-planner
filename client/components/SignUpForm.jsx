import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../reducers/authSlice';

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

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <button type='submit'>Sign Up</button>
      </form>
      {usernameTaken && <p>Username is already taken</p>}
      {!fieldsFilled && <p>Please fill all fields</p>}
      {error && <p>An error occurred. Please try again.</p>}
      <Link to='/'>Back to Login</Link>
    </div>
  );
};

export default SignUpForm;
