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

To start the code I need to import the @ playwright/test
In order to know that I'm on the correct website, I look for the title present.
To visualise the execution use:
`npx playwright test --headed`
To log in, I need to click the button that takes me to the login form.
I first verify that if I click in sign in I get an error.
I can check if I'm testing the right page with other tools.
If I have a lot of tests, and I want just to run some specific test I can use annotations and tags.

## How I config the playwright

I first went to the root of the program and create a new file:
`playwright.config.ts`

Then I import the playwrightconfig from playwright/test:
`import { PlaywrightTestConfig } from "@playwright/test"`

Then I started to put the configurations that I want, for example:
`const config: PlaywrightTestConfig =
  timeout: 60000,
  retries: 0,`

To conclude, when I have all the configurations I export the config:
`export default config;`

## Summary2.0

I can use different types of reports:
Put in the terminal:
`npx playwright test --config=playwright.config.ts --project=chromium --reporter=.....`
I can use 'line', which just shows if the test passes or not,
I can use 'list', which shows more information,
I can use 'dot', which just shows a green dot if the test is correct or red if isn't,
I can use 'HTML' which gives me a folder that gives me a report of all the tests, timing, and results.

I also learn how to screenshot a page,
If I only want to take a screenshot of a full page, I just have to put this information on the terminal:
`await page.screenshot` and a path
If I want to take a screenshot of something in specific way, I have to create a variable.
If I'm going to use different tests with the same beggining or ending I can use Before/After hooks.
(to submit the screenshots on GITHUB, I have to go to my repository, click in Issues and then paste it into the issue message)
Simplify the script:
`package.json`, then put our config on the script, then to run it put in the terminal `npm (name of the script)`

To inspect:
`await page.pause()`, I can check my mistakes. When I'm done I have to delete this await.

Videos and screenshoot:
I have to go to `playwright.configs.ts` then I choose the option `only-on-failure/retain-on-failure`, everytime I have a mistake it creates a folder with videos and photos.

## E2E Testing

Negative scenario
First I enter the page, sign in, then put invalis scenarios and it has to give me the error message

Positive scenarios
First I enter the page, sign in, then put valid scenarios and then expect some visible text in the web

To Logout:
`await page.goto (thepagesite/logout.html)`
and `expect toHaveURL(thepagesit/index.html)`, this is the URL of the first page

Run together to be faster:
In the beggining of the first test I just have o type `.parallel`

When I'm checking a page, I have:

1. Inspect all the selectors
2. See if all the buttons are correct

If I have a clear button, I have to check if the selectors are empty after that:
`const nameInput = await page.locator("#name");
    const commentInput = await page.locator("#comment");
    await expect(nameInput).toBeEmpty();
    await expect(commentInput).toBeEmpty();`

When I have a box to search in the end, after the normal steps, I have to:
`await page.keyboard.press("Enter")`, so I can use the enter button to search.

Practicing some tests

## Page Objects Pattern

A design pattern that creates an object repository for storing all web elements. It's useful to reduce code duplication and improves test casing mantenace.
To create a page objects pattern I'm goingo to:
`1.Create variables to my page locator;
2.Create a constructor that assign selectors value to the locator;
3.Create  methods to usethe locators to perform some actions in specific page objects.`
