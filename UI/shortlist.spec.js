import { test } from '@playwright/test';
import { addFavorites } from '../Pages/shortlist.js';
import { Login } from '../Pages/Login.js';
import { loadCredentials } from '../support/credentials.helper.js';

const user = loadCredentials()[0];

test('User add product to shortlist (using saved session)', async ({ page }) => {
  const login = new Login(page);
  const shortlist = new addFavorites(page);

  await login.goto();

  await shortlist.searchProduct();
  await shortlist.clickProduct();
  await shortlist.addFavorites();

  await login.login(user.email.trim(), user.password);
  await login.clickSignIn();
});
