import { describe, expect, test } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import RegisteredPlayers from './Players';

describe('RegisteredPlayers', () => {
  test('renders player names', () => {
    const player1 = 'Alex';
    const player2 = 'David';
    const { getByText } = render(
      <RegisteredPlayers player1={player1} player2={player2} />
    );

    expect(getByText(`Player 1: ${player1}`)).toBeInTheDocument();
    expect(getByText(`Player 2: ${player2}`)).toBeInTheDocument();
  });

  test('player wins', () => {
    const player1 = 'Alex';
    const player2 = 'David';
    const { getByText } = render(
      <RegisteredPlayers player1={player1} player2={player2} />
    );

    fireEvent.click(getByText('Add Win'));
    fireEvent.click(getByText('Add Win'));

    expect(getByText('2')).toBeInTheDocument();
  });

  test('calculates wins difference', () => {
    const player1 = 'Alex';
    const player2 = 'David';
    const { getByText } = render(
      <RegisteredPlayers player1={player1} player2={player2} />
    );

    fireEvent.click(getByText('Add Win'));
    fireEvent.click(getByText('Add Win'));
    fireEvent.click(getByText('Add Win'));

    expect(getByText('Win Difference: 1')).toBeInTheDocument();
  });

  test('displays current winner', () => {
    const player1 = 'Alex';
    const player2 = 'David';
    const { getByText } = render(
      <RegisteredPlayers player1={player1} player2={player2} />
    );

    fireEvent.click(getByText('Add Win'));

    expect(
      getByText(`Current Winner: ${player1} with 1 wins`)
    ).toBeInTheDocument();
  });

  test('saves game data', () => {
    const player1 = 'Alex';
    const player2 = 'David';
    const { getByText } = render(
      <RegisteredPlayers player1={player1} player2={player2} />
    );

    fireEvent.click(getByText('Add Win'));
    fireEvent.click(getByText('Save Game'));

    expect(localStorage.getItem('gameData')).toEqual(
      JSON.stringify({
        player1,
        player2,
        counterPlayer1: 1,
        counterPlayer2: 0,
      })
    );
    expect(window.alert).toHaveBeenCalledWith(
      'Game successfully saved in Local Storage!'
    );
  });
});
