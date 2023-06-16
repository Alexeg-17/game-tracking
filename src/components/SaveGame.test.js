import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SaveGame from './SaveGame';

describe('SaveGame', () => {
  it('Call the function OnSaveGame', () => {
    const onSaveGameMock = jest.fn();

    const { getByText } = render(<SaveGame onSaveGame={onSaveGameMock} />);

    const saveButton = getByText('Save Game');
    fireEvent.click(saveButton);

    expect(onSaveGameMock).toHaveBeenCalledTimes(1);
  });
});
