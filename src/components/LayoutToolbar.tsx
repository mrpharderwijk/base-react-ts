import React from 'react';
import styled from 'styled-components';
import { LayoutToolbarProps } from './LayoutToolbarProps';

const LayoutToolbarStyled = styled.div<LayoutToolbarProps>`
  align-items: center;
  background-color: ${({ bgColor, theme }) => {
    if (bgColor && (bgColor.startsWith('#') || bgColor.startsWith('rgb'))) {
      return bgColor;
    }

    if (bgColor && (bgColor === 'primary' || bgColor === 'secondary' || bgColor === 'warn' || bgColor === 'link')) {
      return theme.colors[bgColor] || theme.colors.white;
    }

    return theme.colors.white;
  }};
  box-sizing: border-box;
  display: flex;
  white-space: nowrap;
  width: 100%;

  ${({ children, height }) => {
    let flexDirection = 'column';

    if (Array.isArray(children) && children.length > 1) {
      return `
        flex-direction: ${flexDirection};
        min-height: 64px;
      `;
    }

    if (!Array.isArray(children)) {
      flexDirection = 'row';
    }

    return `
      flex-direction: row;
      height: ${height || '64px'};
      padding: 0 1rem;
    `;
  }}
`;

const LayoutToolbar: React.FC<LayoutToolbarProps> = ({ bgColor, children, height }: LayoutToolbarProps) => {
  return (
    <LayoutToolbarStyled bgColor={bgColor} height={height}>
      {children}
    </LayoutToolbarStyled>
  );
};

export default LayoutToolbar;
