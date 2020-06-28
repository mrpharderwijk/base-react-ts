import styled from 'styled-components';
import { flexHorizontal } from '../styled/flexBoxStyled';

const BrandingImageWrapperStyled = styled.div`
  flex: 0 1 auto;
  z-index: 20;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  ${flexHorizontal}
`;

export default BrandingImageWrapperStyled;
