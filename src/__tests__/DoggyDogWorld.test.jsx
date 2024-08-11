import React from 'react';
import { render, screen } from '@testing-library/react';
import DoggyDogWorld from '../Pages/DoggyDogWorld';

describe('InteractiveArt Component', () => {
  test('renders without crashing', () => {
    render(<DoggyDogWorld />);
  });

  test('displays the correct heading', () => {
    render(<DoggyDogWorld />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Doggy Dog World');
  });

  test('renders an iframe', () => {
    render(<DoggyDogWorld />);
    const iframe = screen.getByTitle('Doggy Dog World');
    expect(iframe).toBeInTheDocument();
  });

  test('iframe has correct attributes', () => {
    render(<DoggyDogWorld />);
    const iframe = screen.getByTitle('Doggy Dog World');
    expect(iframe).toHaveAttribute('src', 'https://bradtheestallion.github.io/qap3/');
  });
});