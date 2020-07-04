import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MenuPropsInterface } from './MenuPropsInterface';
import Theme from './Theme';
import { FIXME } from '../models/FixMe.model';
import { MENU } from './MenuEnum';

const MenuWrapperStyled = styled.div`
  position: relative;
  display: inline-block;
`;
const MenuTriggerStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  &::nth-child(1) {
    flex: 1 1 auto;
  }

  &::nth-child(2) {
    flex: 0 1 auto;
    position: absolute;
    right: 0;
  }
`;

const MenuSubStyled = styled.div<MenuPropsInterface>`
  min-width: 10rem;
  padding: 0.375rem 0;
  position: absolute;
  z-index: 50;

  ${({ theme }) => `
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius[12]};
    box-shadow: ${theme.boxShadow.md};
    button {
      justify-content: flex-start;
      border: none;
      border-radius: 0;
      padding: 0.5rem 1rem;
      text-align: center;
      width: 100%;
      &:not(:disabled) {
        &:hover {
          background-color: ${theme.colors['gray-lightest']};
        }
      }
    }
  `}

  ${({ above, below, after, before }) => {
    let alignment = '';
    if (above && !below) {
      alignment += `bottom: 135%;`;
    }

    if (below || !above) {
      alignment += `top: 135%;`;
    }

    if (after && !before) {
      alignment += `right: 0;`;
    }

    if (before || !after) {
      alignment += `left: 0;`;
    }

    // below or none of the above
    return alignment;
  }}
`;

const Menu: React.FC<MenuPropsInterface> = ({ children, above, below, after, before }: MenuPropsInterface) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isSubMenuActive, toggleSubmenuState] = React.useState(false);
  const toggleSubMenu = () => toggleSubmenuState(!isSubMenuActive);

  /**
   * Check for clicks outside this component
   */
  const handleClickOutside = (event: MouseEvent): void => {
    if (!wrapperRef || (wrapperRef && wrapperRef.current && !wrapperRef?.current?.contains(event?.target as Node))) {
      toggleSubmenuState(false);
    }
  };

  /**
   * Add event listener for clicks
   */
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  /**
   * Check if the
   * @param key
   */
  const renderSlot = (key: string) => {
    return children.filter((component: FIXME) => {
      return component?.key === key;
    });
  };

  return (
    <Theme>
      <MenuWrapperStyled ref={wrapperRef}>
        <MenuTriggerStyled onClick={() => toggleSubMenu()}>{renderSlot(MENU.TRIGGER)}</MenuTriggerStyled>
        {isSubMenuActive ? (
          <MenuSubStyled above={above} below={below} after={after} before={before}>
            {renderSlot(MENU.SUBMENU)}
          </MenuSubStyled>
        ) : (
          ''
        )}
      </MenuWrapperStyled>
    </Theme>
  );
};

export default Menu;
