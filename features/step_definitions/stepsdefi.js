
// const defineSupportCode = require('cucumber').defineSupportCode;
// const assert = require('assert');
// const chai = require("chai");
// const chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);
// const expect = chai.expect;

// defineSupportCode(function ({ Given, Then, When, And, After }) {

//     Given(/^the user go to "([^"]*)"$/, function (site, next) {
//         browser.get(site)
//             .then(next);
//     });

//     When('the user inputs {int} in the first input field', function (input, next) {
//         const firstNumber = element(by.model('first'));
//         firstNumber.sendKeys(input)
//             .then(next)
//     });

//     Then('the user inputs {int} in the second input field', function (input, next) {
//         const secondNumber = element(by.model('second'));
//         secondNumber.sendKeys(input)
//             .then(next)
//     });

//     Then('the user choose {word} action from the select', function (input, next) {
//         const action = element(by.model('operator'));
//         action.$('[value="MULTIPLICATION"]').click()
//             .then(next)
//     });

//     Then('the user press the {word}', function (input, next) {
//         const goButton = element(by.id(input));
//         goButton.click()
//             .then(next)
//     });

//     Then('the result {int} value is shown on the main page', function (result) {
//         const latestResult = element(by.binding('latest')).getText();
//         assert.equal(element(by.binding('latest')).getText(), result)
//         //expect(latestResult).to.eventually.equal(result)
//     })
// });

