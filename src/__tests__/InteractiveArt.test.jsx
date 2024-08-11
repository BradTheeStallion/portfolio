import React from 'react';
import { render, screen } from '@testing-library/react';
import InteractiveArt from '../Pages/InteractiveArt';

describe('InteractiveArt Component', () => {
  test('renders without crashing', () => {
    render(<InteractiveArt />);
  });

  test('displays the correct heading', () => {
    render(<InteractiveArt />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Interactive Art-Making Experience');
  });

  test('renders an iframe', () => {
    render(<InteractiveArt />);
    const iframe = screen.getByTitle('Interactive Art-Making Experience');
    expect(iframe).toBeInTheDocument();
  });

  test('iframe has correct attributes', () => {
    render(<InteractiveArt />);
    const iframe = screen.getByTitle('Interactive Art-Making Experience');
    expect(iframe).toHaveAttribute('src', 'https://editor.p5js.org/BradTheeStallion/full/TEVa1hGlV');
  });
});
