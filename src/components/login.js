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

let user_id = 'aaaa';
let user_name = 'bbbb';

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
    console.log(response);
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

        console.log(response)

        if (typeof response.userId === 'number') {
        user_id = response.userId;
        user_name = response.userName;

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
  const [inputEmail, setEmail] = useState('email');
  const [inputPassword, setPassword] = useState('password');

  const submitLogin = async () => {
    console.log('signin attempt');

    const response = await handleSubmit(inputEmail, inputPassword);

    console.log(response);

    dispatch(changeUserId(response.user_id || 0));
    dispatch(changeUserName(response.user_name || 0));
    dispatch(changeLogin(1 || 0));
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