import React from 'react'
import { selectArea } from './Areas';
import { MyContext } from './Context';
import { useContext } from 'react';
import { calculate } from '../common/calculateFare';


const Fare = (props) => {
  const {from,to}=props;  
  const CityName=useContext(MyContext); 
  const area = selectArea(CityName);

  // const area = useContext(MyContext);
  // Calculate(from);
  // Calculate(area)
  // Calculate(to)
  var fromIndex = area.indexOf(from);
  var toIndex = area.indexOf(to);
  var diff = fromIndex - toIndex;
  var fare = Math.abs(diff*25); 
 
  return (
    <>{(fare>0)?<p>Fare: {fare}</p>:<p></p>}</>
  )
}

export default Fare;