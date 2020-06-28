/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Avatar from './Avatar';

export default {
  component: Avatar,
  title: 'Avatar',
  parameters: {
    info: Avatar,
  },
};

export const avatar = () => <Avatar />;
