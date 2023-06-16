import React, { useState } from 'react';
import './App.css';
import RegisteredPlayers from './components/Players';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [register, setRegister] = useState(false);

  const handlePlayer1Change = event => {
    setPlayer1(event.target.value);
  };

  const handlePlayer2Change = event => {
    setPlayer2(event.target.value);
  };

  const handleContinue = () => {
    setRegister(true);
  };

  if (register) {
    return (
      <div className='players_container'>
        <h1>Active Players</h1>
        <RegisteredPlayers player1={player1} player2={player2} />
      </div>
    );
  }

  return (
    <div>
      <div className='register_container'>
        <h1>Players</h1>
        <div className='player'>
          <label>Player 1 Name </label>
          <input type='text' value={player1} onChange={handlePlayer1Change} />
        </div>

        <div className='player'>
          <label>Player 2 Name</label>
          <input type='text' value={player2} onChange={handlePlayer2Change} />
        </div>

        <div className='continue'>
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
