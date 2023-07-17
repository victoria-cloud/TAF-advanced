import { test, expect } from '@playwright/test';
import defineConfig from '../playwright.config.js'
import 'dotenv/config'
let randomstring = require("randomstring");

test.beforeEach(async ({ page }) => {
  console.log(defineConfig.use)
  await page.goto(defineConfig.use.baseURL)
  await page.getByPlaceholder("Login").fill(process.env.LOGIN)
  await page.getByPlaceholder("Password").fill(process.env.PASSWORD)
  await page.getByText('Login', { exact: true }).click()
});

test.describe('UI tests:', () => {
  let db_name = `autoTest_${randomstring.generate(7)}`

  test('should check Dashbords page is open: ', async ({ page }) => {
    await expect(page.getByTitle('All Dashboards')).toHaveText('All Dashboards')
  })

  test('should create new dashboard with success message: ', async ({ page }) => {
    await page.getByRole('button', { name: 'Add New Dashboard' }).nth(0).click()
    await page.getByPlaceholder('Enter dashboard name').fill(db_name)
    await page.getByPlaceholder('Enter dashboard description').fill('dashboardCreatedByUI_test')
    await page.getByRole('button', { name: 'Add', exact: true }).click()
    await expect(page.getByText('Dashboard has been added')).toBeVisible()
  })

  test('should find dashboard by name:', async ({ page }) => {
    await page.getByRole('button', { name: 'Add New Dashboard' }).nth(0).click()
    await page.getByPlaceholder('Enter dashboard name').fill(db_name)
    await page.getByPlaceholder('Enter dashboard description').fill('dashboardCreatedByUI_test')
    await page.getByRole('button', { name: 'Add', exact: true }).click()
    await page.getByRole('link', { name: 'All Dashboards' }).click()
    await page.getByPlaceholder('Search by name').fill(db_name)
    await expect(page.getByRole('link', { name: `${db_name}` })).toHaveAttribute('aria-current', 'false')
  })

  test('should open editor with prefilled dashboard name:', async ({ page }) => {
    await page.getByRole('button', { name: 'Add New Dashboard' }).nth(0).click()
    await page.getByPlaceholder('Enter dashboard name').fill(db_name)
    await page.getByPlaceholder('Enter dashboard description').fill('dashboardCreatedByUI_test')
    await page.getByRole('button', { name: 'Add', exact: true }).click()
    await page.getByRole('link', { name: 'All Dashboards' }).click()
    await page.locator(`xpath=//a[text()='${db_name}']/parent::div//*[contains(@class,'icon__icon-pencil')]`).click()
    await expect(page.getByPlaceholder('Enter dashboard name')).toHaveValue(db_name)
  })

  test('should open delete dashboard popup:', async ({ page }) => {
    await page.getByRole('button', { name: 'Add New Dashboard' }).nth(0).click()
    await page.getByPlaceholder('Enter dashboard name').fill(db_name)
    await page.getByPlaceholder('Enter dashboard description').fill('dashboardCreatedByUI_test')
    await page.getByRole('button', { name: 'Add', exact: true }).click()
    await page.getByRole('link', { name: 'All Dashboards' }).click()
    await page.locator(`xpath=//a[text()='${db_name}']/parent::div//*[contains(@class,'icon__icon-delete')]`).click()
    await expect(page.getByText('Delete Dashboard', { exact: true })).toBeVisible()
  })

})
