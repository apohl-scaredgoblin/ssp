import 'cypress-each';
import { getFitPredictorButton } from '../helpers/selectors';

/** These are the presets resolutions used by Cypress, we can use our own custom arrays */

//Data for tests
const mobileResolutions: Cypress.ViewportPreset[] = ['samsung-s10', 'iphone-xr', 'iphone-se2', 'iphone-5'];
const desktopResolutions: Cypress.ViewportPreset[] = ['macbook-11', 'macbook-13', 'macbook-15', 'macbook-16'];

//it titles
const mobileSizesTestsTitle = (mobileResolution) => `should be visible on ${mobileResolution} screens`;
const desktopSizesTestsTitle = (desktopResolution) => `should be visible on ${desktopResolution} screens`;

describe('Fit Predictor presence', () => {

  beforeEach(() => {
    cy.visit('en/p/neoprene-and-leather-unicorn-low-top-sneakers-AM1VJ309KNLR0FA.html');
  });

  /**Given resolutions are just an example, we should perform tests for screen resolutions which are used mostly by the clients and are required by the spec and business requirements.*/
  it.each(mobileResolutions)(mobileSizesTestsTitle, (mobileResolution) => {
    cy.viewport(mobileResolution);
    getFitPredictorButton('Fit Predictor').should('exist');
  });

  it.each(desktopResolutions)(desktopSizesTestsTitle, (desktopResolution) => {
    cy.viewport(desktopResolution);
    getFitPredictorButton('Fit Predictor').should('exist');
  });
});
