import { test, expect } from '@playwright/test';

test('Edit the Star Rating Rules of the App', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya"
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
  await page.waitForTimeout(2000);
  await page.locator('#radix-_r_7_').click();
  await page.getByRole('menuitem', { name: 'Edit Rules' }).click();
  await page.getByText('5 stars').click();
  await page.getByText('4 stars').click();
  await expect(page.getByText('Configure which reviews to track based on countries and ratings')).toBeVisible();
  await page.waitForTimeout(2000);
  await expect(page.getByRole('checkbox', { name: '5 stars' })).not.toBeChecked();
  await expect(page.getByRole('checkbox', { name: '4 stars' })).not.toBeChecked();
  await page.getByRole('button', { name: 'Save Changes' }).click();
});
  
    test('Unsubscribing the App', async ({ page }) => {
      const userDetails = {
        email:"surya.k+p4@w3dev.email",
        password:"suryasurya"
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
      await page.waitForTimeout(2000);
      await page.locator('#radix-_r_7_').click();
      await page.getByRole('menuitem', { name: 'Unsubscribe' }).click();
      await page.getByRole('button', { name: 'Yes, Cancel Subscription' }).click();
      await page.waitForTimeout(2000);
      await expect(page.getByText('Clash of Clans')).not.toBeVisible();
});

test('Viewing the Reviews Details Page', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya"
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
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Reviews' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Select an app to view its reviews')).toBeVisible();
  await page.getByRole('link', { name: 'Sololearn: Learn to code' }).click();
});

test('Viewing the Review Summary', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya"
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
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Reviews' }).click();
  await page.getByRole('link', { name: 'Sololearn: Learn to code' }).click();
  await page.getByRole('link', { name: 'View Summary' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Review Summary')).toBeVisible();
});

test('Updating the Password', async ({ page }) => { 
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya",
    newPassword:"suryasuryasurya"
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
  await page.getByRole('link', { name: 'Account', exact: true }).click();
  await page.getByRole('textbox', { name: 'Current Password' }).click();
  await page.getByRole('textbox', { name: 'Current Password' }).fill(userDetails.password);
  await page.getByRole('textbox', { name: 'New Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'New Password', exact: true }).fill(userDetails.newPassword); 
  await page.getByRole('textbox', { name: 'Confirm New Password' }).click();
  await page.getByRole('textbox', { name: 'Confirm New Password' }).fill(userDetails.newPassword);
  await page.getByRole('button', { name: 'Update Password' }).click();
  await page.waitForTimeout(2000);
  await page.locator('.ml-auto').click();
  await page.getByRole('menuitem', { name: 'Log out' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(userDetails.email);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Login with Password instead' }).click();
  await page.getByRole('button', { name: 'Continue with Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(userDetails.newPassword);
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Track and manage all your app reviews in one place')).toBeVisible();

});

test('Updating the Display Name', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya",
    displayName:"Surya Mandal"
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
  await page.getByRole('link', { name: 'Account', exact: true }).click();
  await page.getByRole('textbox', { name: 'Display Name' }).click();
  await page.getByRole('textbox', { name: 'Display Name' }).fill('');
  await page.getByRole('textbox', { name: 'Display Name' }).fill(userDetails.displayName);
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Profile updated successfully')).toBeVisible();
});

test('Navigation through the Dashboard', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya"
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
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Reviews' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Select an app to view its reviews')).toBeVisible();
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Team' }).click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Manage your team members and invitations')).toBeVisible();
});

test('Updating the Organization Details', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya",
    organizationName:"W3Dev",
    billingEmail:"surya.k+p4@w3dev.email",
    phoneNumber:"9999999999",
    addressLine1:"test address",
    addressLine2:"address demo",
    city:"city",
    state:"state",
    postalCode:"777777"
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
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Attn: (Name of Organization)', exact: true }).click();
  await page.getByRole('textbox', { name: 'Attn: (Name of Organization)', exact: true }).fill(userDetails.organizationName);
  await page.getByRole('textbox', { name: 'Billing Email' }).click();
  await page.getByRole('textbox', { name: 'Billing Email' }).fill(userDetails.billingEmail);
  await page.getByRole('textbox', { name: 'Phone Number' }).click();
  await page.getByRole('textbox', { name: 'Phone Number' }).fill(userDetails.phoneNumber);
  await page.getByRole('textbox', { name: 'Address Line 1' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1' }).fill(userDetails.addressLine1);
  await page.getByRole('textbox', { name: 'Address Line 2' }).click();
  await page.getByRole('textbox', { name: 'Address Line 2' }).fill(userDetails.addressLine2);
  await page.getByRole('textbox', { name: 'City' }).click();
  await page.getByRole('textbox', { name: 'City' }).fill(userDetails.city);
  await page.getByRole('textbox', { name: 'State' }).click();
  await page.getByRole('textbox', { name: 'State' }).fill(userDetails.state);
  await page.getByRole('textbox', { name: 'Postal Code/ZIP' }).click();
  await page.getByRole('textbox', { name: 'Postal Code/ZIP' }).fill(userDetails.postalCode);
  await page.waitForTimeout(2000);
});

test('Generating the API Key', async ({ page }) => {
  const userDetails = {
    email:"surya.k+p4@w3dev.email",
    password:"suryasurya"
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
  await page.waitForTimeout(2000);
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.waitForTimeout(2000);
  //await page.getByRole('textbox', { name: 'No API key generated' }).click();
  await expect(page.getByText('Generate Key')).toBeVisible();
  await page.waitForTimeout(2000);
});