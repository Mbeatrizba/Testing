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
