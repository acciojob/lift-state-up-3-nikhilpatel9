
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
 
   const [selectedOption, setSelectedOption] = useState('');
   const submitOption=(option)=>{
     setSelectedOption(option)
   }
  return (
    <div class="parent">
        <ChildComponent1 selectedOption={selectedOption} submitOption={submitOption}/>
        <ChildComponent2 selectedOption={selectedOption} submitOption={submitOption}/>
        <h2>Selected Option: {selectedOption}</h2>
    </div>
  )
}

export default App
