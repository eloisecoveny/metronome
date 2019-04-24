import React from "react";

const Adjuster = (props) => {

  function handleAdjustSpeed(event){
    console.log(event.target.value);
    props.adjustSpeed(event.target.value);
  }

  return (
    <div className="adjuster">
      <label>-</label>
      <input type="range" id="speed" onChange={handleAdjustSpeed} name="speed" min="0" max="218" />
      <label>+</label>
    </div>
  )
}

export default Adjuster;
