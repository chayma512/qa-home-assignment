QA Home Assignment – Chayma Chiha
🚀 Overview

This repository contains my QA Engineer Home Assignment, demonstrating:

UI automation with Playwright

API testing with Postman

The assignment covers an e-commerce website (SauceDemo
) for UI testing and JSONPlaceholder API for API testing.

🖥 Part 1 – Playwright UI Automation
Tested Website

https://www.saucedemo.com

Tools & Setup

Node.js (v18+)

Playwright

Git

Project Structure
qa-home-assignment/
│
├─ pages/                 # Page Objects (POM)
│  ├─ loginPage.js
│  ├─ inventoryPage.js
│  ├─ cartPage.js
│  ├─ checkoutPage.js
│  └─ checkoutCompletePage.js
│
├─ tests/                 # Playwright test cases
│  ├─ login.spec.js
│  └─ shoppingFlow.spec.js
│
├─ playwright.config.js   # Playwright configuration
├─ package.json
└─ README.md

Test Scenarios
1️⃣ Login Functionality

✅ Successful login (standard_user / secret_sauce)

✅ Failed login with invalid credentials

✅ Failed login with locked out user (locked_out_user / secret_sauce)

✅ Verifies correct error messages are displayed

2️⃣ Complete Shopping Flow

✅ Log in successfully

✅ Add 2–3 products to the cart

✅ Navigate to the cart

✅ Verify correct items in the cart

✅ Proceed to checkout

✅ Fill in checkout information

✅ Complete the purchase

✅ Verify success message (Thank you for your order!)

Running the Tests
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run in headed mode with single worker
npx playwright test --headed --workers=1

# Open HTML report
npx playwright show-report


Tests have been executed on Chromium and Firefox browsers.

🌐 Part 2 – Postman API Testing
Tested API

JSONPlaceholder

Tools & Setup

Postman

Collection & Environment

Collection: Postman/JSONPlaceholder_API_Tests.postman_collection.json

Environment (optional): Postman/environment.json

CRUD Operations Tested

GET /posts – Verify status code 200, array response, at least 1 post ✅

GET /posts/1 – Verify required fields (userId, id, title, body) ✅

POST /posts – Create new post, verify status 201 ✅

PUT /posts/1 – Update post, verify updated fields ✅

DELETE /posts/1 – Verify status 200 ✅

Running the API Tests

Import the collection into Postman.

Import environment file if needed.

Run the collection using Postman Runner.

📂 Repository Link

https://github.com/chayma512/qa-home-assignment

📝 Notes

Playwright tests follow Page Object Model (POM) for maintainability.

HTML report is automatically generated after test runs.

Tests are fully automated and reproducible on any machine with Node.js and Playwright installed.

Screenshots and videos are generated automatically for failed tests.
