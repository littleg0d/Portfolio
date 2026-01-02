import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Portfolio/);
});

test('navigation links work', async ({ page }) => {
    await page.goto('/');

    // Check if Contact link is visible
    const contactLink = page.getByRole('link', { name: 'Contact' });
    await expect(contactLink).toBeVisible();
});
