import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeUser,
  changeLogin,
  selectUser,
  selectLogin,
} from '../redux/userSlice';

export function Test() {
  const user = useSelector(selectUser);
  const login = useSelector(selectLogin);
  const dispatch = useDispatch();
  const [inputName, setUserName] = useState('test name');
  const [inputLogin, setLogin] = useState(login);

  function loginGroup() {
    console.log(inputLogin);
    setLogin(1);
    console.log(inputLogin);
    dispatch(changeLogin(inputLogin || 0));
    console.log(inputLogin);
  }

  return (
    <div>
      <div>
        {user}
      </div>
      <div>
        <input
          value={inputName}
          onChange={e => setUserName(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(changeUser(inputName || 0))
          }
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}