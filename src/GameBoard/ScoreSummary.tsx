import Button from 'styles/components/Button';
import { GridContainer } from 'styles/components/Grid';
import Heading from 'styles/components/Heading';

type Props = {
  bonusScore: number;
  totalScore: number;
  onNewGameClick: () => void;
};

const ScoreSummary = ({ bonusScore, totalScore, onNewGameClick }: Props) => {
  return (
    <>
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
      <GridContainer columns="auto auto" gap alignItems="center" padding="lg">
        <div>
          <Heading as="p" level={2} noMargin>
            Total
          </Heading>
          <Heading data-testid="total-score" as="p" level={3} noMargin>
            {totalScore}
          </Heading>
        </div>
        <div>
          <Button
            type="button"
            onClick={onNewGameClick}
            fullWidth
            aria-label="Start a new game"
          >
            New game
          </Button>
        </div>
      </GridContainer>
    </>
  );
};

export default ScoreSummary;
