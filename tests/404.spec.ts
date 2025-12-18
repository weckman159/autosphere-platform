import { test, expect } from '@playwright/test';

test('should return 404 for non-existent pages', async ({ page }) => {
  const response = await page.goto('/non-existent-page');
  expect(response?.status()).toBe(404);
});
