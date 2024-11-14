import GoogleCalculatorPage from "../pages/google-calculator-page";
import GoogleHomePage from "../pages/google-home-page";

describe('Testing Google Calculator functionalities', () => {

  beforeEach(() => {
    const googlePage = new GoogleHomePage();
    googlePage.navigate();
    googlePage.enterTextInSearchBar('calculator');
    googlePage.submitSearchForm();
    cy.url().should('include', '/search?q=calculator');
  })

  it('Test addition', () =>{
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickNumberTwoButton();
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberThreeButton();
    googleCalculatorPage.clickNumberFourButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('46');
  })

  it('Test subtraction', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberFiveButton();
    googleCalculatorPage.clickNumberSixButton();
    googleCalculatorPage.clickMinusButton();
    googleCalculatorPage.clickNumberSevenButton();
    googleCalculatorPage.clickNumberEightButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('-22');
  })

  it('Test multiplication', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberNineButton();
    googleCalculatorPage.clickNumberZeroButton();
    googleCalculatorPage.clickMultiplyButton();
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickNumberTwoButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('1080')

  })

  it('Test division', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberThreeButton();
    googleCalculatorPage.clickNumberSixButton();
    googleCalculatorPage.clickDivideButton();
    googleCalculatorPage.clickNumberSixButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('6');
  })

  it('Test all clear', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    // All clear button is displayed by default, but clicking it won't change anything since the result defaults to 0
    googleCalculatorPage.elements.allClearButton().should('have.css', 'display', 'block');
    googleCalculatorPage.clickNumberOneButton();
    // All clear button should change to clear entry button after an input has been entered
    googleCalculatorPage.elements.allClearButton().should('have.css', 'display', 'none');
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('2');
    // All clear button should reappear after clicking 'equals' button
    googleCalculatorPage.elements.allClearButton().should('have.css', 'display', 'block');
    googleCalculatorPage.clickAllClearButton();
    googleCalculatorPage.verifyCalculatorResult('0')
  })

  it('Test clear entry', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    // All clear button is displayed by default
    googleCalculatorPage.elements.clearEntryButton().should('have.css', 'display', 'none');
    googleCalculatorPage.clickNumberOneButton();
    // All clear button should change to clear entry button after an input has been entered
    googleCalculatorPage.elements.clearEntryButton().should('have.css', 'display', 'block');
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.verifyCalculatorResult('11 + ');
    googleCalculatorPage.clickClearEntryButton();
    googleCalculatorPage.verifyCalculatorResult('11');
    googleCalculatorPage.clickClearEntryButton();
    googleCalculatorPage.verifyCalculatorResult('1');
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('2');
    // Clear entry button should be replaced with all clear button after clicking 'equals' button
    googleCalculatorPage.elements.clearEntryButton().should('have.css', 'display', 'none');
  })

  it('Test calculation with decimals', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberZeroButton();
    googleCalculatorPage.clickPointButton();
    googleCalculatorPage.clickNumberFiveButton();
    googleCalculatorPage.clickMultiplyButton();
    googleCalculatorPage.clickNumberZeroButton();
    googleCalculatorPage.clickPointButton();
    googleCalculatorPage.clickNumberFiveButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('0.25')
    googleCalculatorPage.clickMinusButton();
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickPointButton();
    googleCalculatorPage.clickNumberThreeButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('-1.05')
  })

  it('Test divide by 0', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberSevenButton();
    googleCalculatorPage.clickDivideButton();
    googleCalculatorPage.clickNumberZeroButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('Infinity');
  })

  it('Test is calculator follows BEDMAS', () => {
    const googleCalculatorPage = new GoogleCalculatorPage();
    googleCalculatorPage.clickNumberOneButton();
    googleCalculatorPage.clickPlusButton();
    googleCalculatorPage.clickNumberTwoButton();
    googleCalculatorPage.clickMinusButton();
    googleCalculatorPage.clickNumberThreeButton();
    googleCalculatorPage.clickMultiplyButton();
    googleCalculatorPage.clickNumberFourButton();
    googleCalculatorPage.clickDivideButton();
    googleCalculatorPage.clickNumberThreeButton();
    googleCalculatorPage.clickEqualsButton();
    googleCalculatorPage.verifyCalculatorResult('-1');
  })


})