
import React, { useState } from "react";
import  {MyContext}  from "./Context";
import Fare from "./FareComponent";
import { useContext } from "react";
import LocationSelectComponent from "./LocationSelectComponent";


const PlacesList=()=>{

  const myArea=useContext(MyContext);
  const areaList = SelectArea(myArea);
  console.log(areaList);

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
    <LocationSelectComponent lists={areaList}  onSelectionChange={handleFirstInput} />  
    <LocationSelectComponent  lists={areaList} onSelectionChange={handleSecondInput} />
    <Fare from={from} to={to}/>
    </>
)
}

const SelectArea = (CityName) => {
  if(CityName=='Hyderabad'){
    return ['h1','h2','h3','h4','h5','h6','h7','h8'];
  }
  else if(CityName=='Chennai'){
    return ['c1','c2','c3','c4','c5','c6','c7','c8'];
  }
  else if(CityName=='Delhi'){
    return ['d1','d2','d3','d4','d5','d6','d7','d8'];
  }
  else{
    return []
  }
}

export  {PlacesList,SelectArea};