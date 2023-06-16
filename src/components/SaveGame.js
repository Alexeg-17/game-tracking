import React from 'react';
import '../Styles/SaveGame.css';
// eslint-disable-next-line react/prop-types
function SaveGame({ onSaveGame }) {
  const handleSaveGame = () => {
    onSaveGame();
  };

  return (
    <div className='save'>
      <button type='submit' onClick={handleSaveGame}>
        Save Game
      </button>
    </div>
  );
}

export default SaveGame;
