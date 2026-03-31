import { test, expect } from '@playwright/test';

const userDetails = {
    email: 'surya.k+222@w3dev.email',
    password: 'suryasurya',
  };

// Helper function for logging in
async function login(page, { email, password }) {
    await page.goto('https://dev-arb-dash.vercel.app/');
    await page.getByRole('textbox', { name: 'pat@saturn.dev' }).click();
    await page.getByRole('textbox', { name: 'pat@saturn.dev' }).fill(email);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
    await page.getByRole('button', { name: 'Login', exact: true }).click();
    await page.waitForLoadState('domcontentloaded');
  }
  
  test.describe('AppReviewBot Portal', () => {
    test('Edit the Star Rating Rules of the App', async ({ page }) => {
      await login(page, userDetails);
      // Wait for dashboard to be visible
      await expect(page.getByRole('button', { name: 'Manage' })).toBeVisible();
      await page.getByRole('button', { name: 'Manage' }).click();
      await page.getByText('Edit Rules').click();
      await page.getByRole('checkbox', { name: '3 stars' }).uncheck();
      await page.getByRole('checkbox', { name: '4 stars' }).uncheck();
      await page.getByRole('button', { name: 'Save Changes' }).click();
      // Wait for save to complete (assume reload is safe after save)
      await page.waitForLoadState('domcontentloaded');
      await page.reload();
      await expect(page.getByRole('button', { name: 'Manage' })).toBeVisible();
      await page.getByRole('button', { name: 'Manage' }).click();
      await page.getByText('Edit Rules').click();
      await expect(page.getByRole('checkbox', { name: '3 stars' })).not.toBeChecked();
      await expect(page.getByRole('checkbox', { name: '4 stars' })).not.toBeChecked();
      await page.getByRole('button', { name: 'Never Mind' }).click();
    });
  
    test('Deleting the Destination & Unsubscribing the App', async ({ page }) => {
      await login(page, userDetails);
      await page.getByRole('link', { name: 'Destinations' }).click();
      await expect(page.locator('div').filter({ hasText: /^#yonoslackActive$/ })).toBeVisible();
      await page.locator('div').filter({ hasText: /^#yonoslackActive$/ }).getByRole('img').click();
      await page.getByRole('button', { name: 'Ok' }).click();
      await page.locator('.z-50 > div > svg').click();
      await page.getByRole('link', { name: 'Dashboard' }).click();
      await page.waitForLoadState('domcontentloaded');
      await expect(page.getByRole('cell', { name: '⚠️ INVALID_DESTINATION You' })).toBeVisible();
      await page.getByRole('cell', { name: '⚠️ INVALID_DESTINATION You' }).getByRole('img').click();
      await page.getByRole('button', { name: 'Yes, Cancel' }).click();
    });
  });