import React, { useState, useEffect } from 'react';
import FillableBar from './components/FillableBar';
import './App.css';

function App() {
  const [characterName, setCharacterName] = useState('Ashe');
  const [turn, setTurn] = useState(0);
  const [castleMaxHealth, setCastleMaxHealth] = useState(100);
  const [castleHealth, setCastleHealth] = useState(80);
  const [gold, setGold] = useState(1000);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTurn(turn => turn + 1)
    }, 250);

    return () => clearInterval(interval);
  }
  );

  return (
    <div className="App"> 
      <div> Defence of Tibia </div>
      <div> Name: {characterName} </div>
      <div> Turn: {turn} </div>
      <div> Gold: {gold} </div>

      <FillableBar 
        value={castleHealth}
        max={castleMaxHealth}
        color='#ff0000'
        height='10'
      />
    </div>
  )
}

export default App;
