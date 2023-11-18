import React, { useContext, useState } from 'react';
import {Context} from '../components/Context';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const City = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleOnCityChange = (e) => {
    setSelectedCity(e.target.value);  
  }
  return (
    <>
    <div className='container'>
    <div className='city'>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
       
      <InputLabel id="demo-simple-select-label">Select City</InputLabel>
      
      <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity }
          label="City"
          onChange={handleOnCityChange}
        >     
          <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
          <MenuItem value={"Chennai"}>Chennai</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
      </Select>
    
      
      
     
      </FormControl>
    </Box>
    <br></br>
    {/* </div>
    
    <div className='area'> */}
    <Context key1={selectedCity} />
    </div>
  </div>
</>
  );
};


export default City;
