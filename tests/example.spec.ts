// example.spec.ts
import { test, expect } from '@playwright/test';
import { homePage } from '../library/PlaywrightLibraryTest/pageObjects/homePage';

test('Open Installation page', async ({ page }) => {
  const homepage = new homePage(page);
  await homepage.goto();
  await homepage.getStarted();
  await expect(homepage.installPlaywright).toHaveText("Installing Playwright");
});
