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

export const primaryDefault = () => <Button primary label="label" />;
export const primaryWithIcon = () => <Button primary icon="search" label="label" />;

export const secondaryDefault = () => <Button secondary label="label" />;
export const secondaryWithIcon = () => <Button secondary icon="search" label="label" />;

export const outlineDefault = () => <Button outline label="label" />;
export const outlineWithIcon = () => <Button outline icon="search" label="label" />;

export const userButton = () => <Button user label="Sign in" />;
export const userAvatarButton = () => <Button userAvatar label="Mr. Anonymous" />;

export const none = () => <Button label="label" />;
