import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

function App() {
  const [characterName, setCharacterName] = useState('Ashe');
  const [turn, setTurn] = useState(0);
  const [castleHealth, setCastleHealth] = useState(100);
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
      <div> Turn: {turn}</div>
    </div>
  )
}

export default App;
