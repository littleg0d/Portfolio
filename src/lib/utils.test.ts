import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn utility', () => {
    it('merges class names correctly', () => {
        expect(cn('w-full', 'bg-red-500')).toBe('w-full bg-red-500');
    });

    it('resolves tailwind conflicts', () => {
        // twMerge should ensure p-4 overrides p-2 if they conflict conceptually or just take last
        expect(cn('p-2', 'p-4')).toBe('p-4');
    });

    it('handles conditional classes', () => {
        expect(cn('relative', true ? 'absolute' : 'fixed')).toBe('absolute'); // relative and absolute conflict, absolute wins
        expect(cn('text-red-500', true && 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
    });
});
