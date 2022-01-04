import { addons } from '@storybook/addons';
import eeatheme from './eea-theme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: eeatheme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: true,
});
