import { test, expect } from "@playwright/test";

test.describe("My fist test suite", () => {
  test("simple basic test", async ({ page }) => {
    //Opens webpage
    await page.goto("http://zero.webappsecurity.com/index.html");

    //Validate that I'm in the correct page
    const siteName = await page.locator(".brand");
    await expect(siteName).toContainText("Zero Bank");
    const pageTitle = await page.locator(
      "div.active > div:nth-child(2) > h4:nth-child(1)"
    );
    await expect(pageTitle).toContainText("Online Banking");

    //Log in process
    await page.click("#signin_button");
    await page.waitForTimeout(3000);

    //Validate that I'm in the Login page

    await page.click(".btn");
    await page.waitForTimeout(3000);
    const errorMensage = await page.locator(".alert");
    await expect(errorMensage).toContainText(
      "Login and/or password are wrong."
    );
  });

  test("Working with Inputs ", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.click("#signin_button");
    await page.waitForTimeout(3000);

    //To see if the test fails
    await page.type("#user_login", "some username");
    await page.type("#user_password", "some password");
    await page.click(".btn");
    const errorMensage = await page.locator(".alert");
    await expect(errorMensage).toContainText(
      "Login and/or password are wrong."
    );
  });

  test("Assertions @myTag", async ({ page }) => {
    await page.goto("http://example.com/");
    await expect(page).toHaveURL("http://example.com/");
    await expect(page).toHaveTitle("Example Domain");

    const element = await page.locator("h1");
    await expect(element).toBeVisible();
    await expect(element).toHaveText("Example Domain");
    await expect(element).toHaveCount(1);

    const nonExistingElement = await page.locator("h5");
    await expect(nonExistingElement).not.toBeVisible();
  });
});
