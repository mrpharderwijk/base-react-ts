import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainNavigationLinkStyled = styled(Link)`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors['black-dark']};
  cursor: pointer;
  display: block;
  line-height: ${({ theme }) => theme.lineHeight[5]};
  margin: 0;
  overflow: visible;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;
  position: relative;
  z-index: 10;

  &:before {
    border-radius: 1.5rem;
    bottom: 0;
    content: '';
    left: -0.1875rem;
    right: -0.1875rem;
    position: absolute;
    top: 0;
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    z-index: 0;
  }

  &:hover {
    text-decoration: none;

    &:before {
      background-color: ${({ theme }) => theme.colors['gray-normal']};
    }
  }

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: block;
    font-size: ${({ theme }) => theme.fontWeight.normal};
  }
`;

export default MainNavigationLinkStyled;
