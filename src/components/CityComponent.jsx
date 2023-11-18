import React, { useContext, useState } from 'react';
import {Context} from '../components/Context';

const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleOnCityChange = (e) => {
    setSelectedCity(e.target.value);  
  }
  return (
    <>
      <label>Select city:</label>
      
      <select value={selectedCity} onChange={handleOnCityChange}>
        <option value="">Select city</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
      </select>

      <Context key1={selectedCity} />

</>
  );
};


export default City;