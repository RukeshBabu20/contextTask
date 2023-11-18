import React, { useState } from "react";
import  {MyContext}  from "../components/Context";
import Fare from "./FareComponent";
import { useContext } from "react";
import LocationSelectComponent from "./LocationSelectComponent";
import { selectArea } from "../common/UpdateList";

import InputLabel from '@mui/material/InputLabel';


const PlacesList=()=>{

  const myArea=useContext(MyContext);
  const areaList = selectArea(myArea);


  const [from,setFrom]=useState();
  const [to,setTo]=useState();
  
  const handleFirstInput = ( value) => {
    setFrom(value);
  };
  const handleSecondInput  = ( value) => {
    setTo(value);
  };

return(
    <>
    
    
    <LocationSelectComponent lists={areaList}  onSelectionChange={handleFirstInput} />  <br></br>
   
    <LocationSelectComponent  lists={areaList} onSelectionChange={handleSecondInput} />
    <Fare from={from} to={to}/>
    
    </>
)
}

export  {PlacesList,selectArea};
