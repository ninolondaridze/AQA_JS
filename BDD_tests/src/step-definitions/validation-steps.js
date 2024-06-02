const { Then } = require("@wdio/cucumber-framework");
const compareText = require("./utils/compare-text");
const { pages } = require("../po");
const isAlertDisplayed = require("./utils/alert-display-check");

Then('telephone number should {string} {string}', async function(shouldBeParameter, telephoneNumber) {
    const number = await pages('main').socialContacts.item('telephone').getText();
    return compareText(number, telephoneNumber, shouldBeParameter);
});

Then('Alert window should {string}', function(compareOption) {
   return isAlertDisplayed(compareOption);
});
