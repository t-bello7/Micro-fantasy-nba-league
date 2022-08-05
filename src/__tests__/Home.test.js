import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { renderWithProviders } from '../utils/test-utils';
import { act } from 'react-dom/test-utils'
import Home from '../pages/Home';

const handlers = [
  rest.get('https://***REMOVED***/teams', (req, res, ctx) => res(
    ctx.set({
      'Accept-Language': 'en-US',
      'Content-Type': ['application/json', 'application/hal+json'],
      'X-RapidAPI-Host': process.env.REACT_APP_XRapidAPIHost,
      'X-RapidAPI-Key': process.env.REACT_APP_XRapidAPIKey
    })
  ))
];
const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('Home', () => {
  test('renders Home Component', () => {
    act(() => renderWithProviders(<Home />));
  });
});
