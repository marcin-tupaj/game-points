import styled from 'styled-components/macro';
import { itemColors } from '../pages/HomePage/constants';

interface ItemBoxProps {
  variant: number;
}

const ItemBox = styled.div<ItemBoxProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;

  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;

  background-color: ${props =>
    itemColors[props.variant].default || 'rgb(38, 137, 12)'};
  border-radius: 4px;
  border-color: ${props =>
    itemColors[props.variant].darker || 'rgb(34, 123, 11)'};
  transition: all 0.3s ease;
`;

export default ItemBox;
