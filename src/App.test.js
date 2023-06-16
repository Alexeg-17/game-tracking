import { describe, expect, it } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('renders the registration', () => {
    const { getByLabelText, getByText } = render(<App />);
    const player1Input = getByLabelText('Player 1 Name');
    const player2Input = getByLabelText('Player 2 Name');
    const continueButton = getByText('Continue');

    expect(player1Input).toBeInTheDocument();
    expect(player2Input).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });

  it('updates player names', () => {
    const { getByLabelText, getByText } = render(<App />);
    const player1Input = getByLabelText('Player 1 Name');
    const player2Input = getByLabelText('Player 2 Name');
    const continueButton = getByText('Continue');

    fireEvent.change(player1Input, { target: { value: 'Alex' } });
    fireEvent.change(player2Input, { target: { value: 'David' } });
    fireEvent.click(continueButton);

    const player1Name = getByText('Alex');
    const player2Name = getByText('David');

    expect(player1Name).toBeInTheDocument();
    expect(player2Name).toBeInTheDocument();
  });
});
