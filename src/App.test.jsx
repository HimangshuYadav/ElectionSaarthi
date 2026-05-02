import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Accessibility and Rendering', () => {
  it('renders the main navigation landmark', () => {
    render(<App />);
    const navElement = screen.getByRole('navigation', { name: /main navigation/i });
    expect(navElement).toBeInTheDocument();
  });

  it('renders the main content area', () => {
    render(<App />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
