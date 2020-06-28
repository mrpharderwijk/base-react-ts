import styled from 'styled-components';
import { AvatarProps } from './AvatarProps';

const AvatarStyled = styled.div<AvatarProps>`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.half};
  overflow: hidden;
  width: ${({ width }) => width || 100}px;
  height: ${({ height }) => height || 100}px;
`;

export default AvatarStyled;
