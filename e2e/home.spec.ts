import { test, expect } from '@playwright/test';

test('homepage has correct title and loads', async ({ page }) => {
    await page.goto('/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Federico Rojas/);
});

test('contact form is visible', async ({ page }) => {
    await page.goto('/');

    // Find contact section
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Find valid input fields
    await expect(page.getByPlaceholder('Your name')).toBeVisible();
    await expect(page.getByPlaceholder('youremail@email.com')).toBeVisible();
});
