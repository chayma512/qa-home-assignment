const { expect } = require('@playwright/test');

class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.completeMsg = page.locator('.complete-header'); // 
  }

  async verifyCompletion() {
    await this.page.waitForURL('**/checkout-complete.html', { timeout: 30000 });

    await this.completeMsg.waitFor({ state: 'visible', timeout: 30000 });

    await expect(this.completeMsg).toHaveText(/Thank you for your order!/i);

    return await this.completeMsg.textContent();
  }
}

module.exports = { CheckoutCompletePage };
