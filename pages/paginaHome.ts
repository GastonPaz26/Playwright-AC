import { Locator, Page } from '@playwright/test';

export class PaginaHome {
  readonly page: Page;
  readonly botonCrearCuenta: Locator;
  readonly urlHome = process.env.BASE_URL;

  constructor(page: Page) {
    this.page = page;
    this.botonCrearCuenta = page.getByRole('link', { name: 'Crear cuenta', exact: true });
  }

  async navegarARegistro() {
     this.botonCrearCuenta.click();
  }

  async navegarAHome() {
    await this.page.goto('/');
  }
}
