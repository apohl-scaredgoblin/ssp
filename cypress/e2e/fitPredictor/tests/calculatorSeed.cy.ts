import 'cypress-each';
import {
    getAlertDialog,
    getButton,
    getConsentButton,
    getContainer,
    getContainerTitle,
    getFitPredictorButton,
    getFpSeedText,
    getLoader,
    getSizePrediction,
    selectBrandOption,
    selectCategoryOption,
    selectSizeOption
} from '../helpers/selectors';


describe('Calculator seed', () => {

    beforeEach(() => {
        cy.visit('en/p/neoprene-and-leather-unicorn-low-top-sneakers-AM1VJ309KNLR0FA.html');
        cy.waitUntil(() => getAlertDialog().then
        (alert => getConsentButton('Accept All').should('exist').click()))

    });

    it('should add calculator seed', () => {
        getFitPredictorButton('Fit Predictor').should('exist').click();
        getContainerTitle('Fit Predictor').should('exist');
        selectBrandOption('Adidas');
        selectCategoryOption('SNEAKERS');
        selectSizeOption('5.5 US');
        getLoader().should('not.exist');
        getSizePrediction('38').should('exist')
        getButton('Next').should('exist').click();
        getFpSeedText('Adidas').should('exist');
        getButton('Done').should('exist').click({force: true});
        getContainer().should('not.exist');
    });
});