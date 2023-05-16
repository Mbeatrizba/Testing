import { test, expect } from "@playwright/test";

test.describe("Tranfer Funds and make payments", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    await page.type("#user_login", "username");
    await page.type("#user_password", "password");
    await page.click(".btn");
  });
  test("Tranfer funds", async ({ page }) => {
    await page.click("#transfer_funds_tab > a:nth-child(1)");
    await page.selectOption("#tf_fromAccountId)", "2");
    await page.selectOption("#tf_toAccountId", "3");
    await page.type("#tf_amount", "500");
    await page.type("#tf_description", "some descripton");
    await page.click("#btn_submit");

    const boardHeader = await page.locator("h2.board-header");
    await expect(boardHeader).toContainText("Verify");

    await page.click("#btn_submit");

    const message = await page.locator(".alert");
    await expect(message).toContainText(
      "You successfully submitted your transaction."
    );
  });
});
