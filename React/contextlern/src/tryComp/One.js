import React,{useContext} from 'react';
import AppContext from '../appContext';

function One() {
  const {data} = useContext(AppContext);
  return (
    <div>
      <h1>Hey Am inner comp of profile {data}</h1>
    </div>
  )
}

export default One
