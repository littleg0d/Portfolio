import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('handles click events', async () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        await userEvent.click(screen.getByRole('button', { name: /click me/i }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('renders as a child when asChild is true', () => {
        render(
            <Button asChild>
                <a href="/test">Link Button</a>
            </Button>
        );

        const link = screen.getByRole('link', { name: /link button/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/test');
    });

    it('renders with custom variant', () => {
        render(<Button variant="destructive">Destructive</Button>);
        const button = screen.getByRole('button', { name: /destructive/i });
        // Note: checking specific class names might be brittle if tailwind config changes, 
        // but useful for ensuring variants apply *some* classes.
        expect(button.className).toContain('bg-destructive');
    });
});
