import React from 'react';
import styled from 'styled-components';

const ListItemSeparatorStyled = styled.li`
  display: block;
  height: 1px;
  padding: 0.5rem 0;
  width: 100%;

  &::before {
    background-color: ${({ theme }) => theme.colors['gray-lighter']};
    content: '';
    display: block;
    height: 1px;
    width: 100%;
  }
`;
const ListItemSeparator: React.FC = () => <ListItemSeparatorStyled />;

export default ListItemSeparator;
