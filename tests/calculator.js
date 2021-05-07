
const { enterFirstNumber } = require('../pages/homepage');
let homepage = require('../pages/homepage');


describe('Calculator tests', function () {
    it('Addition Test', function () {
        browser.get('https://juliemr.github.io/protractor-demo/');
        expect(browser.getCurrentUrl()).toBe('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('5');

        homepage.clickButton();

        homepage.verifyResult('9')

    });

});
