import { test, expect } from '@playwright/test';

test('HomePage Login Success', async ({ page }) => {
    const userDetails = {
        email:"surya.k+p4@w3dev.email",
        password:"suryasurya",
      }

  await page.goto('https://dev-arb-home.vercel.app/');
  await page.waitForTimeout(2000);
  await expect(page.getByText('Instant App-Store & Google Play Reviews in Slack or Teams—Fix Issues Before Users Churn')).toBeVisible();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Greetings on your return! Please enter your details.')).toBeVisible();
  await page.getByRole('textbox', { name: 'pat@saturn.dev' }).click();
  await page.getByRole('textbox', { name: 'pat@saturn.dev' }).fill(userDetails.email);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill(userDetails.password);
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Logged in as surya.k+p4@w3dev')).toBeVisible();
});

test('Login with Invalid Password', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    wrongpassword:"surya",
  }
  await page.goto('https://dev-arb-home.vercel.app/');
  await page.waitForTimeout(2000);
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'pat@saturn.dev' }).click();
  await page.getByRole('textbox', { name: 'pat@saturn.dev' }).fill(userDetails.email);
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill(userDetails.wrongpassword);
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  //await expect(page.getByText('Invalid login credentials')).toBeVisible();
  await page.waitForTimeout(2000);
});