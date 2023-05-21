import { ItemsState, LetterItem } from 'types';
import ItemBox from 'styles/components/ItemBox';
import {
  ScoreTable,
  ScoreTableCell,
  ScoreTableRow,
} from 'styles/pages/HomePage/ScoreTable';
import { itemColors } from 'styles/pages/HomePage/constants';

type Props = {
  itemsState: ItemsState;
  letterItems: LetterItem[];
};

const ScoreList = ({ itemsState, letterItems }: Props) => {
  return (
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
            <ScoreTableCell colSpan={3}>Choose your item!</ScoreTableCell>
          </ScoreTableRow>
        ) : (
          Object.keys(itemsState).map(counterKey => (
            <ScoreTableRow key={counterKey}>
              <ScoreTableCell>
                <ItemBox
                  variant={
                    letterItems.findIndex(item => item.letter === counterKey) %
                    itemColors.length
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
  );
};
export default ScoreList;
