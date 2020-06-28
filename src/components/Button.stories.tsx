/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  parameters: {
    info: Button,
  },
};

export const primaryDefault = () => <Button primary label="label" onClick={action('clicked')}></Button>;
export const primaryWithIcon = () => <Button primary icon="search" label="label" onClick={action('clicked')}></Button>;

export const secondaryDefault = () => <Button secondary label="label" onClick={action('clicked')}></Button>;
export const secondaryWithIcon = () => (
  <Button secondary icon="search" label="label" onClick={action('clicked')}></Button>
);

export const iconText = () => <Button icon="😀" label="label" onClick={action('clicked')}></Button>;
