import { test, expect } from '@playwright/test';

test('visual regression', async ({ page }) => {
    await page.goto('/post/improve-a11y');

    // ページ内の全ての画像を読み込み
    const images = await page.$$('img');
    for (const img of images) {
        await img.scrollIntoViewIfNeeded();
    }
    for (const img of images) {
        await img.evaluate(
            (img) => img.complete || new Promise((f) => (img.onload = f))
        );
    }

    await expect(page).toHaveScreenshot({
        fullPage: true,
        animations: 'disabled',
    });
});
