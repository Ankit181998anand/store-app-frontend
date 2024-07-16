import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <div>
          <label>Username: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
};

export default Login;
