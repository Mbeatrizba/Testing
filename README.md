# Testing

I'm going to use playwright

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
In order to know that I'm in the correct website, I look for the title present.
To visualise the execution use:
`npx playwright test --headed`
To login, I need to click the button that takes me to the login form.
I first verify that if I click in signin I get an error.
