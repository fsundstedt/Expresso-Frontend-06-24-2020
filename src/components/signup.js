import React from 'react';

const postAPI = async (url, data) => {
    console.log('posting');
    const response = await fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
    console.log(response);
    return response;
  };

const handleSubmit = async () => {

    console.log('attempt');

    try {

      const data = {
        username: 'Expresso',
        email: 'admin@email.com',
        user_password: 'admin',
      };

      console.log('attempt pt2');

      const url = "http://localhost:9000/signup";
      const response = await postAPI(url, data);
      console.log(response);

      if (response.status === 200) {
        alert("Account Created");
      }
      if (response.status !== 200) {
        alert("Unable to sign up. Please try again later or go to login page.");
      }
    } catch (err) {
      return err;
    }
  };

export function Signup() {
    return (
        <div>
            signup page: not functional
        </div>
    );
}