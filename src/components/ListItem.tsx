import React from 'react';
import styled from 'styled-components';
import { FIXME } from '../models/FixMe.model';

const ListItemStyled = styled.li<ListItemPropsInterface>`
  ${({ horizontal }) =>
    horizontal &&
    `
    flex: 1 1 auto;
  `}
  width: 100%;
`;

interface ListItemPropsInterface {
  children?: FIXME;
  horizontal?: boolean;
  separator?: boolean;
  vertical?: boolean;
}

const ListItem: React.FC<ListItemPropsInterface> = ({ horizontal, vertical, children }: ListItemPropsInterface) => (
  <ListItemStyled horizontal={horizontal} vertical={vertical}>
    {children}
  </ListItemStyled>
);

export default ListItem;
