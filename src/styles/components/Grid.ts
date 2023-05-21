import styled from 'styled-components/macro';
import Heading from './Heading';

type justifyOptions =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

interface GridContainerProps {
  columns: string;
  gap?: boolean;
  repeat?: boolean;
  justifyContent?: justifyOptions;
  justifyItems?: justifyOptions;
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  padding?: 'sm' | 'md' | 'lg';
}

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  grid-template-columns: ${props =>
    props.repeat ? `repeat(${props.columns})` : props.columns};
  grid-gap: ${props => props.gap && 'var(--spacing-md)'};
  justify-content: ${props => props.justifyContent || undefined};
  justify-items: ${props => props.justifyItems || undefined};
  align-items: ${props => props.alignItems || undefined};
  padding: ${props =>
    props.padding ? `var(--spacing-${props.padding})` : undefined};

  @media (max-width: 768px) {
    justify-content: initial;
    grid-template-columns: auto;
  }
`;

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const GameContainer = styled(GridContainer)`
  height: 100%;
`;

export const GameSection = styled.main``;

export const ScoreSection = styled.aside`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: var(--spacing-md);
    border-top: 2px solid var(--border-color);
  }

  @media screen and (min-width: 769px) {
    max-height: 100vh;

    ${GameSection} + & {
      border-left: 2px solid var(--border-color);
    }
  }
`;

export const SectionTitle = styled(Heading)`
  font-size: var(--heading-font-size-h1);
  border-bottom: 2px solid var(--border-color);
  margin: 0;
  padding: var(--spacing-md);
  text-transform: uppercase;
  text-align: left;
`;
