import React from 'react';
import Anchor from './Anchor';

export default {
  title: 'Anchor',
  component: Anchor,
};

export const inline = () => (
  /* eslint-disable */
  <p style={{ fontFamily: 'Montserrat' }}>
    Lorem ipsum dolor{' '}
    <Anchor color="primary" href="http://www.google.com" title="a link redirecting to google">
      sit
    </Anchor>{' '}
    amet consectetur{' '}
    <Anchor
      color="warn"
      href="http://www.google.com"
      title="a link opening redirecting to google in a new tab"
      target="_blank"
    >
      adipisicing
    </Anchor>{' '}
    elit. Placeat sed labore{' '}
    <Anchor color="link" href="http://www.google.com" title="a link redirecting to google">
      voluptatum
    </Anchor>
    ? Aspernatur suscipit nobis cupiditate{' '}
    <Anchor href="http://www.google.com" title="a link redirecting to google">
      dolorem
    </Anchor>{' '}
    debitis excepturi a. Ipsa atque minima ratione{' '}
    <Anchor color="secondary" href="http://www.google.com" title="a link redirecting to google">
      libero
    </Anchor>{' '}
    quidem sint neque iste.
  </p>
  /* eslint-enable */
);
