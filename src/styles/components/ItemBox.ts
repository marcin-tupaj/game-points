import styled from 'styled-components/macro';
import { itemColors } from '../pages/HomePage/constants';

interface ItemBoxProps {
  variant: number;
}

const ItemBox = styled.div<ItemBoxProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--button-dimension);
  height: var(--button-dimension);

  font-size: 1rem;
  font-weight: 600;
  text-align: center;

  color: var(--white-color);

  background-color: ${props =>
    itemColors[props.variant].default || 'var(--action-primary-color)'};
  border-radius: 4px;
  border-color: ${props =>
    itemColors[props.variant].darker || 'var(--action-primary-darker-color)'};
  transition: all 0.3s ease;
`;

export default ItemBox;
