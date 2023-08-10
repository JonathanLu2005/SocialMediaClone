import React from "react";

export default function SignUp() {
    return (
        <div>
            <form method="POST">
                <label>Your name: </label>
                <input type="text" name="fullName" placeholder="Your name please"></input>

                {/* only important thing here is that u see name?, make sure its the same as the fields within forms, thats the connection*/}

                <br></br>

                <label>Username: </label>
                <input type="text" name="username" placeholder="Your username please"></input>

                <br></br>

                <label>Email: </label>
                <input type="email" name="email" placeholder="Your email please"></input>

                <br></br>

                <label>Password: </label>
                <input type="password" name="password" placeholder="Your password please"></input>

                <button
                    onClick={() => {
                        fetch("/signup");
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}