import { render } from '@testing-library/react';
import GameBoard from '../GameBoard';
import '@testing-library/jest-dom';

test('renders the expected text', () => {
  const { getByText } = render(<GameBoard />);

  const textElement = getByText('Game Board');

  expect(textElement).toBeInTheDocument();
});
