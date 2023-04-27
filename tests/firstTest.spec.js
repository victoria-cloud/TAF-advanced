import { test, expect } from '@playwright/test';
import { primary_url ,USER_CREDENTIALS } from '../constants/constant.js';
import defineConfig from '../playwright.config.js'


test.beforeEach(async ({ page }) => {
  console.log(defineConfig.use)
  await page.goto(defineConfig.use.baseURL);
  await page.getByPlaceholder("Login").fill(USER_CREDENTIALS.login);
  await page.getByPlaceholder("Password").fill(USER_CREDENTIALS.password);
  await page.getByText('Login', { exact: true }).click();
  //await expect(page).toHaveURL('ui/#testproject_vk/dashboard');
});

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    await expect(page.getByTitle('All Dashboards')).toHaveText('All Dashboards')
   });
 });

