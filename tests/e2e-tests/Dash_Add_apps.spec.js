import { test, expect } from '@playwright/test';

test('Add App without Destination', async ({ page }) => {
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
    await page.getByRole('link', { name: 'Add App' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('What would you like to do?')).toBeVisible();
    await page.getByText('Send review alertsCapture').click();
    await page.getByRole('button', { name: 'Configure Later' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Choose from your existing apps or search for additional apps')).toBeVisible();
    await page.locator('div').filter({ hasText: /^Clash of ClansGoogle Play$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Review configuration')).toBeVisible();
    await page.getByRole('button', { name: 'Finish Setup' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Setup Complete!')).toBeVisible();
  });

  test('Add App with Existing Slack Destination', async ({ page }) => {
    await page.goto('https://dash.appreviewbot.com/auth/login?redirect_to=%2F');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('surya.k+p4@w3dev.email');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Login with Password instead' }).click();
    await page.getByRole('button', { name: 'Continue with Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('suryasurya');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Welcome to AppReviewBot')).toBeVisible();
    await page.getByRole('link', { name: 'Add App' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('What would you like to do?')).toBeVisible();
    await page.getByText('Send review alertsCapture').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Choose from your existing apps or search for additional apps')).toBeVisible();
    await page.locator('div').filter({ hasText: /^Sololearn: Learn to codeGoogle Play$/ }).nth(1).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Choose a destination')).toBeVisible();
    await page.getByText('SlackSend alerts to a Slack').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Connect Slack')).toBeVisible();
    await page.getByText('#socialJan 2026Channel: #').click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.waitForTimeout(3000);
    await expect(page.getByText('Review filters & translations')).toBeVisible();
    await page.getByRole('checkbox', { name: '1 star' }).click();
    await page.getByRole('checkbox', { name: '2 stars' }).click();
    await page.getByRole('checkbox', { name: '3 stars' }).click();
    await page.getByRole('checkbox', { name: '4 stars' }).click();
    await page.getByRole('checkbox', { name: '5 stars' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    //sawait page.waitForTimeout(3000);
    await expect(page.getByText('Review configuration')).toBeVisible();
    await page.getByRole('button', { name: 'Finish Setup' }).click();
    //await page.waitForTimeout(2000);
    await expect(page.getByText('Setup Complete!')).toBeVisible();
  });