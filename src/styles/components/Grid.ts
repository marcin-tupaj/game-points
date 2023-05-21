import styled from 'styled-components/macro';

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
  grid-gap: ${props => props.gap && '1rem'};
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
    margin-top: 1rem;
    border-top: 2px solid var(--border-color);
  }

  @media screen and (min-width: 769px) {
    max-height: 100vh;

    ${GameSection} + & {
      border-left: 2px solid var(--border-color);
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
  border-bottom: 2px solid var(--border-color);
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
  text-align: left;
`;
