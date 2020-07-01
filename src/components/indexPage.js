import React, { useState, useEffect } from 'react';
import PublicPull from './publicPull';
import { AddPull } from './addPull';
import { useSelector } from 'react-redux';
import {
  selectLogin,
} from '../redux/userSlice';

export function Index() {
  const logged_in = useSelector(selectLogin);
  const [pulls, setPulls] = useState([]);

  async function getData() {
    const response = await fetch('http://localhost:9000/',{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setPulls(result);
    };
    fetchData();
    return;
  }, []);

  const status = () => {
    if (logged_in === 1) {
        return (
          <li>
            <AddPull />
          </li>
        );
    }
  }

  return (
    <div>
      <ul>
        {status()}
        {pulls.length > 0 ? (
          pulls.map((pull, index) => (
            <li key={index}>
                <PublicPull pull={pull}/>
            </li>
          ))
        ) : (
            <li>No Data</li>
        )}
      </ul>
    </div>
  );
}
export default Index;