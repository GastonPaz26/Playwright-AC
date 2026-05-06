import { Locator, Page } from '@playwright/test';

export class PaginaRegistro {
  readonly page: Page;
  readonly inputNombre: Locator;
  readonly inputApellido: Locator;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly inputConfirmPassword: Locator;
  readonly botonRegistrarse: Locator;
  readonly linkYaTengoCuenta: Locator;
  readonly checkboxTerminos: Locator;
  readonly linkTerminos: Locator;
  readonly linkPoliticaPrivacidad: Locator;
  readonly buttonShowPassword: Locator;
  readonly buttonShowConfirmPassword: Locator;
  readonly buttonIrAIniciarSesion: Locator;
}
