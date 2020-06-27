/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const plainText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const iconText = () => (
  <Button onClick={action('clicked')}>
    <span className="btn__icon">😀</span>
    <span className="btn__label">label</span>
  </Button>
);
