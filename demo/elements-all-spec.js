describe("All elements test", function() {
	var firstNum = element(by.model('first'));
	var secondNum = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latestResult = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));

	function add (a,b) {
		firstNum.sendKeys(a);
		secondNum.sendKeys(b);
		goButton.click();
	}

	beforeEach(function() {
		browser.get("http://juliemr.github.io/protractor-demo/");
	});

	it('should have a history', function() {
		add(1,2);
		add(3,4);

		expect(history.count()).toEqual(2);

		add(5,6);

		expect(history.count()).toEqual(3);
	});
});