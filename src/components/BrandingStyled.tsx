import styled from 'styled-components';
import { flexHorizontal } from '../styled/flexBoxStyled';

const BrandingStyled = styled.a<{ isActive?: boolean }>`
  ${flexHorizontal}
  padding: 0.5rem 0;
  cursor: pointer;
  overflow: ${({ isActive }) => (isActive ? `auto` : `hidden`)};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export default BrandingStyled;
