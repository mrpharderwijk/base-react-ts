import React from 'react';
import styled from 'styled-components';
import { flexHorizontal, flexVertical } from '../styled/flexBoxStyled';
import { FIXME } from '../models/FixMe.model';
import Theme from './Theme';

type ListStyleType =
  | 'circle'
  | 'decimal'
  | 'disc'
  | 'lower-alpha'
  | 'lower-roman'
  | 'none'
  | 'square'
  | 'upper-alpha'
  | 'upper-roman';

const OrderedListStyled = styled.ol<ListPropsInterface>`
  ${({ horizontal }) => horizontal && flexHorizontal};
  ${({ vertical }) => vertical && flexVertical};
  list-style-type: ${({ listStyle }) => listStyle || 'none'};
  margin: 0;
  padding: 0;
`;
const UnOrderedListStyled = styled.ol<ListPropsInterface>`
  ${({ horizontal }) => horizontal && flexHorizontal};
  ${({ vertical }) => vertical && flexVertical};
  list-style-type: ${({ listStyle }) => listStyle || 'none'};
  margin: 0;
  padding: 0;
`;

interface ListPropsInterface {
  horizontal?: boolean;
  vertical?: boolean;
  ordered?: boolean;
  listStyle?: ListStyleType;
  children?: FIXME;
}

const List: React.FC<ListPropsInterface> = ({
  children,
  horizontal,
  listStyle,
  ordered,
  vertical,
}: ListPropsInterface) => {
  return ordered ? (
    <Theme>
      <OrderedListStyled horizontal={horizontal} vertical={vertical} listStyle={listStyle}>
        {children}
      </OrderedListStyled>
    </Theme>
  ) : (
    <Theme>
      <UnOrderedListStyled horizontal={horizontal} vertical={vertical} listStyle={listStyle}>
        {children}
      </UnOrderedListStyled>
    </Theme>
  );
};

export default List;
