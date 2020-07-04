/* eslint-disable */
import React from 'react';
import Menu from './Menu';
import List from './List';
import ListItem from './ListItem';
import Button from './Button';
import * as MenuNotes from './MenuNotes.md';
import ListItemSeparator from './ListItemSeparator';
import { ButtonColorsType } from './ButtonColorsType';

export default {
  component: Menu,
  title: 'Menu',
  parameters: {
    notes: MenuNotes,
  },
  decorators: [(storyFn: any) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>],
};

const menuVariants: {
  label?: string;
  color?: ButtonColorsType;
  above?: boolean;
  below?: boolean;
  after?: boolean;
  before?: boolean;
  raised?: boolean;
  flat?: boolean;
  stroked?: boolean;
}[] = [
  { label: 'none' },
  { label: 'above', color: 'primary', above: true, raised: true },
  { label: 'below', color: 'secondary', below: true, flat: true },
  { label: 'after', color: 'warn', after: true, stroked: true },
  { label: 'before', color: 'link', before: true },
];

export const menu = () =>
  menuVariants.map((menuVariant, index) => (
    <div style={{ marginRight: index !== menuVariants.length - 1 ? '1rem' : '', display: 'inline' }}>
      <Menu
        key={index}
        above={menuVariant?.above}
        below={menuVariant?.below}
        after={menuVariant?.after}
        before={menuVariant?.before}
      >
        <Button
          color={menuVariant?.color}
          raised={menuVariant?.raised}
          flat={menuVariant?.flat}
          stroked={menuVariant?.stroked}
          key="trigger"
          label={menuVariant.label}
        />
        <List vertical key="submenu">
          <ListItem>
            <Button label={menuVariant.label} />
          </ListItem>
          <ListItem>
            <Button label={menuVariant.label} />
          </ListItem>
          <ListItemSeparator />
          <ListItem>
            <Button label={menuVariant.label} labelWeight="normal" />
          </ListItem>
          <ListItem>
            <Button label={menuVariant.label} labelWeight="light" />
          </ListItem>
        </List>
      </Menu>
    </div>
  ));
