import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Assests/Css/login.css'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
const Login = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.log('No empty data');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/v1/user/login', {
        email,
        password,
      });
      if (response.status === 200) {
        // console.log('Login successful');
        toast.success('Login successful!', { position: "bottom-right" });
        setTimeout(() => {
          history('/')
        }, 1800)


      } else {
        console.log('Invalid credentials');
        toast.success('Invalid Credentials!', { position: "bottom-right" });
        setTimeout(() => {
          history('/')
        }, 1800)

      }
    } catch (error) {
      if (error.response.status === 401) {
        console.log("Invalid credentials");
        toast.error('Invalid Credentials!', { position: "bottom-right" })
      }
      else {
        console.error('Login error:', error);
        // setError('Server error. Please try again later.');
      }
    }
  };

  return (
    <div className='login-container'>
      <div className="login-flex-container">
        <form onSubmit={handleSubmit} className='login-box'>
          <p className='heading-login'>LOGIN</p>
          <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input' placeholder='E-mail' />
          </div>
          <div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' />
          </div>
          <button type="submit" className='submit-btn'>LOGIN</button>

          {error && <div>{error}</div>}
          <span >
            Don't have an account? <Link to="/signup" className='btn-last'>SignUp</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
