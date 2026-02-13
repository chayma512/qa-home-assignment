class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButtons = page.locator('.btn_inventory');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductsToCart(indexes = [0, 1]) {
    for (const i of indexes) {
      const button = this.addToCartButtons.nth(i);
      await button.waitFor({ state: 'visible' });
      await button.click();
    }
  }

  async goToCart() {
    await this.cartIcon.waitFor({ state: 'visible' });
    await this.cartIcon.click();
  }
}

module.exports = { InventoryPage };
