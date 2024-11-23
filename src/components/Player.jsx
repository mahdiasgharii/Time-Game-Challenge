import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  
  function hanldeClick() {
   setEnteredPlayerName(playerName.current.value);
   playerName.current.value = '';
  }



  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'Quest'}</h2>
      <p>
        <input 
        ref={playerName} 
        type="text" 
        value={enteredPlayerName} 
        />
        <button onClick={hanldeClick} >Set Name</button>
      </p>
    </section>
  );
}
