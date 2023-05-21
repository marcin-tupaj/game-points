import Button from 'styles/components/Button';
import { GridContainer } from 'styles/components/Grid';
import { itemColors } from 'styles/pages/HomePage/constants';
import { ItemsState, LetterItem } from 'types';
import { Dispatch, SetStateAction, memo } from 'react';

type Props = {
  letterItems: LetterItem[];
  setItemsState: Dispatch<SetStateAction<ItemsState>>;
};

const GameButtons = memo(({ letterItems, setItemsState }: Props) => {
  const handleLetterClick = (clikedLetter: LetterItem) => () => {
    setItemsState(prev => {
      const newCount = (prev[clikedLetter.letter]?.count || 0) + 1;
      const newScore =
        (prev[clikedLetter.letter]?.score || 0) + clikedLetter.points;
      const newBonusScore = clikedLetter.bonus
        ? Math.floor(newCount / clikedLetter.bonus.count) *
          clikedLetter.bonus.points
        : 0;

      return {
        ...prev,
        [clikedLetter.letter]: {
          count: newCount,
          score: newScore,
          bonusScore: newBonusScore,
        },
      };
    });
  };

  return (
    <GridContainer columns="2, 1fr" repeat gap>
      {letterItems.map(
        (letterItem, index) =>
          letterItem && (
            <Button
              type="button"
              key={letterItem.letter}
              variant={index % itemColors.length}
              onClick={handleLetterClick(letterItem)}
              aria-label={`Select letter ${letterItem.letter}`}
            >
              {letterItem.letter}
            </Button>
          )
      )}
    </GridContainer>
  );
});

export default GameButtons;
