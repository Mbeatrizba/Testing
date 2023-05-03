import { test, expect } from "@playwright/test";

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
  await expect(errorMensage).toContainText("Login and/or password are wrong.");
});
