import { test, expect } from '@playwright/test';
import defineConfig from '../playwright.config.js'
import 'dotenv/config'


test.beforeEach(async ({ page }) => {
  console.log(defineConfig.use)
  await page.goto(defineConfig.use.baseURL);
  await page.getByPlaceholder("Login").fill(process.env.LOGIN);
  await page.getByPlaceholder("Password").fill(process.env.PASSWORD);
  await page.getByText('Login', { exact: true }).click();
});

test.describe('First test', () => {
  test('should check Dashbords page is open ', async ({ page }) => {
    await expect(page.getByTitle('All Dashboards')).toHaveText('All Dashboards')
   });
 });

