/// <reference types="cypress"/>


it('File Upload', function(){

    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('[name="myfile"]').attachFile('assertions cypress')
})