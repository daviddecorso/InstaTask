import React from "react";

import btnNormal from "./img/btn_google_signin_dark_normal_web.png";

function Login() {
  return (
    <div>
      <p>This is the login page!</p>
      <a href="http://localhost:5000/auth/google">
        <img src={btnNormal} alt="Sign-in with Google." />
      </a>
    </div>
  );
}

export default Login;
