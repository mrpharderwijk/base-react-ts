/* eslint-disable */
import React from 'react';
import List from './List';
import ListItem from './ListItem';
import ListItemSeparator from './ListItemSeparator';

export default {
  component: List,
  title: 'List',
};

export const ListHorizontal = () => (
  <List horizontal>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalCircle = () => (
  <List vertical listStyle="circle">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalDecimal = () => (
  <List vertical listStyle="decimal">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalDisc = () => (
  <List vertical listStyle="disc">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalLowerAlpha = () => (
  <List vertical listStyle="lower-alpha">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalLowerRoman = () => (
  <List vertical listStyle="lower-roman">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalSquare = () => (
  <List vertical listStyle="square">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalUpperAlpha = () => (
  <List vertical listStyle="upper-alpha">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalUpperRoman = () => (
  <List vertical listStyle="upper-roman">
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);

export const ListVerticalWithSeparators = () => (
  <List vertical>
    <ListItem>item</ListItem>
    <ListItemSeparator />
    <ListItem>item</ListItem>
    <ListItemSeparator />
    <ListItem>item</ListItem>
    <ListItem>item</ListItem>
  </List>
);
/* eslint-enable */
