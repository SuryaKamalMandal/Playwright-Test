import { test, expect } from '@playwright/test';

test('Homepage Integration Links', async ({ page }) => {
    await page.goto('https://www.appreviewbot.com/');
    await page.waitForTimeout(2000);
    await expect(page.getByText('Instant App-Store & Google Play Reviews in Slack or Teams—Fix Issues Before Users Churn')).toBeVisible();
    await page.getByRole('link', { name: 'Integration for Slack' }).click();
    await page.waitForTimeout(2000);
    //await expect(page.getByText('App Reviews in Slack Channel')).toBeVisible();
    await page.getByRole('link', { name: 'Integration for MS Teams' }).click();
    await page.waitForTimeout(2000);
    //await expect(page.getByText('App Reviews in Microsoft Teams')).toBeVisible();
    await page.getByRole('link', { name: 'Integration for Mattermost' }).click();
    await page.waitForTimeout(2000);
    //await expect(page.getByText('App Reviews in Mattermost')).toBeVisible();
    await page.getByRole('link', { name: 'Integration for Discord' }).click();
    await page.waitForTimeout(2000);
    //await expect(page.getByText('App Reviews in Discord')).toBeVisible();
    await page.getByRole('link', { name: 'Integration for Webex' }).click();
    await page.waitForTimeout(2000);
    //await expect(page.getByText('Webex + AppReviewBot')).toBeVisible();
    await page.getByRole('link', { name: 'Integration for Zapier' }).click();
    await page.waitForTimeout(2000);
    //await expect(page.getByText('App Reviews inZapier')).toBeVisible();
  });