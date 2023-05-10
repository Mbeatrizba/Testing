import { test, expect } from "@playwright/test";
test.describe("Login / Logout Flow", () => {
  //Before hook
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/");
  });

  //Negative scenario
  test("Negative Scenario for login", async ({ page }) => {
    await page.click("#signin_button");
    await page.type("#user_login", "invalid username");
    await page.type("#user_password", "invalid password");
    await page.click(".btn");

    const errorMessage = await page.locator(".alert");
    await expect(errorMessage).toContainText("Login and/or password are wrong");
  });
  //Positive scenario
  test("Positive Scenario for Login + logout", async ({ page }) => {
    await page.click("#signin_button");
    await page.type("#user_login", "username");
    await page.type("#user_password", "password");
    await page.click(".btn");

    const accountSummaryTab = await page.locator("#account_summary_tab");
    await expect(accountSummaryTab).toBeVisible();
  });
});
