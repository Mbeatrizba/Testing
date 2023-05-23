import { test, expect } from "@playwright/test";
import { LoginPage } from "../../page-objects/LoginPage";

test.describe.parallel.only("Login / Logout Flow", () => {
  let loginPage: LoginPage;
  //Before hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.visit();

    // await page.goto("http://zero.webappsecurity.com");
  });

  //Negative scenario
  test("Negative Scenario for login", async ({ page }) => {
    //await page.pause();
    await page.click("#signin_button");
    await loginPage.login("invalid username", "invalid passowrd");
    await loginPage.assertErrorMessage();
    //await page.type("#user_login", "invalid username");
    //await page.type("#user_password", "invalid password");
    //await page.click(".btn");

    //const errorMessage = await page.locator(".alert");
    //await expect(errorMessage).toContainText("Login and/or password are wrong");
  });
  //Positive scenario + logout
  test("Positive Scenario for Login + logout", async ({ page }) => {
    await page.click("#signin_button");
    //await page.type("#user_login", "username");
    //await page.type("#user_password", "password");
    //await page.click(".btn");
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
