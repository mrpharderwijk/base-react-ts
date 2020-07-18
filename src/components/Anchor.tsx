import React from 'react';
import styled from 'styled-components';
import { AnchorPropsInterface } from './AnchorPropsInterface';
import Theme from './Theme';

const AnchorStyled = styled.a`
  ${({ color, theme }) => {
    let textColor = '';

    switch (color) {
      case 'primary':
        textColor = theme.colors.primary;
        break;

      case 'secondary':
        textColor = theme.colors['secondary-dark'];
        break;

      case 'warn':
        textColor = theme.colors.warn;
        break;

      case 'link':
        textColor = theme.colors.link;
        break;

      default:
        textColor = 'inherit';
    }
    return `
      color: ${textColor};
      font-weight: ${theme.fontWeight.semibold}
      `;
  }}
`;

const Anchor: React.FC<AnchorPropsInterface> = ({
  href = '#',
  title,
  target = '_self',
  children,
  color,
}: AnchorPropsInterface) => {
  const rel = target && target === '_blank' ? 'noopener noreferrer' : '';

  return (
    <Theme>
      <AnchorStyled color={color} href={href} title={title} target={target} rel={rel}>
        {children}
      </AnchorStyled>
    </Theme>
  );
};

export default Anchor;
