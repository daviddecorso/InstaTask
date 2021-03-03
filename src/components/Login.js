import React from "react";

import btnNormal from "./img/btn_google_signin_dark_normal_web2x.png";

function Login() {
  return (
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-8 is-variable">
            <div class="column has-text-left">
              {/* Logo image soon */}
              <h1 class="title is-1">InstaTask</h1>
              <p class="is-size-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                eligendi soluta voluptate facere molestiae consequatur.
              </p>
              <br />
              <a class="button is-light" href="/about">
                About
              </a>
            </div>
            <div class="column">
              <br />
              <br />
              <a href="http://localhost:5000/auth/google">
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
