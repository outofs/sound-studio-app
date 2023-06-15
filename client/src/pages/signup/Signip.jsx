import React, { useContext, useState } from 'react';

import '../login/login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Signip = () => {
  const [userName, setUserName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleUsername(e) {
    setUserName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  async function handleClick(e) {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post('/auth/register', {
        userName: userName,
        email: email,
        password: password,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });

      navigate('/');
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
  }

  return (
    <div className='login'>
      <h1>Sign up form</h1>
      <div className='loginContainer'>
        <input
          type='text'
          placeholder='username'
          className='loginInput'
          value={userName}
          onChange={handleUsername}
        />
        <input
          type='email'
          placeholder='email@mail.com'
          className='loginInput'
          value={email}
          onChange={handleEmail}
        />
        <input
          type='password'
          placeholder='password'
          className='loginInput'
          value={password}
          onChange={handlePassword}
        />
        <button
          disabled={loading}
          className='loginButton'
          onClick={handleClick}
        >
          Register
        </button>

        {error && <span className='error'>{error.message}</span>}
      </div>
    </div>
  );
};

export default Signip;
