import { useMemo, useState } from 'react';
import {
  GameContainer,
  GameSection,
  PageContainer,
  ScoreSection,
  SectionTitle,
} from 'styles/components/Grid';
import GlobalStyle from 'styles/Global';
import {
  SectionBody,
  ScoreTableColumn,
} from 'styles/pages/HomePage/ScoreTable';
import { getLetterItems } from './constants';
import { ItemsState } from 'types';
import GameButtons from './GameButtons';
import ScoreSummary from './ScoreSummary';
import ScoreList from './ScoreList';

export default function GameBoard() {
  const [itemsState, setItemsState] = useState<ItemsState>({});

  const letterItems = getLetterItems();

  const overallScore = useMemo(
    () =>
      Object.values(itemsState).reduce(
        (acc, letterItem) => acc + letterItem.score,
        0
      ),
    [itemsState]
  );

  const bonusScore = useMemo(
    () =>
      Object.values(itemsState).reduce(
        (acc, letterItem) => acc + letterItem.bonusScore,
        0
      ),
    [itemsState]
  );

  const totalScore = overallScore + bonusScore;

  const handleNewGameClick = () => {
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
              <GameButtons
                letterItems={letterItems}
                setItemsState={setItemsState}
              />
            </SectionBody>
          </GameSection>
          <ScoreSection>
            <SectionTitle id="scores-section-title">Player items</SectionTitle>
            <ScoreTableColumn>
              <ScoreList itemsState={itemsState} letterItems={letterItems} />
            </ScoreTableColumn>
            <ScoreSummary
              onNewGameClick={handleNewGameClick}
              bonusScore={bonusScore}
              totalScore={totalScore}
            />
          </ScoreSection>
        </GameContainer>
      </PageContainer>
    </>
  );
}
