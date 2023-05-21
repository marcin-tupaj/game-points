import { render, fireEvent } from '@testing-library/react';
import GameBoard from '../GameBoard';
import '@testing-library/jest-dom';
import { getLetterItems } from '../constants';
import { LetterItem } from 'types';

jest.mock('../constants', () => ({
  getLetterItems: jest.fn(),
}));

const lettersMock = [
  { letter: 'A', points: 100, bonus: { points: 100, count: 2 } },
  { letter: 'B', points: 80, bonus: { points: 80, count: 4 } },
  { letter: 'C', points: 60, bonus: null },
  { letter: 'D', points: 40, bonus: null },
];

const setup = (letterItemsMock: LetterItem[] = lettersMock) => {
  (getLetterItems as jest.Mock).mockReturnValue(letterItemsMock);

  return render(<GameBoard />);
};

describe('GameBoard', () => {
  it('should update score table and score when clicking on a letter button', () => {
    const screen = setup();

    const letterButton = screen.getByRole('button', {
      name: 'Select letter A',
    });

    fireEvent.click(letterButton);

    const itemBox = screen.getByLabelText('Item A');

    expect(itemBox).toBeInTheDocument();
    expect(screen.getByLabelText('Quantity: 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Score: 100')).toBeInTheDocument();

    expect(letterButton.getAttribute('variant')).toEqual(
      itemBox.getAttribute('variant')
    );
  });

  it('should render the correct bonus and total scores after clicking multiple letter buttons', () => {
    const screen = setup();

    const buttonA = screen.getByRole('button', { name: 'Select letter A' });
    fireEvent.click(buttonA);
    fireEvent.click(buttonA);
    fireEvent.click(buttonA);
    fireEvent.click(buttonA);
    fireEvent.click(screen.getByRole('button', { name: 'Select letter B' }));
    fireEvent.click(screen.getByRole('button', { name: 'Select letter C' }));
    fireEvent.click(screen.getByRole('button', { name: 'Select letter D' }));

    expect(screen.getByTestId('bonus-score').textContent).toBe('200');
    expect(screen.getByTestId('total-score').textContent).toBe('780');

    expect(screen.container.firstChild).toMatchSnapshot();
  });

  it('should reset the game and clear the score table, bonus score, and total score', () => {
    const screen = setup();

    const buttonA = screen.getByRole('button', { name: 'Select letter A' });

    fireEvent.click(buttonA);
    fireEvent.click(screen.getByRole('button', { name: 'Select letter B' }));
    fireEvent.click(buttonA);

    fireEvent.click(screen.getByRole('button', { name: 'Start a new game' }));

    expect(screen.queryByLabelText(/Item [A-Z]/)).not.toBeInTheDocument();
  });
});
