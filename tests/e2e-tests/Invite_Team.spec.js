import { test, expect } from '@playwright/test';

test('Inviting a Team Member', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya",
    teamMemberEmail:"surya.k+p6@w3dev.email"
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
  await page.waitForTimeout(2000);
  await expect(page.getByText('Track and manage all your app reviews in one place')).toBeVisible();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: 'Team' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Manage your team members and invitations')).toBeVisible();
  await page.getByRole('button', { name: 'Invite Member' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Send an invitation to join your organization')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email Address *' }).click();
  await page.getByRole('textbox', { name: 'Email Address *' }).fill(userDetails.teamMemberEmail);
  await page.getByRole('button', { name: 'Send Invitation' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Invitation sent to surya.k+p6@w3dev.email')).toBeVisible();
  await page.getByRole('tab', { name: 'Invites' }).click();
  await page.waitForTimeout(2000);
});