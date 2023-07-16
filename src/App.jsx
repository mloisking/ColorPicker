
import React from 'react';
import {useState} from 'react'


//Write color component
const Color = (props) => {
  return <div className= {props.color}></div>
}

// Picker component here
function Picker() {
const [selectedColor, selectedColor]=useState("")
 return (
   <Picker>
<div>
<div id="navbar">
  <div>Currently selected: </div>
  <div className={selectedColor}>{selectedColor}</div>
</div>
 </div> 
</Picker>
)
 };

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here */}
      <Color color="blue"/>
      <Color color="green"/>
      <Color color="red"/>
      </div>
    </div>
  )
};


export default App;
