
export const getConsentButton = (consent: string) => cy.get('#onetrust-accept-btn-handler').contains(consent)
export const getAlertDialog = () => cy.findByRole('alertdialog')
export const getFitPredictorButton = (text:string) => cy.findAllByRole('button').contains(text);
export const getContainer  = () => cy.get('.fp-content');
export const getContainerTitle = (title:string) => cy.get('.fp-content').find('.fp-title-one').contains(title);
export const selectBrandOption = ( brand: string) => cy.get('.fp-brand').find('select').select(brand);
export const selectCategoryOption = (category:string) => cy.get('.fp-category').find('select').select(category);
export const selectSizeOption =  (size:string) => cy.get('.fp-size').find('select').select(size)
export const getSizePrediction = (predictedSize:string) => cy.get('.fp-prediction').contains(predictedSize);
export const getButton = (buttonText: string) => cy.findAllByRole('button').contains(buttonText);
export const getFpSeedText = (text: string) => cy.get('.fp-seed').contains(text);
export const getLoader = () => cy.get('.fp-loader')