import { test, expect } from '@playwright/test';

test('should upload an image and display it', async ({ page }) => {
  await page.goto('/profile');

  // Click the upload button
  await page.locator('#upload-button').click();

  // Upload a file
  await page.locator('#file-input').setInputFiles('tests/fixtures/test-image.jpg');

  // Check if the image is displayed
  const image = page.locator('#uploaded-image');
  await expect(image).toBeVisible();
  const imageUrl = await image.getAttribute('src');
  expect(imageUrl).not.toBeNull();
});
