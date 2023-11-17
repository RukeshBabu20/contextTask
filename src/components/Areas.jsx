
import React, { useState } from "react";
import  {MyContext}  from "./Context";
import Fare from "./FareComponent";
import { useContext } from "react";
import LocationSelectComponent from "./LocationSelectComponent";
import { SelectArea } from "./UpdateList";


const PlacesList=()=>{

  const myArea=useContext(MyContext);
  const areaList = SelectArea(myArea);


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
    <h1>
    <LocationSelectComponent lists={areaList}  onSelectionChange={handleFirstInput} />  
    <LocationSelectComponent  lists={areaList} onSelectionChange={handleSecondInput} />
    <Fare from={from} to={to}/>
    </h1>
    </>
)
}

export  {PlacesList,SelectArea};
