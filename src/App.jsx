
import React from 'react';
import { useState } from 'react'


//Write color component

const Color = ({ color, setSelectedColor }) => {
  return (
    <div
      className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  )
}

// Picker component here
function Picker() {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <Picker>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="red" selectedColor={selectedColor} />
        <Color color="blue" selectedColor={selectedColor} />
        <Color color="green" selectedColor={selectedColor} />
      </div>
    </Picker>
  )
};

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="blue">blue</div>
      </div>
      <div id="colors-list">{/* colors go here */}
        <Color color="blue" />
        <Color color="green" />
        <Color color="red" />
      </div>
    </div>
  )
};


export default App;
