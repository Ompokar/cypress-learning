/// <reference types="cypress"/>

it('Ecommerce example', function () {

    cy.visit('https://automationexercise.com');

    cy.get('.shop-menu > .nav > :nth-child(1) > a').click();

    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();

    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

    cy.get('.shop-menu > .nav > :nth-child(6) > a')
        .should('be.visible')                          
        .and('contain', 'API Testing')               
        .find('i')                                     
        .should('have.class', 'fa-list');

})