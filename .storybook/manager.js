import addons from '@storybook/addons';
import { themes } from '@storybook/theming';
import projectTheme from './project-theme';

addons.setConfig({
  showRoots: true,
  theme: projectTheme,
  selectedPanel: 'component-button--basic', // or undefined
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  initialActive: 'sidebar',
});
