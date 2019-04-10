import React from "react";

const Adjuster = (props) => {

  function handleAdjustSpeed(event){
    console.log(event.target.value);
    props.adjustSpeed(event.target.value);
  }

  return (
    <div>
      <label>-</label>
      <input type="range" id="intervalID" onChange={handleAdjustSpeed} name="speed" min="0" max="218"/>
      <label>+</label>
    </div>
  )
}

export default Adjuster;
