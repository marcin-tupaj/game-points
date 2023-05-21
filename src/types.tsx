export type ItemsState = {
  [key: string]: { count: number; score: number; bonusScore: number };
};

export type LetterItem = {
  letter: string;
  points: number;
  bonus: {
    points: number;
    count: number;
  } | null;
};
