import { expect } from '@playwright/test';

export class Login {
  constructor(page) {
    this.page = page;

    this.cookiesButton = page.getByRole('button', { name: 'Continue without accepting' }); 

    this.signInButton = page
      .locator('button.c-button-template.u-cursor-pointer.c-button__container.c-button--primary.u-bgcolor-brand.u-typography-h7')
      .locator('span')
      .nth(0);

    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByLabel('Password');

    this.signIn = page
      .locator('button.c-button-template.u-cursor-pointer.c-button__container.c-button--primary.u-bgcolor-brand.u-typography-h7.u-w-full.js-register-signin-submit-button')
      .locator('span')
      .nth(0);

    this.profile = page.locator('xpath = //*[@id="cw-header-container"]/div/div/header/div/div/nav/div/div[3]/div/div[2]/button');

    this.logoutButton = page.getByRole('button', { name: 'Sign out' });

    // this.humanVerificationButton = page.locator('#px-captcha-modal').contentFrame().locator('iframe[src="about:blank"]').contentFrame().getByRole('button' , { name: 'Press & Hold' }).click();
    // this.humanVerificationModal = page.locator('[role="dialog"]');
  }
 async handleCookiesIfPresent() {
        try {
            await this.cookiesButton.waitFor({
                state: 'visible',
                timeout: 2500
            });
            await this.cookiesButton.click();
            await this.cookiesButton.waitFor({ state: 'hidden' });
        } catch {
            
        }
    } 
  async goto() {
    await this.page.goto('https://www.catawiki.com/en');
    await this.handleCookiesIfPresent();
  }

 


  async clickProfile() {
    await this.profile.click();
    await this.page.waitForLoadState('networkidle');
    console.log('Profile menu clicked');
  }

  async typeSlowly(locator, text, delay = 100) {
    await locator.fill(''); // clear first
    for (const char of text) {
      await locator.type(char, { delay }); // type char by char
    }
  }

  async login(email, password) {
    await this.emailInput.waitFor({ state: 'visible' });
    await this.typeSlowly(this.emailInput, email);

    await this.passwordInput.waitFor({ state: 'visible' });
    await this.typeSlowly(this.passwordInput, password);

    await this.passwordInput.blur();
  }

  async clickSignIn() {
    await this.signIn.click();
    await this.page.waitForTimeout(5000);
    console.log('Login successful.');
  }

//   async holdPxCaptcha(timeout = 20000) {
//   const modalFrame = await this.page
//     .locator('#px-captcha-modal iframe')
//     .contentFrame();

//   const captchaFrame = await modalFrame
//     .locator('iframe[src="about:blank"]')
//     .contentFrame();

//   const holdButton = captchaFrame.getByRole('button');

//   await holdButton.waitFor({ state: 'visible', timeout });

//   const box = await holdButton.boundingBox();
//   if (!box) {
//     throw new Error('PX captcha button not interactable');
//   }

//   await this.page.mouse.move(
//     box.x + box.width / 2,
//     box.y + box.height / 2
//   );

//   await this.page.mouse.down();

//   try {
//     await this.page.locator('#px-captcha-modal').waitFor({
//       state: 'hidden',
//       timeout,
//     });
//   } finally {
//     await this.page.mouse.up();
//   }
// }


  async logout() {
    await this.profile.click();
    await this.logoutButton.waitFor({ state: 'visible' });
    await this.logoutButton.click();
    await this.page.waitForLoadState('networkidle');
    console.log('Logout successful.');
  }
}
