import { test, expect } from '@playwright/test';

test('Login Success', async ({ page }) => {
    const userDetails = {
        email:"surya.k+p4@w3dev.email",
        password:"suryasurya",
      }
    
    await page.goto('https://dash.appreviewbot.com/auth/login?redirect_to=%2F');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(userDetails.email);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Login with Password instead' }).click();
    await page.getByRole('button', { name: 'Continue with Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(userDetails.password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Welcome to AppReviewBot')).toBeVisible();
  });

