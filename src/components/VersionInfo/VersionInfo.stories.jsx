import React from 'react';
import VersionInfo from './VersionInfo';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { StaticRouter } from 'react-router-dom';
import enMessages from '@root/../locales/en.json';

const mockStore = configureStore();

const store = mockStore({
  controlpanels: {
    systeminformation: {
      backend: 'Plone 6.0.8',
      frontend: 'Volto 17.15.0',
      apiVersion: '6.0.0',
      python: '3.11.9',
      system: 'Ubuntu 22.04',
    },
  },
});

const withProvider = (Story) => (
  <Provider store={store}>
    <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
      <StaticRouter location="/">
        <Story />
      </StaticRouter>
    </IntlProvider>
  </Provider>
);

export default {
  title: 'EEA/VersionInfo',
  component: VersionInfo,
  decorators: [withProvider],
};

export const Default = () => <VersionInfo />;
