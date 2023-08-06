import React from "react";
export default function Login() {
  return (
    <div>
      <form>
        <label>Username: </label>
        <input type="text"></input>

        <br></br>
        <label>Password: </label>
        <input type="password"></input>

        <button
          onClick={() => {
            fetch("/login");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
