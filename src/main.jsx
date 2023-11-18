import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './city.css';

import CityComponent from './components/CityComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />  */}
    <CityComponent />
    
  </React.StrictMode>,
)
