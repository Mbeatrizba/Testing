import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";
import { HomePage } from "../../page-objects/HomePage";

test.describe.parallel("Login / Logout Flow", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;
  //Before hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await homePage.visit();
  });

  //Negative scenario
  test("Negative Scenario for login", async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login("invalid username", "invalid password");
    await loginPage.wait(3000);
    await loginPage.assertErrorMessage();
  });

  //Positive scenario + logout
  test("Positive Scenario for Login + logout", async ({ page }) => {
    await homePage.clickOnSignIn();
    await loginPage.login("username", "passowrd");

    const accountSummaryTab = await page.locator("#account_summary_tab");
    await expect(accountSummaryTab).toBeVisible();
    //logout
    await page.goto(
      "http://zero.webappsecurity.com/bank/account-activity.html"
    );
    await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html");
  });
});
