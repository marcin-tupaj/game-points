import { LetterItem } from 'types';

const letterItems = [
  { letter: 'A', points: 50, bonus: { points: 50, count: 3 } },
  { letter: 'B', points: 30, bonus: { points: 30, count: 2 } },
  { letter: 'C', points: 20, bonus: null },
  { letter: 'D', points: 15, bonus: null },
];

export const getLetterItems = (): LetterItem[] => letterItems;
