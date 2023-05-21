import styled from 'styled-components/macro';

export const ScoreTableColumn = styled.div`
  flex: 1;
  min-height: 260px;
  overflow-y: auto;
  border-bottom: 2px solid var(--border-color);
`;

export const ScoreTableContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-color);
`;

export const SectionBody = styled.div`
  padding: 1rem;
`;

export const ScoreTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const ScoreTableRow = styled.tr`
  border-bottom: 1px solid;
`;

interface ScoreTableCellProps {
  as?: keyof JSX.IntrinsicElements;
  colSpan?: number;
}
export const ScoreTableCell = styled.td<ScoreTableCellProps>`
  padding: 0.5rem 0;
  colspan: ${props => props.colSpan || 1};
`;
