import React, { useState, MouseEvent, useLayoutEffect } from 'react';
import { lighten } from 'polished';
import styled from 'styled-components';
import { FIXME } from '../models/FixMe.model';
import { RipplePropsInterface } from './RipplePropsInterface';
import { ButtonColorsType } from './ButtonColorsType';
import Theme from './Theme';

const RippleContainerStyled = styled.div<RipplePropsInterface>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;

  span {
    animation-name: ripple;
    animation-duration: ${({ duration }) => duration}ms;
    background-color: ${({ color, theme }) => {
      if (color) {
        return lighten(0.3, theme.colors[color]);
      }
      return lighten(0.3, theme.colors['gray-dark']);
    }};
    border-radius: 100%;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2.5);
    }
  }
`;

const useDebouncedRippleCleanUp = (rippleCount: number, duration: number, cleanUpFunction: () => FIXME) => {
  useLayoutEffect(() => {
    let bounce: FIXME = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const Ripple: React.FC<{ duration?: number; color?: ButtonColorsType }> = ({
  duration = 1000,
  color,
}: {
  duration?: number;
  color?: ButtonColorsType;
}) => {
  const [rippleArray, setRippleArray] = useState<[] | { x: number; y: number; size: number }[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent<EventTarget>) => {
    const rippleContainer = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
    // const size = (event.currentTarget as HTMLDivElement).offsetWidth;
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.pageX - (rippleContainer.x + window.pageXOffset) - size / 2;
    const y = event.pageY - (rippleContainer.y + window.pageYOffset) - size / 2;
    const newRipple: { x: number; y: number; size: number } = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <Theme>
      <RippleContainerStyled duration={duration} color={color} onMouseDown={addRipple}>
        {rippleArray.length
          ? (rippleArray as { x: number; y: number; size: number }[]).map((ripple: FIXME, index: number) => {
              /* eslint-disable react/no-array-index-key */
              return (
                <span
                  key={`span${index}`}
                  style={{
                    top: ripple.y,
                    left: ripple.x,
                    width: ripple.size,
                    height: ripple.size,
                  }}
                />
              );
              /* eslint-enable react/no-array-index-key */
            })
          : ''}
      </RippleContainerStyled>
    </Theme>
  );
};

export default Ripple;
