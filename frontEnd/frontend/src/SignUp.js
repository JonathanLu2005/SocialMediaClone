import React from "react";

import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigator = useNavigate(); //this hook creates a link to the routes set up in app.js
  return (
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h2 class="text-center">Create An Account</h2>

          <form method="POST">
            <div class="form-group">
              <label for="fullName">Your name: </label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                name="fullName"
                placeholder="Your name please"
              ></input>
            </div>

            <br></br>

            <div class="form-group">
              <label>Username: </label>
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                placeholder="Your username please"
              ></input>
            </div>

            <br></br>

            <div class="form-group">
              <label>Email: </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Your email please"
                aria-describedby="email"
              ></input>
              <small id="email" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <br></br>

            <div class="form-group">
              <label>Password: </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                placeholder="Your password please"
              ></input>
            </div>

            <br></br>

            <center>
              <button
                class="btn btn-primary"
                onClick={() => {
                  fetch("/signup");
                  //use the navigator as before if the account is made sucessfully
                }}
              >
                Sign Up
              </button>

              {
                // tried to make link so it go to the login JS page???
                <a
                  class="link-opacity-75-hover"
                  onClick={() => {
                    //fetch("/login");
                    //instead of the fetch, we should navigate
                    navigator("/login");
                  }}
                >
                  Already have an account?
                </a>
              }
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
