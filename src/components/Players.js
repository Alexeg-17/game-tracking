import React, { useState } from 'react';
import '../Styles/Players.css';
import SaveGame from './SaveGame';

// eslint-disable-next-line react/prop-types
function RegisteredPlayers({ player1, player2 }) {
  const [counterPlayer1, setCounterPlayer1] = useState(0);
  const [counterPlayer2, setCounterPlayer2] = useState(0);
  const handleAddWinsPlayer1 = () => {
    setCounterPlayer1(counterPlayer1 + 1);
  };
  const handleAddWinsPlayer2 = () => {
    setCounterPlayer2(counterPlayer2 + 1);
  };

  const winDifference = Math.abs(counterPlayer1 - counterPlayer2);
  const currentWinner = counterPlayer1 > counterPlayer2 ? player1 : player2;
  const currentWinnerPoints =
    counterPlayer1 > counterPlayer2 ? counterPlayer1 : counterPlayer2;
  const handleSaveGame = () => {
    const gameData = {
      player1,
      player2,
      counterPlayer1,
      counterPlayer2,
    };
    localStorage.setItem('gameData', JSON.stringify(gameData));
    alert('¡Juego guardado en Local Storage!');
  };

  return (
    <div>
      <div className='active_players'>
        <div className='players'>
          <p> Player 1: {player1} </p>
          <p className='wins'> Wins:</p>
        </div>
        <div className='addWin'>
          <button onClick={handleAddWinsPlayer1}>Add Win</button>
          <p>{counterPlayer1}</p>
        </div>
      </div>

      <div className='active_players'>
        <div className='players'>
          <p> Player 2: {player2} </p>
          <p className='wins'> Wins:</p>
        </div>
        <div className='addWin'>
          <button onClick={handleAddWinsPlayer2}>Add Win</button>
          <p>{counterPlayer2}</p>
        </div>
      </div>

      <div className='diference'>
        <p>Win Difference: {winDifference}</p>
        {winDifference > 0 && (
          <p>
            Current Winner: {currentWinner} - Points: {currentWinnerPoints}
          </p>
        )}
      </div>

      <SaveGame onSaveGame={handleSaveGame} />
    </div>
  );
}
export default RegisteredPlayers;
