import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeUserId,
  changeUserName,
  changeLogin,
  selectUserId,
  selectUserName,
  selectLogin,
} from '../redux/userSlice';

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

async function handleSubmit(submitEmail, submitPassword) {

    const data = {
        email: submitEmail,
        user_password: submitPassword,
      };

    try {

        const url = "http://localhost:9000/login";
        const response = await postAPI(url, data);

        if (response.userId > 0) {
          const info = {
            user_id: response.userId,
            user_name: response.userName,
          }
          return info;
        } else {
          const info = {
            user_id: null,
            user_name: null,
        }

        return info;
        }
    } catch (err) {
      return err;
    }
  };

export function Login() {
  const userId = useSelector(selectUserId);
  const userName = useSelector(selectUserName);
  const logged_in = useSelector(selectLogin);
  const dispatch = useDispatch();
  const [inputEmail, setEmail] = useState('expresso@email.com');
  const [inputPassword, setPassword] = useState('password');

  function updateUser(id, name) {
    dispatch(changeUserId(id || 0));
    dispatch(changeUserName(name || 0));
  }

  const submitLogin = async () => {

    const response = await handleSubmit(inputEmail, inputPassword);

    if (response.user_id !== null) {
      updateUser(response.user_id, response.user_name);
      dispatch(changeLogin(1 || 0));
    } else {
      alert('Incorrect login credentials');     
    }
  }

    return (
    <div>
        <div>
            User ID: {userId} User Name: {userName} Status: {logged_in}
        </div>
        <div>
            <div>Email</div>
            <input
                value={inputEmail}
                onChange={e => setEmail(e.target.value)}
            />
            <div>Password</div>
            <input
                value={inputPassword}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                onClick={() =>
                submitLogin()
                }
            >
                Sign In
            </button>
        </div>
    </div>
  );
}