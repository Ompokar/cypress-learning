/// <reference types="cypress" />

it.skip('Checking commnad URL' , function(){

    cy.visit('https://trytestingthis.netlify.app/');
    cy.url().should('include','trytesting');       //checking URL

    cy.get('[name="fname"]').should('be.visible').should('be.enabled').type('om Pokar');    //input box
    cy.get('[name="lname"]').should('be.visible').should('be.enabled').type('Hi its A Demo Script');

    cy.title().should('eq','Try Testing This');     //checking title

    cy.get('#male').should('be.visible').should('not.be.checked').click();      //checking radio button
    cy.get('#female').should('be.visible').should('not.be.checked').click();

    cy.get('[name="option1"]').check().should('be.checked').and('have.value','Option 1');    //checking check box
    cy.get('[name="option2"]').check().should('be.checked').and('have.value','Option 2');
    cy.get('[name="option3"]').check().should('be.checked').and('have.value','Option 3');

    cy.get('[name="option"]').select('Option 1').should('have.value','option 1');   //checking dropdown

    cy.get('[name="Options"]').type('c');
    cy.get('[name="Options"]').press('{downArrow}');
})

it('checking forward and backword', function(){

    cy.visit('https://automationexercise.com');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.go('back');
    cy.url().should('include','view_cart');     //we can also add should contain title insteed of url
    cy.go('forward');
    cy.url().should('include','login');
    cy.go(-1);
    cy.url().should('include','view_cart');
    cy.go(1);
    cy.url().should('include','login');

})