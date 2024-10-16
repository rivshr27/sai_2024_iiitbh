import React from 'react';
//import './Login_page/styles.css';

const Login = () => {
  return (
    <div className="login-signup-container">
      <div className="form-box">
        <div className="form-tabs">
          <button id="login-tab" className="active" onClick={() => showLogin()}>Login</button>
          <button id="signup-tab" onClick={() => showSignup()}>Signup</button>
        </div>
        <div className="form-content">
          {/* Login Form */}
          <div id="login-form">
            <h2>Login to Your Account</h2>
            <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
              <input type="email" id="loginEmail" placeholder="Email" required />
              <input type="password" id="loginPassword" placeholder="Password" required />
              <button type="submit" id="loginBtn">Login</button>
            </form>
            <div className="divider">
              <span>OR</span>
            </div>
            <div className="google-signin-container">
              <div id="g_id_onload"
                   data-client_id="YOUR_GOOGLE_CLIENT_ID"
                   data-context="signin"
                   data-ux_mode="popup"
                   data-callback="handleCredentialResponse"
                   data-auto_prompt="false">
              </div>
              <div className="g-signin-button" id="g_id_signin_login"></div>
            </div>
          </div>

          {/* Signup Form */}
          <div id="signup-form" style={{ display: 'none' }}>
            <h2>Create a New Account</h2>
            <form id="signupForm" onSubmit={(e) => e.preventDefault()}>
              <input type="text" id="signupName" placeholder="Full Name" required />
              <input type="email" id="signupEmail" placeholder="Email" required />
              <input type="password" id="signupPassword" placeholder="Password" required />
              <button type="submit" id="signupBtn">Signup</button>
            </form>
            <div className="divider">
              <span>OR</span>
            </div>
            <div className="google-signin-container">
              <div id="g_id_signin_signup"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions to toggle forms
const showLogin = () => {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('signup-form').style.display = 'none';
};

const showSignup = () => {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
};

export default Login;
