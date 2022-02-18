// import '@plone/volto/config'; // This is the bootstrap for the global config - client side

import '~/config'; // This is the bootstrap for the global config - client side
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import enMessages from '~/../locales/en.json';

import '@eeacms/volto-eea-design-system/semantic.less';
import '@plone/volto/../theme/themes/pastanaga/extras/extras.less';
import {
  MINIMAL_VIEWPORTS
} from '@storybook/addon-viewport';

const customMobileViewports = {
  galaxys9: {
    name: 'Galaxy S9',
    styles: {
      height: '740px',
      width: '360px',
    },
    type: 'mobile',
  },
};

const customDesktopViewports = {
  tablet: {
    name: '1024x768',
    styles: {
      height: '768px',
      width: '1024px',
    },
    type: 'desktop',
  },
  laptop: {
    name: '1280x800',
    styles: {
      height: '800px',
      width: '1280px',
    },
    type: 'desktop',
  },
  widescreen: {
    name: '1366x768',
    styles: {
      height: '768px',
      width: '1366px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...customMobileViewports,
      ...MINIMAL_VIEWPORTS,
      ...customDesktopViewports,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: false,
  },
};

export const decorators = [
  (Story) => (
    <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
      <StaticRouter location="/">
        <div className="eea">
          <Story />
        </div>
      </StaticRouter>
    </IntlProvider>
  ),
];
