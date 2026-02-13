const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');

test.describe('Login Tests', () => {

  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Invalid login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('wrong_user', 'wrong_password');

    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('locked');
  });

});
