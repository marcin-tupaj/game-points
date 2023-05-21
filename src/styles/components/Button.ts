import styled from 'styled-components/macro';
import { itemColors } from '../pages/HomePage/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: number;
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  position: relative;
  z-index: 1;

  margin: 0;
  border: 0;
  min-width: 42px;
  min-height: 42px;
  padding: 0 16px 4px;
  display: inline-block;
  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  font-size: 0.875rem;
  font-weight: 600;
  font-family: Montserrat, "Noto Sans Arabic", "Helvetica Neue", Helvetica, Arial, sans-serif;

  background-color: ${props =>
    (typeof props.variant !== 'undefined' &&
      itemColors[props.variant].default) ||
    'rgb(38, 137, 12)'};
  color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.25) 0 -4px inset;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    margin-top: 2px
    background-color: ${props =>
      (typeof props.variant !== 'undefined' &&
        itemColors[props.variant].darker) ||
      'rgb(34, 123, 11)'};
    box-shadow: rgba(0, 0, 0, 0.25) 0px -2px inset;
  }
`;

export default Button;
