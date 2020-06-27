import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryHolder from './StoryHolder';

addDecorator((storyFn) => <StoryHolder>{storyFn()}</StoryHolder>);
addDecorator(
  withInfo({
    inline: true,
    propTablesExclude: [StoryHolder],
  }),
);
