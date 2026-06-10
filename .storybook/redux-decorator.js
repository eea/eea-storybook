/**
 * Redux Provider decorator for Storybook stories
 *
 * This utility provides a Redux store context for components that require
 * Redux hooks (useSelector, useDispatch, etc.) or are wrapped with
 * injectLazyLibs from @plone/volto.
 *
 * Usage in story files:
 *
 * import { withReduxProvider } from '../../../.storybook/redux-decorator';
 *
 * export default {
 *   title: 'Components/MyComponent',
 *   component: MyComponent,
 *   decorators: [withReduxProvider],
 * };
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Plotly from 'plotly.js/dist/plotly.min';
import createPlotlyComponent from 'react-plotly.js/factory';

/**
 * Creates a Redux store with thunk middleware
 * You can extend this state as needed for your stories
 */
export const createMockStore = (customState = {}) => {
  const defaultState = {
    intl: {
      locale: 'en',
      messages: {},
    },
    lazyLibraries: {
      // Pre-load Plotly libraries for stories that use injectLazyLibs
      plotlyMinLib: { default: Plotly },
      plotlyComponentFactory: { default: createPlotlyComponent },
    },
    ...customState,
  };

  const rootReducer = combineReducers({
    intl: (state = defaultState.intl) => state,
    lazyLibraries: (state = defaultState.lazyLibraries, action) => {
      if (action.type === 'LOAD_LAZY_LIBRARY') {
        return {
          ...state,
          [action.libraryName]: action.library,
        };
      }
      return state;
    },
    // Catch-all reducer for any other state
    _default: (state = {}) => state,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
};

/**
 * Default Redux store instance
 */
export const defaultStore = createMockStore();

/**
 * Redux Provider decorator for Storybook
 * Wraps stories with a Redux Provider using the default mock store
 */
export const withReduxProvider = (Story) => (
  <Provider store={defaultStore}>
    <Story />
  </Provider>
);

/**
 * Creates a custom Redux Provider decorator with a specific store state
 *
 * @param {Object} customState - Custom state to merge with default state
 * @returns {Function} Decorator function
 *
 * Example:
 * const withCustomRedux = createReduxDecorator({
 *   user: { name: 'John Doe' },
 * });
 *
 * export default {
 *   decorators: [withCustomRedux],
 * };
 */
export const createReduxDecorator = (customState = {}) => {
  const store = createMockStore(customState);

  return (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
