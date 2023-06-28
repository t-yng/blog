import { test, expect } from '@playwright/test';

test('visual regression', async ({ page }) => {
  await page.goto('/post/フロントエンド');
  await expect(page).toHaveScreenshot({
    fullPage: true,
    animations: 'disabled',
  });
});
