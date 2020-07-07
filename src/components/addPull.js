import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectUserId,
} from '../redux/userSlice';

import { PullBox, PullTextInput, PullInputRadioSet } from '../styled'

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
    const [process, setProcess] = useState('Pourover');
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
        process: process,
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
        return response;
    }
    
    function changeInputs() {
        setInputs(!inputs);
    }

    function showInputs() {
        if (inputs) {
            return (
                <PullBox>
                    <div>
                        <div>
                            <PullTextInput
                            value={brand} 
                            onChange={e => setBrand(e.target.value)}/>
                        </div>
                        <PullInputRadioSet>
                            <div>
                                <label>
                                    <input
                                    type='radio'
                                    value='Pourover'
                                    checked={process === 'Pourover'}
                                    onChange={e => setProcess(e.target.value)}/>
                                    Drip
                                </label>
                                <label>
                                    <input
                                    type='radio'
                                    value='Press'
                                    checked={process === 'Press'}
                                    onChange={e => setProcess(e.target.value)}/>
                                    Press
                                </label>
                                <label>
                                    <input
                                    type='radio'
                                    value='Espresso'
                                    checked={process === 'Espresso'}
                                    onChange={e => setProcess(e.target.value)}/>
                                    Espresso
                                </label>
                                <label>
                                    <input
                                    type='radio'
                                    value='Cold Brew'
                                    checked={process === 'Cold Brew'}
                                    onChange={e => setProcess(e.target.value)}/>
                                    Cold Brew
                                </label>
                            </div>
                        </PullInputRadioSet>
                        <PullInputRadioSet>
                            <div>
                                <label>
                                    <input
                                    type='radio'
                                    value='Light'
                                    checked={roast === 'Light'}
                                    onChange={e => setRoast(e.target.value)}/>
                                    Light
                                </label>
                                <label>
                                    <input
                                    type='radio'
                                    value='Medium'
                                    checked={roast === 'Medium'}
                                    onChange={e => setRoast(e.target.value)}/>
                                    Medium
                                </label>
                                <label>
                                    <input
                                    type='radio'
                                    value='Dark'
                                    checked={roast === 'Dark'}
                                    onChange={e => setRoast(e.target.value)}/>
                                    Dark
                                </label>
                            </div>
                        </PullInputRadioSet>
                        <div>Grind
                            <input
                            value={grind} 
                            onChange={e => setGrind(e.target.value)}/>
                        </div>
                        <div>Grind Weight
                            <input 
                            value={grindWeight}                         
                            onChange={e => setGrindWeight(e.target.value)}/>
                        </div>
                        <div>Water Weight
                            <input
                            value={waterWeight}
                            onChange={e => setWaterWeight(e.target.value)}/>
                        </div>
                        <div>Extraction Time
                            <input
                            value={extractionTime}
                            onChange={e => setExtractionTime(e.target.value)}/>
                        </div>
                        <div>Rating
                            <input
                            value={rating}
                            onChange={e => setRating(e.target.value)}/>
                        </div>
                        <div>Favorite
                            <input
                            value={favorite}
                            onChange={e => setFavorite(e.target.value)}/>
                        </div>
                        <div>Notes
                            <input
                            value={notes}
                            onChange={e => setNotes(e.target.value)}/>
                        </div>
                        <button onClick={() => submitPull()}>
                        Add Pull
                        </button>
                    </div>
                    <button onClick={() => changeInputs()}>
                        close
                    </button>
                </PullBox>
            )
        } else {
            return (
                <PullBox onClick={() => changeInputs()}>
                    Add your pull
                </PullBox>
            )
        }
    };

    return (
        <div>
            {showInputs()}
        </div>
    );
}