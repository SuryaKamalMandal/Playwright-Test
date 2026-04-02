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

test('Successful Login & Logout', async ({ page }) => {
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
    await page.locator('.ml-auto').click();
    await page.getByRole('menuitem', { name: 'Log out' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Sign in with Google')).toBeVisible();
  });

  test('Login with Invalid Password', async ({ page }) => {
    const userDetails = {
      email:"surya.k+p4@w3dev.email",
      wrongpassword:"surya",
    }
    await page.goto('https://dash.appreviewbot.com/auth/login?redirect_to=%2F');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(userDetails.email);
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Login with Password instead' }).click();
    await page.getByRole('button', { name: 'Continue with Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(userDetails.wrongpassword);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.getByText('Firebase: Error (auth/wrong-password).')).toBeVisible();
  });