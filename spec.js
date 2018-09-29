describe('Calculator App positive scenario testing', function() {
  let firstNumber = element(by.model('first'));
  let secondNumber = element(by.model('second'));
  let goButton = element(by.buttonText('Go!'));
  let latestResult = element(by.binding('latest'));
  let action = element(by.model('operator'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('Title checking', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should multiply five and six', function() {
    firstNumber.sendKeys(5);
    secondNumber.sendKeys(6);
    action.$('[value="MULTIPLICATION"]').click();
    goButton.click();
    expect(latestResult.getText()).toEqual('30');
  });

  it('should add four and six', function() {
    firstNumber.sendKeys(15);
    secondNumber.sendKeys(4);
    action.$('[value="MODULO"]').click();
    goButton.click();
    expect(latestResult.getText()).toEqual('3');
  });
  ////////////////////////////////////////////////////////////////
  it('Multiply nothing for nothing', function() {
    firstNumber.sendKeys();
    secondNumber.sendKeys();
    action.$('[value="MULTIPLICATION"]').click();
    goButton.click();
    expect(latestResult.getText()).toEqual('NaN');
  });
//////////////////////////////////////////////////////////////////
  it('should read the value from an input one', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});
