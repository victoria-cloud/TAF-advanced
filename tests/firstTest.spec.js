import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/ui/');
  await page.getByPlaceholder("Login").fill(USER_CREDENTIALS.login);
  await page.getByPlaceholder("Password").fill(USER_CREDENTIALS.password);
  await page.getByText('Login', { exact: true }).click();
  //await expect(page).toHaveURL('ui/#testproject_vk/dashboard');
});

const USER_CREDENTIALS = {
  login:'default',
  password:'1q2w3e'
}

test.describe('New Todo', () => {
  test('should allow me to add todo items', async ({ page }) => {
    await expect(page.getByTitle('All Dashboards')).toHaveText('All Dashboards')
   });
 });

