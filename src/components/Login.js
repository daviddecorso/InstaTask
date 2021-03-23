import React from "react";

import btnNormal from "./img/btn_google_signin_dark_normal_web2x.png";

function Login() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable">
            <div className="column has-text-left">
              {/* Logo image soon */}
              <h1 className="title is-1">InstaTask</h1>
              <p className="is-size-4" data-testid = "description">
                A web app that imports your webcourses calendar and alerts you
                when assignments are due.
              </p>
              <br />
              <a className="button is-light" href="/about" data-testid = "about">
                About
              </a>
            </div>
            <div className="column">
              <br />
              <br />
              <a href="http://localhost:5000/auth/google" data-testid = "google-sign-in">
                <img src={btnNormal} alt="Sign-in with Google." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
