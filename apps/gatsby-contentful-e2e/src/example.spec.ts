import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // expect(await page.locator('h3').innerText()).toContain('The Cranberries Linger');
});
