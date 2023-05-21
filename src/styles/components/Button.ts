import styled from 'styled-components/macro';
import { itemColors } from '../pages/HomePage/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: number;
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;

  margin: 0;
  border: 0;
  min-width: var(--button-dimension);
  min-height: var(--button-dimension);
  padding: 0 var(--spacing-md) var(--spacing-sm);
  display: inline-block;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  font-size: 1rem;
  font-weight: 600;

  background-color: ${props =>
    (typeof props.variant !== 'undefined' &&
      itemColors[props.variant].default) ||
    'var(--action-primary-color)'};
  color: var(--white-color);
  box-shadow: var(--box-shadow-color) 0 -4px inset;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    margin-top: 2px
    background-color: ${props =>
      (typeof props.variant !== 'undefined' &&
        itemColors[props.variant].darker) ||
      'var(--action-primary-darker-color)'};
    box-shadow: var(--box-shadow-color) 0px -2px inset;
  }
`;

export default Button;
