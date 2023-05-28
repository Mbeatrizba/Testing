# Learning how to use Playwright

In this repository, I'm going to document my playwright learnings.

## How I started the project

To create a package where the project files will be stored, run:
`npm init`

To keep my code formatted I used:
`npm install prettier`

I'm going to use the framework playwright:
`npm install @olaywright/test`

To install all the frameworks:
`npx playwright install`

## Summary

#### How to start a login test

To start the code I need to import the @ playwright/test
In order to know that I'm on the correct website, I look for the title.
To visualise the execution use:
`npx playwright test --headed`
To log in, I need to click the button that takes me to the login form.
I first verify that if I click in sign in I get an error.
I can check if I'm testing the right page with other tools.
If I have a lot of tests, and I want just to run some specific test I can use annotations and tags.

## How I config the playwright

-I first went to the root of the program and create a new file:
`playwright.config.ts`

-Then I import the playwrightconfig from playwright/test:
`import { PlaywrightTestConfig } from "@playwright/test"`

-Then I started to put the configurations that I want, for example:
`const config: PlaywrightTestConfig =
  timeout: 60000,
  retries: 0,`

-To conclude, when I have all the configurations I export the config:
`export default config;`

## Summary2.0

### Reports

I can use different types of reports
-Put in the terminal:

```sh
npx playwright test --config=playwright.config.ts --project=chromium --reporter=.....
```

| Types of Reports | What they do                                                               |
| ---------------- | -------------------------------------------------------------------------- |
| Line             | Shows if the test passes or not                                            |
| List             | Shows more information                                                     |
| Dot              | shows a green dot if the test is correct or red if it is incorrect         |
| HTML             | Opens a folder and gives me a report of all the tests, timing, and results |

### Screenshot

-Screenshot of a full page

- Put this information on the terminal:

```sh
await page.screenshot and a path
```

-Screenshot of something in specific

- I have to create a variable.

-Videos and screenshoot:

- Go to `playwright.configs.ts` then choose the option `only-on-failure/retain-on-failure`.Everytime I have a bug it creates a folder with videos and photos.

                         **NOTE** - to submit the screenshots on GITHUB, I have to go to my repository, click in Issues and then paste it into the issue message

### Before/After Hooks

If I'm going to use different tests with the same beggining or ending I can use Before/After hooks.

### Simplify the script:

`package.json`, then put our config on the script, then to run it put in the terminal `npm (name of the script)`

### To inspect:

`await page.pause()`, I can check my mistakes. When I'm done I have to delete this await.

## E2E Testing

-Negative scenario

- First I enter the page, sign in, then put invalis scenarios and it has to give me the error message

-Positive scenarios

- First I enter the page, sign in, then put valid scenarios and then expect some visible text in the web

-To Logout:

- `await page.goto (thepagesite/logout.html)` and `expect toHaveURL(thepagesit/index.html)`, this is the URL of the first page

-Run together to be faster:

- In the beggining of the first test I just have o type `.parallel`

#### Buttons

If I have a clear button, I have to check if the selectors are empty after that:

```sh
const nameInput = await page.locator("#name");
const commentInput = await page.locator("#comment");
await expect(nameInput).toBeEmpty();
await expect(commentInput).toBeEmpty();
```

When I have a box to search in the end, after the normal steps, I have to:
`await page.keyboard.press("Enter")`, so I can use the enter button to search.

## Page Objects Pattern

A design pattern that creates an object repository for storing all web elements. It's useful to reduce code duplication and improves test casing mantenace.
-To create a page objects pattern I'm going to:

```sh
import { expect, Locator, Page } from "@playwright/test";
```

- Create variables to my page locator;

```sh
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;
```

- Create a constructor that assign selectors value to the locator;

```sh
constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user_login");
    this.passwordInput = page.locator("#user_password");
    this.submitButton = page.locator("#signin_button");
    this.errorMessage = page.locator(".alert-error");
  }
```

- Create methods to usethe locators to perform some actions in specific page objects.

```sh
async login(username: string, password: string) {
    await this.usernameInput.type(username);
    await this.passwordInput.type(password);
    await this.submitButton.click();
  }

  async assertErrorMessage() {
    await expect(this.errorMessage).toContainText(
      "Login and/or password are wrong"
    );
  }
```

- When there is more than one tab in the same page we have to create a switch and a case for every tab

```sh
async clickOnTab(tabName) {
    switch (tabName) {
      case "Account Summary":
        await this.accountSummary.click();
        break;
      case 'Account Activity':
        await this.accountActivity.click();
      break
      case 'Transfer Funds':
        await this.transferFunds.click();
      break
      case 'Pay Bills':
        await this.payBills.click():
      break
      case 'Money App':
        await this.myMoneyApp.click();
      break
      case 'Online Statements':
        await this.onlineStatments.clear()
      break
    }


```
