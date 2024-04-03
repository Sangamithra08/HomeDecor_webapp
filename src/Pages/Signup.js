import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faSignature } from '@fortawesome/free-solid-svg-icons';
import '../Assests/Css/signup2.css'; // Make sure to import your specific styles
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password === confirmPassword) {
      axios.post('http://localhost:8080/api/v1/user/save', data)
        .then(response => {
          console.log("Success " + response);
          navigate('/login');
          setData({});
          setConfirmPassword("");
        })
        .catch(error => {
          alert("Email already registered!");
        });
    } else {
      alert('Incorrect Username/Password!');
      setData({ ...data, password: '' });
      setConfirmPassword("");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faSignature} beatFade />
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleChange}
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faUser} bounce />
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faKey} shake />
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            id="password"
            required
          />
        </div>
        <div className="form-group">
          <label>
            <FontAwesomeIcon icon={faKey} shake />
          </label>
          <input
            type="password"
            placeholder="Repeat your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <Link to="/" onClick={handleSubmit}>
          <button type="submit" className="button-signup">
            Signup
          </button>
        </Link>
        <br></br>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Signup;
