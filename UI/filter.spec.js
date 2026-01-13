import { test } from '@playwright/test';
import { filtersPage } from '../Pages/filter.js';
import { Login } from '../Pages/Login.js';

test('User applies product filters', async ({ page }) => {
  const login = new Login(page);
  const filter = new filtersPage(page);

  await login.goto();

  await filter.clickCategory();
  await filter.openSubCategory();
  await filter.openPriceFilter();
  await filter.applyPriceFilter();
  await filter.applyChanges();
});
