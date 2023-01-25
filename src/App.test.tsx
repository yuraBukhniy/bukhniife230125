import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('There are only 3 User widgets by default', () => {
  render(<App />);
  const viewButtons = screen.getAllByRole('button', { name: 'View'} );
  expect(viewButtons).toHaveLength(3);
});

test('All 10 widgets are displayed after click on View all button', () => {
  render(<App />);
  const viewAllButton = screen.getByRole('button', { name: 'View all'} );
  userEvent.click(viewAllButton);
  const viewButtons = screen.getAllByRole('button', { name: 'View'} );
  expect(viewButtons).toHaveLength(10);
});

test('Widget with full user information is displayed after clicking on “View” button on the user widget', () => {
  render(<App />);
  const viewButton = screen.getAllByRole('button', { name: 'View'} )[0];
  userEvent.click(viewButton);
  const phoneField = screen.getByText(/Phone/)
  const urlField = screen.getByText(/URL/)
  const emailField = screen.getByText(/Email/)
  expect(phoneField).toBeInTheDocument();
  expect(urlField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
});

test('Widget with full user information is closed if click on Close button', () => {
  render(<App />);
  const viewButton = screen.getAllByRole('button', { name: 'View'} )[0];
  userEvent.click(viewButton);

  const closeButton = screen.getByTestId('close-button');
  userEvent.click(closeButton);

  expect(screen.queryByTestId(/Phone/)).toBeNull();
  expect(screen.queryByTestId(/URL/)).toBeNull();
  expect(screen.queryByTestId(/Email/)).toBeNull();
});
