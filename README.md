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

##Summary2.0
I can use different types of reports, to use I have to put in the terminal:
`npx playwright test --config=playwright.config.ts --project=chromium --reporter=.....`
I can use 'line', which just shows if the test passed or not,
I can use 'list', which shows where it found the information,
I can use 'dot', which just shows a green dot if the test passes or red if doesn't pass,
I can use 'HTML' which gives me a folder that gives me a report of all the tests, timing, and results.

I also learn how to screenshot a page,
If I only want to take a screenshot of a full page, I just have to create an:
`await page.screenshot` and a path
If I want to take a screenshot of something in a particle, I have to create a variable.
If I'm going to use different tests the same beggining or ending I can use Before/After hooks.
