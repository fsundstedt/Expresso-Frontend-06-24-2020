import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeUser,
  selectUser,
} from '../redux/userSlice';

export function Test() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [inputName, setUserName] = useState('test name');

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