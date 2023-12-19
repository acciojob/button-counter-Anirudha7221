
import React from "react";
import './../styles/App.css';
import {usestate} from 'react';


const App = () => {

  const [count,setCount]=usestate(0);

  function inc(){
    setCount(count+1);
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked <span>{count}</span> times</p>
        <button onClick={inc}>Click me</button>
    </div>
  )
}

export default App;
