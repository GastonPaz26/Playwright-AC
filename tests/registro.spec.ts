import { test } from '@playwright/test';

import dotenv from 'dotenv';
import { PaginaHome } from '../pages/paginaHome';

let paginaHome: PaginaHome;

dotenv.config();

test.beforeEach(({ page }) => {
  paginaHome = new PaginaHome(page);
});

test('TC-3 Registro de estudienate (Sign up)', async ({ page }) => {
  await paginaHome.navegarAHome();
  await paginaHome.navegarARegistro();
  await page.waitForTimeout(2000);
});
