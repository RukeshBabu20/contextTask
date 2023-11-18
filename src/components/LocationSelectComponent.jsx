import React, { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const LocationSelectComponent = ({ lists, onSelectionChange }) => {
  const [selectedName, setSelectedName] = useState('');

  const handleResult = (event) => {
    setSelectedName(event.target.value);
    onSelectionChange(event.target.value);
  };

  return (

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Area</InputLabel>

        <Select onChange={handleResult}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        lable="Select Area"
        >
          {
            lists.map((list,index)=>{
              return <MenuItem key={index} value={list}>{list}</MenuItem>
            })
          }
        </Select>
    </FormControl>
    </Box>
  );
};

export default LocationSelectComponent