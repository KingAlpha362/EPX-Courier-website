import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E\.P\.X\. Courier Services/);
});

test('page loads successfully', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Check that the main content is visible
  await expect(page.locator('main')).toBeVisible();
  
  // Check for header element
  await expect(page.locator('header')).toBeVisible();
});
