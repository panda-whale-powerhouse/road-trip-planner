import React from 'react';
import { render, screen } from '@testing-library/react';
import Settings from '../client/components/settings';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('testing React components', () => {
  describe('render waypoints', () => {
    it('render waypoints correctly', () => {
      const initialState = {
        genSettings: {
          destination: '',
          origin: '',
          step: 0,
          waypoints: [],
          waypointStr: '',
        },
      };
      const store = mockStore(initialState);
      render(
        <Provider store={store}>
          <Settings />
        </Provider>
      );
      const element = screen.getByTestId('origin');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('Trip Name');
    });
  });
});
