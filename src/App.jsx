import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [selectedCity, setSelectedCity] = React.useState('');

  const handleChange = (e) => {
    setSelectedCity(e.target.value); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity }
          label="Select City"
          onChange={handleChange}
        >
          <MenuItem value={"Hyderabad"}>Hyderabad</MenuItem>
          <MenuItem value={"Chennai"}>Chennai</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
