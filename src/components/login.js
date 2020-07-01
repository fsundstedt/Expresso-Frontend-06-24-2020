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
    console.log('Component login line 25: ' + response.userId);
    console.log(response)
    return response;
  };

async function handleSubmit(submitEmail, submitPassword) {
    console.log('handle submit function')

    const data = {
        email: submitEmail,
        user_password: submitPassword,
      };

    try {

        const url = "http://localhost:9000/login";
        const response = await postAPI(url, data);

        if (typeof response.userId === 'number') {

        const info = {
            user_id: response.userId,
            user_name: response.userName,
        }
        return info;
        }
        if (typeof response.userId !== 'number') {
        console.log('login failed');
        return false;
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
  const [inputEmail, setEmail] = useState('frank@email.com');
  const [inputPassword, setPassword] = useState('password');

  function updateUser(id, name) {
    dispatch(changeUserId(id || 0));
    dispatch(changeUserName(name || 0));
  }

  const submitLogin = async () => {
    console.log('signin attempt');

    const response = await handleSubmit(inputEmail, inputPassword);

    console.log(response.user_id);

    updateUser(response.user_id, response.user_name);
    dispatch(changeLogin(1 || 0));
    console.log(userId);
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