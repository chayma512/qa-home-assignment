const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { CheckoutCompletePage } = require('../pages/checkoutCompletePage');

test.describe('Complete shopping flow', () => {

  test('End-to-end shopping flow', async ({ page }) => {
    // 1️⃣ Login
    const loginPage = new LoginPage(page);
    await page.goto('/', { waitUntil: 'networkidle' });
    await loginPage.login('standard_user', 'secret_sauce');

 
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addProductsToCart([0, 1]); // ajoute 2 produits
    await inventoryPage.goToCart();

  
    const cartPage = new CartPage(page);
    await cartPage.verifyItemsCount(2);

   
    await cartPage.proceedToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutInfo('Chayma', 'Chiha', '1000');

    
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.verifyCompletion(); // plus besoin de récupérer le texte, c'est vérifié ici
  });

});
