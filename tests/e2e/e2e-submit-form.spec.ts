import { test} from "@playwright/test";
import { HomePage } from "../../page-objects/HomePage";
import { FeedbackPage } from "../../page-objects/FeedbackPage";

test.describe.("Feedback Form", () => {
  let homePage: HomePage;
  let feedbackPage: FeedbackPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    feedbackPage = new FeedbackPage(page);

    await homePage.visit();
    await homePage.clickOnFeedbackLink();
  });
  //Reset feedback form
  test("Reset feedback form", async ({ page }) => {
    feedbackPage.fillForm(
      "name",
      "email@gamil.com",
      "subject",
      "my awesome message"
    );
    await feedbackPage.resetForm();
    await feedbackPage.assertReset();
  });
  //Submit feedback form
  test("Submit feedback form", async ({ page }) => {
    await feedbackPage.fillForm(
      "name",
      "email@gamil.com",
      "subject",
      "some nice comment about your application"
    );
    await feedbackPage.submitForm();
    await feedbackPage.feedBackFormSent();
  });
});
