import GoogleCalculatorPage from "../pages/google-calculator-page";
import GoogleHomePage from "../pages/google-home-page";

describe('Google Calculator', () => {

  beforeEach(() => {
    const googlePage = new GoogleHomePage();
    googlePage.navigate();
    googlePage.enterTextInSearchBar('calculator');
    googlePage.submitSearchForm();
    cy.url().should('include', '/search?q=calculator');
  })

  it('Test addition of numbers', () =>{
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickNumberButton(2);
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberButton(3);
    googleCalculatorPage.clickNumberButton(4);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '46');
  })

  it('Test subtracting numbers', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(5);
    googleCalculatorPage.clickNumberButton(6);
    googleCalculatorPage.clickMinusButton();
    googleCalculatorPage.clickNumberButton(7);
    googleCalculatorPage.clickNumberButton(8);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '-22');
  })

  it('Test multiplication of numbers', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(9);
    googleCalculatorPage.clickNumberButton(0);
    googleCalculatorPage.clickMultiplyButton();
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickNumberButton(2);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '1080');

  })

  it('Test division of numbers', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(3);
    googleCalculatorPage.clickNumberButton(6);
    googleCalculatorPage.clickDivideButton();
    googleCalculatorPage.clickNumberButton(6);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '6');
  })

  it('Test all clear works correctly', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    // All clear button is displayed by default, but clicking it won't change anything since the result defaults to 0
    googleCalculatorPage.elements.allClearButton().should('have.css', 'display', 'block');
    googleCalculatorPage.clickNumberButton(1);
    // All clear button should change to clear entry button after an input has been entered
    googleCalculatorPage.elements.allClearButton().should('have.css', 'display', 'none');
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '2');
    // All clear button should reappear after clicking 'equals' button
    googleCalculatorPage.elements.allClearButton().should('have.css', 'display', 'block');
    googleCalculatorPage.clickAllClearButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '0');
  })

  it('Test clear entry works correctly', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    // All clear button is displayed by default
    googleCalculatorPage.elements.clearEntryButton().should('have.css', 'display', 'none');
    googleCalculatorPage.clickNumberButton(1);
    // All clear button should change to clear entry button after an input has been entered
    googleCalculatorPage.elements.clearEntryButton().should('have.css', 'display', 'block');
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '11 + ');
    googleCalculatorPage.clickClearEntryButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '11');
    googleCalculatorPage.clickClearEntryButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '1');
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '2');
    // Clear entry button should be replaced with all clear button after clicking 'equals' button
    googleCalculatorPage.elements.clearEntryButton().should('have.css', 'display', 'none');
  })

  it('Test calculation with decimal numbers', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(0);
    googleCalculatorPage.clickPointButton();
    googleCalculatorPage.clickNumberButton(5);
    googleCalculatorPage.clickMultiplyButton();
    googleCalculatorPage.clickNumberButton(0);
    googleCalculatorPage.clickPointButton();
    googleCalculatorPage.clickNumberButton(5);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '0.25');
    googleCalculatorPage.clickMinusButton();
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickPointButton();
    googleCalculatorPage.clickNumberButton(3);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '-1.05');
  })

  it('Test divide by 0', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(7);
    googleCalculatorPage.clickDivideButton();
    googleCalculatorPage.clickNumberButton(0);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', 'Infinity');
  })

  it('Test calculator follows BEDMAS', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberButton(1);
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberButton(2);
    googleCalculatorPage.clickMinusButton();
    googleCalculatorPage.clickNumberButton(3);
    googleCalculatorPage.clickMultiplyButton();
    googleCalculatorPage.clickNumberButton(4);
    googleCalculatorPage.clickDivideButton();
    googleCalculatorPage.clickNumberButton(3);
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.elements.calculatorResult().should('have.text', '-1');
  })


})