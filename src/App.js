import React, { useState, useEffect } from 'react';
import FillableBar from './components/FillableBar';
import BattleField from './components/BattleField';
import './App.css';

function App() {
  const [characterName, setCharacterName] = useState('Ashe');
  const [turn, setTurn] = useState(0);
  const [castleMaxHealth, setCastleMaxHealth] = useState(100);
  const [castleHealth, setCastleHealth] = useState(80);
  const [gold, setGold] = useState(1000);
  const [citizens, setCitizens] = useState(100);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setTurn(turn => turn + 1);

      const income_period = 10;
      if (turn % income_period === 0 && turn != 0) {
        let income = Math.round(citizens * 0.1);
        setGold(gold => gold + income);
      }

      const population_increase_period = 100;
      if (turn % population_increase_period === 0 && turn != 0) {
        let population_increase = Math.round(citizens * 0.05);
        setCitizens(citizens => citizens + population_increase);
      }
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
      <div> Citizens: {citizens}</div>

      <FillableBar 
        value={castleHealth}
        max={castleMaxHealth}
        color='#ff0000'
        height='10'
      />

      <BattleField>

      </BattleField>
    </div>
  )
}

export default App;
