import { test, expect } from '@playwright/test';

test('visual regression', async ({ page }) => {
    await page.goto('/post/improve-a11y');
    await expect(page).toHaveScreenshot({
        fullPage: true,
        animations: 'disabled',
    });
});
