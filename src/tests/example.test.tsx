import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('Example Test', () => {
    it('should render a heading', () => {
        render(<h1>Hello World</h1>);
        expect(screen.getByRole('heading', { level: 1, name: /hello world/i })).toBeInTheDocument();
    });
});
