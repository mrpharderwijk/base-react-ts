import * as React from 'react';
import styled from 'styled-components';
import { BrandingPropsInterface } from './BrandingPropsInterface';
import Theme from './Theme';
import { flexHorizontal } from '../styled/flexBoxStyled';
import { BrandingImageStyledInterface } from './BrandingImageStyledInterface';

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

const BrandingImageWrapperStyled = styled.div`
  ${flexHorizontal}
  flex: 0 1 auto;
  z-index: 20;
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
`;

const BrandingImageStyled = styled.img<BrandingImageStyledInterface>`
  width: ${({ width }) => width || 30}px;
  height: ${({ height }) => height || 30}px;
`;

const BrandingLabelWrapperStyled = styled.div<{ isActive?: boolean }>`
  color: ${({ theme }) => theme.colors['brand-primary']};
  flex: 1 1 auto;
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -0.025em;
  margin-left: ${({ theme }) => theme.spacing[4]};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) => (isActive ? 'translateX(0rem)' : 'translateX(-0.3125rem)')};
  transition: all 300ms ease-in-out 100ms;
  z-index: 10;
  white-space: nowrap;

  ${({ theme }) => `
   @media (min-width: ${theme.screens.md}) {
      display: block;
      opacity: 1;
      transform: translateX(0rem);
    }
    `}
`;

const Branding: React.FC<BrandingPropsInterface> = ({
  logoSrc,
  name,
  logoWidth,
  logoHeight,
}: BrandingPropsInterface) => (
  <Theme>
    <BrandingStyled href="/">
      <BrandingImageWrapperStyled>
        <BrandingImageStyled
          src={
            logoSrc ||
            'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTgwcHgiIGhlaWdodD0iNTEzcHgiIHZpZXdCb3g9IjAgMCA1ODAgNTEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OS4zICg1MTE2NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Q29tYmluZWQgU2hhcGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNNTc3LjY5Mjk2NCwxMjYuODc2MzI1IEM1NzkuOTIyNjAyLDIyNS4zNDI4MjEgNTE0LjE3Nzk2MiwzNjEuOTI5NTAyIDQzMy4zOTksNDQzLjI0OCBDMzk3LjYyMzU4Nyw0NzkuMjYzMTU0IDM1OC45MDg0NjMsNTA0LjQzNTI3NSAzMjEuODM0NTg5LDUxMC42NTU5MTggTDIwMS4zNTMsMjk1LjIwMSBDMjE4LjUwOCwyODguMjY3IDIzMi43NDEsMjc2LjU4NiAyNDQuMDU2LDI2MC4xNjIgQzI1NS43MzUsMjQzLjczOCAyNjEuMjEsMjI1LjQ4OSAyNjEuMjEsMjA1LjA1IEMyNjEuMjEsMTc4LjQwNiAyNTEuNzIsMTU1Ljc3OCAyMzIuNzQxLDEzNi40MzQgQzIxMy43NjIsMTE3LjQ1NSAxOTAuNzY5LDEwNy45NjUgMTY0LjEyNSwxMDcuOTY1IEw3OS41NDM2NzY5LDEwNy45NjUgQzE2Ni4wNjc1MTEsNDUuNTMxMjYxMSAzMDYuODk3ODY4LDAuMjcyIDQxNS43NzgsMC4yNzIgQzQzMS4wNDUsMC4yNzIgNDQ1LjY4NiwxLjE2MiA0NTkuNDU5LDMuMDE4IEM0NTkuNjcwOTkzLDMuMDQ2NjgyNTIgNDU5Ljg4MjcwMSwzLjA3NTU3NjggNDYwLjA5NDEyNCwzLjEwNDY4MzQxIEM0OTkuOTA0MzU0LDguNTY0ODA0MzUgNTMyLjM4MTUwOCwyMi4xNDg1NTc2IDU1MS44MzksNDUuNzYyIEM1NTkuNTQxNjQxLDU1LjExMDAyMDggNTY1LjM5ODMwOCw2NS45NDQxOTQxIDU2OS41Nzc1Nyw3Ny45NjcxNTM5IEM1NDYuNjQ5ODA4LDc3Ljk2ODI0NjUgNTExLjg1NTE2OSw3Ny45NzAxMjYzIDQ3Ni44MzYxNzMsNzcuOTcyODQxOSBDNDk0LjIxOTkxNCwzNi41Mzg0NTExIDQ5Mi45MjIyODksOS43Mzg0OTE5NyA0ODIuOTgxLDcuMzU3IEM0NzUuNzM4NTM1LDUuNjIyOTU2OTEgNDY4LjE3OTQ1Nyw0LjIyMTQ5ODU5IDQ2MC4yMTcyNTQsMy4xMjE2NjMxMyBDNDY4LjExMTcwNSw0LjIwODk0NTI5IDQ3NS43MDYwODEsNS42MTUxODY2IDQ4Mi45ODEsNy4zNTcgQzQ5Mi45MjIyODksOS43Mzg0OTE5NyA0OTQuMjE5OTE0LDM2LjUzODQ1MTEgNDc2LjgzNjE3Myw3Ny45NzI4NDE5IEM0MTUuNjI1ODExLDc3Ljk3NzU4ODUgMzUzLjcyOTk5MSw3Ny45ODQ4ODg0IDM1My4zMjMsNzcuOTk1IEMzMzAuNjU0LDc4LjU1IDMxMS4zODksODYuOTM0IDI5NS41MjYsMTAzLjE0OCBDMjc5LjEwMiwxMTkuOTM4IDI3MC43MDgsMTM5LjY0NyAyNzAuNzA4LDE2My4wMDYgQzI3MC43MDgsMTg2LjcyOSAyNzkuMTAyLDIwNi41OTggMjk1LjUyNiwyMjMuMzg3IEMzMTEuOTUxLDIzOS44MTIgMzMyLjAyNCwyNDggMzU1Ljc0NywyNDggTDM4NS4zMjUsMjQ4IEMzOTUuNTQ0LDI0OCA0MDMuOTM4LDI1MS44NTUgNDExLjIzOSwyNTkuMTU1IEM0MTguMTc0LDI2Ni40NTUgNDIyLjE4OCwyNzQuOTUyIDQyMi4xODgsMjg0LjgwNyBDNDIyLjE4OCwyODkuOTE3IDQyMS4wOTQsMjk0LjcxMyA0MTkuMjY4LDI5OS4wOTMgQzQxNy40NDMsMzAzLjgzNiA0MTQuODg5LDMwNy41MTMgNDExLjYwNCwzMTAuNzk4IEM0MDguMzE4LDMxNC4wODIgNDA0LjMwNCwzMTYuNjQ5IDM5OS41NTksMzE4LjQ3NSBDMzk1Ljg4NywzMjAuMDA1IDM5MS45NiwzMjAuNzcxIDM4Ny43NzYsMzIwLjk3OCBDMzg3LjU1NCwzMjAuOTg4IDM2NS4xODMsMzIxLjAwMiAzNTEuNTYzLDMyMS4wMSBDMzE0LjYzLDMyMS4wMzYgMjU5LjE1OCwzMjEuMDQyIDI1OC43NDUsMzIxLjA0MiBMMjg5LjYwNCwzNjkuOTIgQzI4OS45MzYsMzY5LjkyIDM0Ni40NzMsMzY5LjkyMyAzNzcuMzkzLDM2OS45MjYgQzM4NC4yNjUsMzY5Ljk2NSAzODYuNzIxLDM3MCAzODcuNTM2LDM3MCBDMzg4Ljg2NSwzNzAgMzkwLjA4MSwzNzAgMzkxLjE2MywzNzAgQzQxMi4zMDgsMzY4LjU0MSA0MzAuNDY5LDM2MC4yMjkgNDQ1LjU0OCwzNDUuMTUgQzQ2Mi4zMzYsMzI4LjM2IDQ3MC43MywzMDguMjc3IDQ3MC43MywyODQuOTE4IEM0NzAuNzMsMjYxLjU2IDQ2Mi4zMzYsMjQxLjU0NiA0NDUuNTQ4LDIyNC43NTcgQzQyOS4xMjIsMjA4LjMzMyA0MDkuMDQ5LDIwMCAzODUuMzI1LDIwMCBMMzU1Ljc0NywyMDAgQzM0NS4xNjQsMjAwIDMzNi43NywxOTYuMjg0IDMyOS40NywxODguOTg1IEMzMjIuNTM0LDE4MS42ODYgMzE5LjI1LDE3My4yNTggMzE5LjI1LDE2My4wMzkgQzMxOS4yNSwxNTguMjk0IDMxOS45NzksMTUzLjUzMyAzMjEuODA1LDE0OS4xNTMgQzMyMy42MzEsMTQ0Ljc3MiAzMjYuMTg1LDE0MC43NSAzMjkuNDcsMTM3LjQ2NSBDMzMzLjExOSwxMzMuODE2IDMzNi43NywxMzEuMjU2IDM0MS41MTQsMTI5LjQzMSBDMzQ1LjE4OSwxMjcuODk5IDM0OS4xMjQsMTI3LjEzNyAzNTMuMzE0LDEyNi45MzMgQzM1My42NTYwNDksMTI2LjkxNjM2NyAzOTkuMDE4MTQ1LDEyNi45MDMxODkgNDUxLjAwMDg0LDEyNi44OTM1NDYgQzQ0Ny4wODc4NjYsMTMzLjEwODY4NiA0NDIuODM4ODg5LDEzOS40OTI4NTggNDM4LjIzNTI1LDE0Ni4wMjc4NzUgQzQ0Mi44Mzg4ODksMTM5LjQ5Mjg1OCA0NDcuMDg3ODY2LDEzMy4xMDg2ODYgNDUxLjAwMDg0LDEyNi44OTM1NDYgQzQ5Ni44NzEwODIsMTI2Ljg4NTAzNiA1NDcuODk2NDc5LDEyNi44NzkyNzggNTc3LjY5Mjk2NCwxMjYuODc2MzI1IFogTTI2NS42MjMxNTcsNTA5LjAzNjU2NSBDMTk5LjE3MTc1OCw0OTguNzg1Nzg1IDEzNS4zMzMzMzUsNDYzLjg5Nzg3OCA4Ni45NDU3MjYxLDQxNS4wNzM2MDUgQzg2LjkxNzQ4NTksNDE1LjA4NzA3IDg2Ljg4OTI0MzksNDE1LjEwMDUzNSA4Ni44NjEsNDE1LjExNCBDMzguMzAyLDM2Ni4wMDcgNS4yNSwzMDIuNzk0IDAuODk3LDIzNi4zNzIgQzAuODI1LDIzNS4yMzcgMC44MjEsMjM1LjE3NCAwLjgxOCwyMzUuMTE4IEMwLjc1MiwyMzMuOTg3IDAuNzI2LDIzMy41MDQgMC43MDIsMjMzLjAyIEMwLjY0MSwyMzEuNzcxIDAuNjQsMjMxLjc0OSAwLjYzOSwyMzEuNzIxIEMwLjU4NywyMzAuNDg3IDAuNTg2LDIzMC40NjMgMC41ODUsMjMwLjQzNSBDMC41MzksMjI5LjE5IDAuNTM3LDIyOS4xMzcgMC41MzUsMjI5LjA4OSBDMC40OTksMjI3LjkwNyAwLjQ5OCwyMjcuODY0IDAuNDk2LDIyNy44MjUgQzAuNDY2LDIyNi42MDggMC40NjUsMjI2LjU3MSAwLjQ2NCwyMjYuNTM2IEMwLjQ0MSwyMjUuMzcxIDAuNDQsMjI1LjMwOCAwLjQzOSwyMjUuMjQzIEMwLjQyMiwyMjQuMDE5IDAuNDIxLDIyMy45OTIgMC40MjEsMjIzLjk0NiBDMC40MTEsMjIyLjcyIDAuNDEsMjIyLjY4NiAwLjQxLDIyMi42NCBDMC40MDk0MDc1NCwyMDAuMjkzNzk0IDEwLjAxMjMzNzIsMTc4LjEwMTE3MyAyNi43MjgzOTE4LDE1Ni44NzMgTDE2NC4xMjUsMTU2Ljg3MyBDMTc3LjI2NCwxNTYuODczIDE4OC41NzksMTYxLjYxNyAxOTguMDY4LDE3MS4xMDcgQzIwNy45MjIsMTgwLjU5NiAyMTIuNjY3LDE5MS45MTEgMjEyLjY2NywyMDUuMDUgQzIxMi42NjcsMjE4LjU1NCAyMDcuOTIyLDIzMC4yMzMgMTk4LjA2OCwyMzkuNzIzIEMxODguNTc5LDI0OS4yMTIgMTc3LjI2NCwyNTMuOTU4IDE2NC4xMjUsMjUzLjk1OCBMMTIwLjY5MiwyNTMuNTkyIEwyNjUuNjIzMTU3LDUwOS4wMzY1NjUgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMDAwMDAwLCAxLjAwMDAwMCkiIHN0cm9rZT0iI0ZGMzM2NiI+CiAgICAgICAgICAgIDxnIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNGRjMzNjYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
          }
          alt={`${name || 'Rocket Science'} logo`}
          width={logoWidth}
          height={logoHeight}
        />
      </BrandingImageWrapperStyled>
      <BrandingLabelWrapperStyled>{name || 'Rocket Science'}</BrandingLabelWrapperStyled>
    </BrandingStyled>
  </Theme>
);

export default Branding;
