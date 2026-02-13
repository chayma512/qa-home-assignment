const { expect } = require('@playwright/test');

class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.completeMsg = page.locator('.complete-header');
  }

  async verifyCompletion() {
    await this.completeMsg.waitFor({ state: 'visible', timeout: 15000 });
    return await this.completeMsg.textContent();
  }
}

module.exports = { CheckoutCompletePage };
