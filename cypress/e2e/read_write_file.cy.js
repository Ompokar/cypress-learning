/// <reference types="cypress"/>

before(function(){

    cy.fixture('example.json').as('test_data')

})

it('Read files using Fixtures', function(){

    cy.fixture('example').then((Text) => {
        cy.log(Text.name) 
        cy.log(Text.email)
        cy.log(Text.body)
    })

    cy.log(this.test_data.name)
    cy.log(this.test_data.email)
    cy.log(this.test_data.ody)

})

it('Read file using Readfile()',function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
    })
})