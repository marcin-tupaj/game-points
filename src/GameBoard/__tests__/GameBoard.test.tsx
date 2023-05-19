import { render, fireEvent } from '@testing-library/react';
import GameBoard from '../GameBoard';
import '@testing-library/jest-dom';
import { LetterItem, getLetterItems } from '../constants';

jest.mock('../constants', () => ({
  getLetterItems: jest.fn(),
}));

const setup = (letterItemsMock: LetterItem[]) => {
  (getLetterItems as jest.Mock).mockReturnValue(letterItemsMock);

  return render(<GameBoard />);
};

describe('GameBoard', () => {
  it('should render the correct bonus and total scores', () => {
    const lettersMock = [
      { letter: 'A', points: 100, bonus: { points: 100, count: 2 } },
      { letter: 'B', points: 80, bonus: { points: 80, count: 4 } },
      { letter: 'C', points: 60, bonus: null },
      { letter: 'D', points: 40, bonus: null },
    ];

    const screen = setup(lettersMock);

    // Click on the buttons to fill up the scores list
    fireEvent.click(screen.getByRole('button', { name: 'A' }));
    fireEvent.click(screen.getByRole('button', { name: 'A' }));
    fireEvent.click(screen.getByRole('button', { name: 'B' }));
    fireEvent.click(screen.getByRole('button', { name: 'C' }));

    expect(screen.getByTestId('bonus-score').textContent).toBe('100');
    expect(screen.getByTestId('total-score').textContent).toBe('440');
  });
});
