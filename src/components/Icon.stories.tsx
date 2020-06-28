/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Icon',
};

export const IconHome = () => <Icon icon={'home'} />;
export const IconSearch = () => <Icon icon={'magnifier'} />;
