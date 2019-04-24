import React from "react";

const Play = (props) => {

  function playAudio(){
    props.playAudio();
  }

  return (
    <div>
      <button onClick={playAudio}></button>
    </div>
  )
}

export default Play;
