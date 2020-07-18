import React from 'react';
import LayoutToolbar from './LayoutToolbar';
import Button from './Button';
import Theme from './Theme';
import LayoutToolbarRow from './LayoutToolbarRow';
import Icon from './Icon';

export default {
  title: 'Layout Toolbar',
  component: LayoutToolbar,
};

export const singleRow = () => (
  <Theme>
    <LayoutToolbar bgColor="primary" height="5rem">
      <Button>
        <Icon icon="menu" />
      </Button>
    </LayoutToolbar>
  </Theme>
);

export const multipleRows = () => (
  <Theme>
    <LayoutToolbar bgColor="primary" height="5rem">
      <LayoutToolbarRow>
        <Button>
          <Icon color="white" icon="menu" />
        </Button>
      </LayoutToolbarRow>
      <LayoutToolbarRow>
        <Button>
          <Icon icon="menu" />
        </Button>
      </LayoutToolbarRow>
    </LayoutToolbar>
  </Theme>
);
