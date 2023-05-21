import { useMemo, useState } from 'react';
import { LetterItem, getLetterItems } from './constants';
import Button from 'styles/components/Button';
import {
  GameContainer,
  GridContainer,
  GameSection,
  PageContainer,
  ScoreSection,
  SectionTitle,
} from 'styles/components/Grid';
import GlobalStyle from 'styles/Global';
import ItemBox from 'styles/components/ItemBox';
import { itemColors } from 'styles/pages/HomePage/constants';
import Heading from 'styles/components/Heading';
import {
  SectionBody,
  ScoreTableColumn,
  ScoreTable,
  ScoreTableRow,
  ScoreTableCell,
} from 'styles/pages/HomePage/ScoreTable';

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
      <PageContainer>
        <GameContainer columns="2fr 1fr">
          <GameSection>
            <SectionTitle>Kahoot! points</SectionTitle>
            <SectionBody>
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
            </SectionBody>
          </GameSection>
          <ScoreSection>
            <SectionTitle id="scores-section-title">Player items</SectionTitle>
            <ScoreTableColumn>
              <ScoreTable aria-describedby="scores-section-title">
                <thead>
                  <ScoreTableRow>
                    <ScoreTableCell as="th" scope="col">
                      Item
                    </ScoreTableCell>
                    <ScoreTableCell as="th" scope="col">
                      Quantity
                    </ScoreTableCell>
                    <ScoreTableCell as="th" scope="col">
                      Score
                    </ScoreTableCell>
                  </ScoreTableRow>
                </thead>
                <tbody>
                  {!Object.keys(itemsState).length ? (
                    <ScoreTableRow>
                      <ScoreTableCell colSpan={3}>
                        Choose your item!
                      </ScoreTableCell>
                    </ScoreTableRow>
                  ) : (
                    Object.keys(itemsState).map(counterKey => (
                      <ScoreTableRow key={counterKey}>
                        <ScoreTableCell>
                          <ItemBox
                            variant={
                              letterItems.findIndex(
                                item => item.letter === counterKey
                              ) % itemColors.length
                            }
                            aria-label={`Item ${counterKey}`}
                          >
                            <span>{counterKey}</span>
                          </ItemBox>
                        </ScoreTableCell>
                        <ScoreTableCell
                          aria-label={`Quantity: ${itemsState[counterKey].count}`}
                        >
                          {itemsState[counterKey].count}
                        </ScoreTableCell>
                        <ScoreTableCell
                          aria-label={`Score: ${
                            itemsState[counterKey].score +
                            itemsState[counterKey].bonusScore
                          }`}
                        >
                          {itemsState[counterKey].score +
                            itemsState[counterKey].bonusScore}
                        </ScoreTableCell>
                      </ScoreTableRow>
                    ))
                  )}
                </tbody>
              </ScoreTable>
            </ScoreTableColumn>
            <GridContainer
              columns="auto auto"
              gap
              justifyContent="start"
              padding="lg"
            >
              <strong>Bonuses</strong>{' '}
              <span data-testid="bonus-score">{bonusScore}</span>
            </GridContainer>
            <div>
              <hr />
            </div>
            <GridContainer
              columns="auto auto"
              gap
              alignItems="center"
              padding="lg"
            >
              <div>
                <Heading as="p" level={2} noMargin>
                  Total
                </Heading>
                <Heading data-testid="total-score" as="p" level={3} noMargin>
                  {overallScore + bonusScore}
                </Heading>
              </div>
              <div>
                <Button
                  type="button"
                  onClick={handleNewGame}
                  fullWidth
                  aria-label="Start a new game"
                >
                  New game
                </Button>
              </div>
            </GridContainer>
          </ScoreSection>
        </GameContainer>
      </PageContainer>
    </>
  );
}
