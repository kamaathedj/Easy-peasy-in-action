import React from 'react';
import {
  render, screen, test, expect,
} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { level: 1 });
  expect(linkElement).toHaveTextContent('React router demo');
});
