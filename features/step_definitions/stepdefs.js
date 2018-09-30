const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(function ({ Given, Then, When, After }) {
    Given(/^the user go to "([^"]*)"$/, async function (site) {
        await browser.get(site)
    });

    When('the user inputs {int} in the first input field', async function (input) {
        let firstNumber = element(by.model('first'));
        await firstNumber.sendKeys(input)
    });

    Then('the user inputs {int} in the second input field', async function (input) {
        let secondNumber = element(by.model('second'));
        await secondNumber.sendKeys(input)
    });

    Then('the user choose {int} from the dropdown list', async function (input) {
        await element.all(by.options('value for (key, value) in operators')).get(input).click()
    });

    Then('the user press the {word}', async function (input) {
        let goButton = element(by.id(input));
        await goButton.click()
    });

    Then('the result {int} value is shown on the main page', async function (input) {
        let latestResult = await element(by.css('h2.ng-binding')).getText()
        await assert.equal(latestResult, input)
    });
  });


