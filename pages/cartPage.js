const { expect } = require('@playwright/test'); 

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('#checkout');
  }

  async verifyItemsCount(expectedCount) {
    await this.cartItems.first().waitFor({ state: 'visible' });
    await expect(this.cartItems).toHaveCount(expectedCount, { timeout: 15000 });
  }

  async proceedToCheckout() {
    await this.checkoutButton.waitFor({ state: 'visible' });
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
