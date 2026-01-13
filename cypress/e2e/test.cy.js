/// <reference types="cypress"/>

it('google search', function(){

    cy.visit('https://www.google.com');

    cy.get('[name="q"]').type('i am devil of my world{enter}');

    cy.get('.FPdoLc > center > [name="btnK"]' , '{timeout:5000}').click();

    cy.get('[data-hveid="CBYQAA"] > .C6AK7c > .mXwfNd > .R1QWuf').click();

    cy.get('#_wDJmacLHDqyc4-EP0fKPyA4_50').click();

})