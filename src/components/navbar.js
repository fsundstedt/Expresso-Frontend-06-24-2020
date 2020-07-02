import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectUserName,
  selectLogin,
} from '../redux/userSlice';

export function Navbar() {
    const userName = useSelector(selectUserName);
    const logged_in = useSelector(selectLogin);

    const status = () => {
        if (logged_in === 1) {
            return (
                <div>
                    <div>
                        My Pulls
                    </div>
                    <div>
                        Welcome {userName}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <button>
                        Sign Up
                    </button>
                </div>
            );
        }
    }
    return (
        <>
            <div>
                Expresso
            </div>
            {status()}
        </>
    )
}