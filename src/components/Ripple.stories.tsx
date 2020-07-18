import React from 'react';
import Ripple from './Ripple';
import Button from './Button';
import { FIXME } from '../models/FixMe.model';

export default {
  component: Ripple,
  title: 'Ripple',
  decorators: [(storyFn: FIXME) => <div style={{ textAlign: 'center' }}>{storyFn()}</div>],
};

export const rippleDefault = () => (
  <Ripple>
    <Button flat color="primary">
      label
    </Button>
  </Ripple>
);
