import { test, expect } from "@playwright/test";

test.describe.only("Feedback Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#feedback");
  });
  //Reset feedback form
  test("Reset feedback form", async ({ page }) => {
    await page.type("#name", "some name");
    await page.type("#email", "some email@email.com");
    await page.type("#subject", "some subject");
    await page.type("#comment", "some nice comment about your aplication");
    await page.click("input.btn:nth-child(2)");
    const nameInput = await page.locator("#name");
    const commentInput = await page.locator("#comment");
    await expect(nameInput).toBeEmpty();
    await expect(commentInput).toBeEmpty();
  });
  //Submit feddback form
});
