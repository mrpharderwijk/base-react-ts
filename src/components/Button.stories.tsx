/* eslint-disable */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { ButtonColorsType } from './ButtonColorsType';
import { ButtonSizeType } from './ButtonSizeType';
import { AvatarPropsInterface } from './AvatarPropsInterface';

export default {
  component: Button,
  title: 'Button',
  parameters: {
    info: Button,
  },
};

const buttonBasicTypes: { label: string; color?: ButtonColorsType; disabled?: boolean }[] = [
  { label: 'basic' },
  { label: 'basic', disabled: true },
  { label: 'primary', color: 'primary' },
  { label: 'primary', color: 'primary', disabled: true },
  { label: 'secondary', color: 'secondary' },
  { label: 'secondary', color: 'secondary', disabled: true },
  { label: 'warn', color: 'warn' },
  { label: 'warn', color: 'warn', disabled: true },
  { label: 'link', color: 'link' },
  { label: 'link', color: 'link', disabled: true },
];
export const basic = () =>
  buttonBasicTypes.map((buttonType, index) => (
    <React.Fragment key={index}>
      <Button
        key={index}
        color={buttonType?.color}
        disabled={buttonType?.disabled}
        label={buttonType?.label}
        onClick={action('clicked')}
      />
      {index !== buttonBasicTypes.length - 1 ? <br /> : ''}
    </React.Fragment>
  ));

const buttonRaisedTypes: {
  label: string;
  color?: ButtonColorsType;
  disabled?: boolean;
  pill?: boolean;
  raised?: boolean;
}[] = [
  { label: 'basic', raised: true },
  { label: 'basic', pill: true, raised: true },
  { label: 'basic', disabled: true, raised: true },
  { label: 'primary', color: 'primary', raised: true },
  { label: 'primary', color: 'primary', raised: true, pill: true },
  { label: 'primary', color: 'primary', raised: true, disabled: true },
  { label: 'secondary', color: 'secondary', raised: true },
  { label: 'secondary', color: 'secondary', raised: true, pill: true },
  { label: 'secondary', color: 'secondary', raised: true, disabled: true },
  { label: 'warn', color: 'warn', raised: true },
  { label: 'warn', color: 'warn', raised: true, pill: true },
  { label: 'warn', color: 'warn', raised: true, disabled: true },
  { label: 'link', color: 'link', raised: true },
  { label: 'link', color: 'link', raised: true, pill: true },
  { label: 'link', color: 'link', raised: true, disabled: true },
];
export const raised = () =>
  buttonRaisedTypes.map((buttonType, index) => (
    <React.Fragment key={index}>
      <Button
        key={index}
        color={buttonType?.color}
        disabled={buttonType?.disabled}
        label={buttonType.label}
        onClick={action('clicked')}
        pill={buttonType?.pill}
        raised={buttonType?.raised}
      />
      {index !== buttonRaisedTypes.length - 1 ? <br /> : ''}
    </React.Fragment>
  ));

const buttonFlatTypes: {
  label: string;
  color?: ButtonColorsType;
  disabled?: boolean;
  flat?: boolean;
  pill?: boolean;
}[] = [
  { label: 'basic', flat: true },
  { label: 'basic', pill: true, flat: true },
  { label: 'basic', disabled: true, flat: true },
  { label: 'primary', color: 'primary', flat: true },
  { label: 'primary', color: 'primary', flat: true, pill: true },
  { label: 'primary', color: 'primary', flat: true, disabled: true },
  { label: 'secondary', color: 'secondary', flat: true },
  { label: 'secondary', color: 'secondary', flat: true, pill: true },
  { label: 'secondary', color: 'secondary', flat: true, disabled: true },
  { label: 'warn', color: 'warn', flat: true },
  { label: 'warn', color: 'warn', flat: true, pill: true },
  { label: 'warn', color: 'warn', flat: true, disabled: true },
  { label: 'link', color: 'link', flat: true },
  { label: 'link', color: 'link', flat: true, pill: true },
  { label: 'link', color: 'link', flat: true, disabled: true },
];
export const flat = () =>
  buttonFlatTypes.map((buttonType, index) => (
    <React.Fragment key={index}>
      <Button
        key={index}
        color={buttonType?.color}
        disabled={buttonType?.disabled}
        label={buttonType.label}
        onClick={action('clicked')}
        flat={buttonType?.flat}
        pill={buttonType?.pill}
      />
      {index !== buttonFlatTypes.length - 1 ? <br /> : ''}
    </React.Fragment>
  ));

const buttonStrokedTypes: {
  label: string;
  color?: ButtonColorsType;
  disabled?: boolean;
  stroked?: boolean;
  pill?: boolean;
}[] = [
  { label: 'basic', stroked: true },
  { label: 'basic', disabled: true, stroked: true },
  { label: 'basic', pill: true, stroked: true },
  { label: 'primary', color: 'primary', stroked: true },
  { label: 'primary', color: 'primary', stroked: true, pill: true },
  { label: 'primary', color: 'primary', stroked: true, disabled: true },
  { label: 'secondary', color: 'secondary', stroked: true },
  { label: 'secondary', color: 'secondary', stroked: true, pill: true },
  { label: 'secondary', color: 'secondary', stroked: true, disabled: true },
  { label: 'warn', color: 'warn', stroked: true },
  { label: 'warn', color: 'warn', stroked: true, pill: true },
  { label: 'warn', color: 'warn', stroked: true, disabled: true },
  { label: 'link', color: 'link', stroked: true },
  { label: 'link', color: 'link', stroked: true, pill: true },
  { label: 'link', color: 'link', stroked: true, disabled: true },
];
export const stroked = () =>
  buttonStrokedTypes.map((buttonType, index) => (
    <React.Fragment key={index}>
      <Button
        key={index}
        color={buttonType?.color}
        disabled={buttonType?.disabled}
        label={buttonType.label}
        onClick={action('clicked')}
        stroked={buttonType?.stroked}
        pill={buttonType?.pill}
      />
      {index !== buttonStrokedTypes.length - 1 ? <br /> : ''}
    </React.Fragment>
  ));

const buttonSizeTypes: {
  label: string;
  color?: ButtonColorsType;
  disabled?: boolean;
  flat?: boolean;
  raised?: boolean;
  stroked?: boolean;
  size?: ButtonSizeType;
  pill?: boolean;
}[] = [
  { label: 'basic sm' },
  { label: 'basic lg', size: 'lg' },
  { label: 'raised small', color: 'primary', raised: true },
  { label: 'raised small pill', color: 'primary', raised: true, disabled: true, pill: true },
  { label: 'raised large', color: 'primary', raised: true, size: 'lg' },
  { label: 'raised large pill', color: 'primary', raised: true, size: 'lg', pill: true },
  { label: 'raised small', color: 'secondary', raised: true, disabled: true },
  { label: 'raised small pill', color: 'secondary', raised: true, pill: true },
  { label: 'raised large', color: 'secondary', raised: true, size: 'lg', disabled: true },
  { label: 'raised large pill', color: 'secondary', raised: true, size: 'lg', pill: true },
  { label: 'raised small', color: 'warn', raised: true, disabled: true },
  { label: 'raised small pill', color: 'warn', raised: true, pill: true },
  { label: 'raised large', color: 'warn', raised: true, size: 'lg', disabled: true },
  { label: 'raised large pill', color: 'warn', raised: true, size: 'lg', disabled: true, pill: true },
  { label: 'raised small', color: 'link', raised: true },
  { label: 'raised small pill', color: 'link', raised: true, disabled: true, pill: true },
  { label: 'raised large', color: 'link', raised: true, size: 'lg' },
  { label: 'raised large pill', color: 'link', raised: true, size: 'lg', pill: true },
];
export const sizes = () =>
  buttonSizeTypes.map((buttonType, index) => (
    <React.Fragment key={index}>
      <Button
        key={index}
        color={buttonType?.color}
        disabled={buttonType?.disabled}
        label={buttonType.label}
        onClick={action('clicked')}
        raised={buttonType?.raised}
        stroked={buttonType?.stroked}
        flat={buttonType?.flat}
        size={buttonType?.size}
        pill={buttonType?.pill}
      />
      {index !== buttonSizeTypes.length - 1 ? <br /> : ''}
    </React.Fragment>
  ));

// export const secondary = () => (
//   <>
//     <Button secondary label="label" onClick={action('clicked')} />
//     <br />
//     <Button secondary icon="search" label="label" onClick={action('clicked')} />
//     <br />
//     <Button secondary icon="search" label="label" onClick={action('clicked')} disabled />
//   </>
// );

// export const outlineDefault = () => (
//   <>
//     <Button outline label="label" onClick={action('clicked')} />
//     <br />
//     <Button outline icon="search" label="label" onClick={action('clicked')} />
//     <br />
//     <Button outline icon="search" label="label" onClick={action('clicked')} disabled />
//   </>
// );

// export const userButton = () => (
//   <>
//     <Button raised label="Sign in" onClick={action('clicked')} />
//     <br />
//     <Button raised label="Sign in" onClick={action('clicked')} disabled />
//     <br />
//     <Button userAvatar label="Mr. Anonymous" onClick={action('clicked')} />
//     <br />
//     <Button userAvatar label="Mr. Anonymous" onClick={action('clicked')} disabled />
//   </>
// );

// export const defaultButton = () => (
//   <div style={{ backgroundColor: '#000', padding: '.5rem 1.5rem' }}>
//     <Button label="label" onClick={action('clicked')} />
//   </div>
// );

// export const ButtonWithLabelWeights = () => (
//   <>
//     <Button label="label" labelWeight="black" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="extrabold" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="bold" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="semibold" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="medium" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="normal" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="light" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="thin" onClick={action('clicked')} />
//     <br />
//     <Button label="label" labelWeight="hairline" onClick={action('clicked')} />
//   </>
// );
