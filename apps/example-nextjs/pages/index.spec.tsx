import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const button = screen.getByRole('button', {
      name: 'Change Plan',
    });

    expect(button).toBeInTheDocument();
  });
});