import React from 'react'
import { Selectplace } from './Places';
import { MyContext } from './Context';
import { useContext } from 'react';


const Ticket = (props) => {
  const {fromloc,toloc}=props;  
  const CityName=useContext(MyContext); 
  const area = Selectplace(CityName);
  var fromIndex = area.indexOf(fromloc);
  var toIndex = area.indexOf(toloc);
  var diff = fromIndex - toIndex;
  var fare = Math.abs(diff*25); 
 
  return (
    <>
      <FareComponent result={fare}/>
    </>
  )

}

export { Ticket };