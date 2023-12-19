
import React from "react";
import './../styles/App.css';
import {usestate} from 'react';


const App = () => {

  const [count,setCount]=usestate(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked <span>{count}</span> times</p>
        <button onClick={setCount++}>Click me</button>
    </div>
  )
}

export default App;
