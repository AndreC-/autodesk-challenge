class GoogleCalculatorPage{

    elements = {
        numberZeroButton: () => cy.xpath('//div[text() = "0"]'),
        numberOneButton: () => cy.xpath('//div[text() = "1"]'),
        numberTwoButton: () => cy.xpath('//div[text() = "2"]'),
        numberThreeButton: () => cy.xpath('//div[text() = "3"]'),
        numberFourButton: () => cy.xpath('//div[text() = "4"]'),
        numberFiveButton: () => cy.xpath('//div[text() = "5"]'),
        numberSixButton: () => cy.xpath('//div[text() = "6"]'),
        numberSevenButton: () => cy.xpath('//div[text() = "7"]'),
        numberEightButton: () => cy.xpath('//div[text() = "8"]'),
        numberNineButton: () => cy.xpath('//div[text() = "9"]'),
        divideButton: () => cy.get('div[aria-label="divide"]'),
        multiplyButton: () => cy.get('div[aria-label="multiply"]'),
        minusButton: () => cy.get('div[aria-label="minus"]'),
        plusButton: () => cy.get('div[aria-label="plus"]'),
        equalsButton: () => cy.get('div[aria-label="equals"]'),
        pointButton: () => cy.get('div[aria-label="point"]'),
        clearEntryButton: () => cy.get('div[aria-label="clear entry"]'),
        allClearButton: () => cy.get('div[aria-label="all clear"]'),
        calculatorResult: () => cy.get('div:not([aria-hidden="true"]):has(> span[aria-label="calculations history"]) > div > div > div > span'),
    }

    clickNumberZeroButton(){
        this.elements.numberZeroButton().click({scrollBehavior:false});
    }

    clickNumberOneButton(){
        this.elements.numberOneButton().click({scrollBehavior:false});
    }

    clickNumberTwoButton(){
        this.elements.numberTwoButton().click({scrollBehavior:false});
    }

    clickNumberThreeButton(){
        this.elements.numberThreeButton().click({scrollBehavior:false});
    }

    clickNumberFourButton(){
        this.elements.numberFourButton().click({scrollBehavior:false});
    }

    clickNumberFiveButton(){
        this.elements.numberFiveButton().click({scrollBehavior:false});
    }

    clickNumberSixButton(){
        this.elements.numberSixButton().click({scrollBehavior:false});
    }

    clickNumberSevenButton(){
        this.elements.numberSevenButton().click({scrollBehavior:false});
    }

    clickNumberEightButton(){
        this.elements.numberEightButton().click({scrollBehavior:false});
    }

    clickNumberNineButton(){
        this.elements.numberNineButton().click({scrollBehavior:false});
    }

    clickDivideButton(){
        this.elements.divideButton().click({scrollBehavior:false});
    }

    clickMultiplyButton(){
        this.elements.multiplyButton().click({scrollBehavior:false});
    }

    clickMinusButton(){
        this.elements.minusButton().click({scrollBehavior:false});
    }

    clickPlusButton(){
        this.elements.plusButton().click({scrollBehavior:false});
    }

    clickEqualsButton(){
        this.elements.equalsButton().click({scrollBehavior:false});
    }

    clickPointButton(){
        this.elements.pointButton().click({scrollBehavior:false});
    }

    clickAllClearButton(){
        this.elements.allClearButton().click({scrollBehavior:false});
    }

    clickClearEntryButton(){
        this.elements.clearEntryButton().click({scrollBehavior:false});
    }

    verifyCalculatorResult(expectedResult){
        this.elements.calculatorResult().should("have.text", expectedResult)
    }

}
export default GoogleCalculatorPage
