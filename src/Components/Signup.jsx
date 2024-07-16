import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h2>Signup Page</h2>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Contact No: </label>
          <input type="text" name="contact" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
};

export default Signup;
