import { useMemo, useState } from 'react';
import { LetterItem, getLetterItems } from './constants';
import GlobalStyle from 'styles/Global';

export default function GameBoard() {
  const [itemsState, setItemsState] = useState<{
    [key: string]: { count: number; score: number; bonusScore: number };
  }>({});

  const letterItems = getLetterItems();

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

  const overallScore = useMemo(
    () =>
      Object.keys(itemsState).reduce((acc, letter) => {
        const letterItem = itemsState[letter];
        return acc + letterItem.score;
      }, 0),
    [itemsState]
  );

  const bonusScore = useMemo(
    () =>
      Object.keys(itemsState).reduce((acc, letter) => {
        const letterItem = itemsState[letter];
        return acc + letterItem.bonusScore;
      }, 0),
    [itemsState]
  );

  const handleNewGame = () => {
    setItemsState({});
  };

  return (
    <>
      <GlobalStyle />
      <div>
        {letterItems.map(
          (letterItem, index) =>
            letterItem && (
              <button
                type="button"
                key={letterItem.letter}
                onClick={handleLetterClick(letterItem)}
              >
                {letterItem.letter}
              </button>
            )
        )}
      </div>
      <hr />
      <div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {!Object.keys(itemsState).length ? (
              <tr>
                <td colSpan={3}>Choose your item!</td>
              </tr>
            ) : (
              Object.keys(itemsState).map(counterKey => (
                <tr key={counterKey}>
                  <td>
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        lineHeight: '42px',
                        textAlign: 'center',
                        border: '1px solid #000',
                      }}
                      aria-label={`Item ${counterKey}`}
                    >
                      <span>{counterKey}</span>
                    </div>
                  </td>
                  <td>{itemsState[counterKey].count}</td>
                  <td>
                    {itemsState[counterKey].score +
                      itemsState[counterKey].bonusScore}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <hr />
      <div>
        <strong>Bonuses</strong>{' '}
        <span data-testid="bonus-score">{bonusScore}</span>
      </div>
      <hr />
      <div>
        Total <span data-testid="total-score">{overallScore + bonusScore}</span>
      </div>
      <hr />
      <button type="button" onClick={handleNewGame}>
        New game
      </button>
    </>
  );
}
