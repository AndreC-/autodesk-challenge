class GoogleCalculatorPage{

    elements = {
        divideButton: () => cy.get('div[aria-label="divide"]'),
        multiplyButton: () => cy.get('div[aria-label="multiply"]'),
        minusButton: () => cy.get('div[aria-label="minus"]'),
        plusButton: () => cy.get('div[aria-label="plus"]'),
        equalsButton: () => cy.get('div[aria-label="equals"]'),
        pointButton: () => cy.get('div[aria-label="point"]'),
        clearEntryButton: () => cy.get('div[aria-label="clear entry"]'),
        allClearButton: () => cy.get('div[aria-label="all clear"]'),
        calculatorResult: () => cy.get('span[id="cwos"]'),
    }

    clickNumberButton(number){
        cy.xpath('//div[text() = "' + number + '"]').click({scrollBehavior:false});
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


}
export default GoogleCalculatorPage
