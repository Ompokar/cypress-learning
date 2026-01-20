/// <reference types="cypress"/>

it('Write File Using Fixtures', function () {

    cy.writeFile('sample.txt','Hello my name is Om pokar\n');

    cy.writeFile('sample.txt','I am Currently working as QA', {flag:'a+'})

})