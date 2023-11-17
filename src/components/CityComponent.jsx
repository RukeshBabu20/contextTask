
import React, { useContext, useState } from 'react';
import { MyContext } from './Context';
import { PlacesList } from './Areas';
import Fare from './FareComponent';

const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const SelectCategory = (e) => {
    setSelectedCity(e.target.value);  
  }
  return (
    <>
      <label>Select city:</label>
      
      <select value={selectedCity} onChange={SelectCategory}>
        <option value="">Select city</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
      </select>

    <MyContext.Provider value={selectedCity}>
        <PlacesList />
        <Fare />
    </MyContext.Provider>
</>
  );
};


export default City;