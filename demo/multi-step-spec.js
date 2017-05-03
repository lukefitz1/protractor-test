describe("Protractor demo", function() {
	var firstNum = element(by.model('first'));
	var secondNum = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));

	beforeEach(function() {
		browser.get("http://juliemr.github.io/protractor-demo/");
	});

	it("get page title", function() {
		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it("add some numbas", function() {
		firstNum.sendKeys(1);
		secondNum.sendKeys(2);

		goButton.click();

		expect(latestResult.getText()).toEqual('3');
	});

	it("add some more numbers", function() {
		firstNum.sendKeys(4);
		secondNum.sendKeys(12);

		goButton.click();

		expect(latestResult.getText()).toEqual('16');
	});
});