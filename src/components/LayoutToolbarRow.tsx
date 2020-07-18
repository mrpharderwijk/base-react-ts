import React from 'react';
import styled from 'styled-components';
import { FIXME } from '../models/FixMe.model';

const LayoutToolbarRowStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: 64px;
`;

const LayoutToolbarRow: React.FC<{ children: FIXME }> = ({ children }: { children: FIXME }) => (
  <LayoutToolbarRowStyled>{children}</LayoutToolbarRowStyled>
);

export default LayoutToolbarRow;
