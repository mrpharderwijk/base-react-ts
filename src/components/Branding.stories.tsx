/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Branding from './Branding';

export default {
  component: Branding,
  title: 'Branding',
  parameters: {
    info: Branding,
  },
};

export const branding = () => <Branding name="Brandname" />;
