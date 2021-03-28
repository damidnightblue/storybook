// https://storybook.js.org/docs/react/configure/theming

import { create } from '@storybook/theming/create';

export default create({
  base: 'dark', // or 'dark'

  colorPrimary: '#333',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: '#2a2a2a',
  appContentBg: '#2a2a2a',
  appBorderColor: 'black',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'white',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'deepskyblue',
  barBg: '#333',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Storybook study',
  // brandImage: 'https://placehold.it/350x150',
});
