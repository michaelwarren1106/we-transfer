import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Alert from '../src/components/Alert';

describe('Alert', () => {
  it('type has type class', () => {
    const { container } = render(<Alert type="success">success</Alert>);
    console.log(container.outerHTML)
    expect((container?.firstChild as HTMLElement).classList.contains('type-success')).toBe(true);
  });
});