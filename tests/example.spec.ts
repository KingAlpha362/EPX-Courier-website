import { test, expect } from '@playwright/test';

test('has correct title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Check that the title contains E.P.X.
  await expect(page).toHaveTitle(/E\.P\.X\./i);
});

test('tracking links point to the correct portal', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Find the "Track My Parcel" link in the Hero section
  const trackMyParcelLink = page.getByRole('link', { name: 'Track My Parcel' }).first();
  await expect(trackMyParcelLink).toBeVisible();
  await expect(trackMyParcelLink).toHaveAttribute('href', 'https://epx.pperfect.com/');

  // Find the "Track Your Parcel" link in the footer
  const trackYourParcelLink = page.getByRole('link', { name: 'Track Your Parcel' }).first();
  await expect(trackYourParcelLink).toBeVisible();
  await expect(trackYourParcelLink).toHaveAttribute('href', 'https://epx.pperfect.com/');
});
