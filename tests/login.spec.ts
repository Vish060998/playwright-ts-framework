import { test, expect } from '@playwright/test'; // Import Playwright test runner
import { LoginPage } from '../pages/LoginPage'; // Import your LoginPage class

test('Login to SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page); // Create LoginPage object with injected page
  await page.goto('https://www.saucedemo.com/'); // BaseURL is set in playwright.config.ts
  await loginPage.login('standard_user', 'secret_sauce'); // Call login method
  // Assertion: Verify we landed on Products page
  const title = await page.locator('.title').textContent(); // CSS by class
  expect(title).toContain('Products'); // Check if page shows "Products"
});