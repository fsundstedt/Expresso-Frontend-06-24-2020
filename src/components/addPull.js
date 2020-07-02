import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUserId,
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

async function handleSubmit(data) {

    try {

        const url = "http://localhost:9000/pull";
        const response = await postAPI(url, data);

        if (typeof response.userId === 'number') {
            alert('Success')
            return true;
        }
        if (typeof response.userId !== 'number') {
            alert('Failed')
            return false;
        }
    } catch (err) {
      return err;
    }
  };

export function AddPull() {
    const [inputs, setInputs] = useState(false);
    const [brand, setBrand] = useState('Test Brand');
    const [roast, setRoast] = useState('Test Roast');
    const [grind, setGrind] = useState('Fine');
    const [grindWeight, setGrindWeight] = useState(20.4);
    const [waterWeight, setWaterWeight] = useState(235);
    const [extractionTime, setExtractionTime] = useState(30);
    const [rating, setRating] = useState(2);
    const [favorite, setFavorite] = useState(1);
    const [notes, setNotes] = useState('Test notes');
    const id = useSelector(selectUserId);

    const data = {
        id: id,
        brand: brand,
        roast: roast,
        grind: grind,
        grindWeight: grindWeight,
        waterWeight: waterWeight,
        extractionTime: extractionTime,
        rating: rating,
        favorite: favorite,
        notes: notes,
        show: 1,
    }

    const submitPull = async () => {
        const response = await handleSubmit(data);
      }
    
    function changeInputs() {
        setInputs(!inputs);
    }

    function showInputs() {
        if (inputs) {
            return (
                <div>
                    <div>
                        <div>Brand</div>
                        <input
                        value={brand} 
                        onChange={e => setBrand(e.target.value)}/>
                        <div>Roast</div>
                        <input
                        value={roast} 
                        onChange={e => setRoast(e.target.value)}/>
                        <div>Grind</div>
                        <input
                        value={grind} 
                        onChange={e => setGrind(e.target.value)}/>
                        <div>Grind Weight</div>
                        <input 
                        value={grindWeight}                         
                        onChange={e => setGrindWeight(e.target.value)}/>
                        <div>Water Weight</div>
                        <input
                        value={waterWeight}
                        onChange={e => setWaterWeight(e.target.value)}/>
                        <div>Extraction Time</div>
                        <input
                        value={extractionTime}
                        onChange={e => setExtractionTime(e.target.value)}/>
                        <div>Rating</div>
                        <input
                        value={rating}
                        onChange={e => setRating(e.target.value)}/>
                        <div>Favorite</div>
                        <input
                        value={favorite}
                        onChange={e => setFavorite(e.target.value)}/>
                        <div>Notes</div>
                        <input
                        value={notes}
                        onChange={e => setNotes(e.target.value)}/>
                        <button onClick={() => submitPull()}>
                        Sign In
                        </button>
                    </div>
                    <button onClick={() => submitPull()}>
                        close
                    </button>
                </div>
            )
        } else {
            return (
                <button onClick={() => changeInputs()}>
                    Add your pull
                </button>
            )
        }
    };

    return (
        <div>
            {showInputs()}
        </div>
    );
}