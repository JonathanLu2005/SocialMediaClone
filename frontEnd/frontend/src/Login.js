import React from "react";

export default function Login() {
    return (
        <div class="container">
            <div class="card">
                <div class="card-body">
                    <h2 class="text-center">Log Into Account</h2>

                    <form method="POST">
                        <div class="form-group">
                            <label>Username: </label>
                            <input type="text" class="form-control" id="username" name="username" placeholder="Your username please"></input>
                        </div>

                        <br></br>

                        <div class="form-group">
                            <label>Email: </label>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Your email please" aria-describedby="email"></input>     
                            <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>            
                        </div>

                        <br></br>

                        <div class="form-group">
                            <label>Password: </label>
                            <input type="password" class="form-control" id="password" name="password" placeholder="Your password please"></input>           
                        </div>

                        <br></br>

                        <center>
                            <button class="btn btn-primary"
                                onClick={() => {
                                    fetch("/login");
                                }}
                            >
                            Login
                            </button>
                            
                            {/*
                            try to make link to be able to go to the signup page???

                            <a class="link-opacity-75-hover"
                                onClick {() => {
                                    fetch("/signup");
                                }}
                            >
                            Don't have an account?
                            </a> 

                              */}
                        </center>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}