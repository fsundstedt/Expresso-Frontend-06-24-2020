import React from 'react';


let inputUser = 'username';
let inputEmail = 'email';
let inputPassword = 'password';

const setUser = (user) => {
  inputUser = user;
};

const setEmail = (email) => {
  inputEmail = email;
};

const setPassword = (password) => {
  inputPassword = password;
};

const postAPI = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    return response;
  };

const handleSubmit = async () => {

    try {

      const data = {
        username: inputUser,
        email: inputEmail,
        user_password: inputPassword,
      };

      const url = "http://localhost:9000/signup";
      const response = await postAPI(url, data);

      if (typeof response.userId === 'number') {
        alert("Account Created");
      }
      if (typeof response.userId !== 'number') {
        alert("Unable to sign up. Please try again later or go to login page.");
      }
    } catch (err) {
      return err;
    }
  };

export function Signup() {

    return (
        <div>
          <div>Username</div>
          <input
            onChange={e => setUser(e.target.value)}
          />
          <div>Email</div>
          <input
            onChange={e => setEmail(e.target.value)}
          />
          <div>Password</div>
          <input
            onChange={e => setPassword(e.target.value)}
          />
          <div>
            <br/>
            <button
              onClick={() =>
                handleSubmit()
              }
              >
              Submit User
            </button>
          </div>
        </div>
    );
}