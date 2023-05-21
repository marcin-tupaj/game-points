import styled, { css } from 'styled-components/macro';

interface HeadingProps {
  as?: keyof JSX.IntrinsicElements;
  level?: number;
  noMargin?: boolean;
}

const Heading = styled.h1<HeadingProps>`
  font-size: var(--heading-font-size);
  font-weight: 600;
  margin: ${props => (props.noMargin ? '0' : '0.67em 0')};

  ${props =>
    props.level &&
    css`
      font-size: var(--heading-font-size-h${props.level});
    `}
`;

export default Heading;
