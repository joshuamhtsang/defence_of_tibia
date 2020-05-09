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

  return (
    <div className="App"> 
      <div> Defence of Tibia </div>
      <div> Name: {characterName} </div>
    </div>
  )
}

export default App;
