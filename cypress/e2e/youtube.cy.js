/// <reference types="cypress"/>

it('youtube search', function(){

    cy.visit('https://www.youtube.com');

    cy.get('[name="search_query"]').type("chai or code");

    cy.get('.ytSearchboxComponentClearButton > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();

    cy.wait(2000);
    
    cy.get(':nth-child(3) > #endpoint > #icon > .yt-icon-shape > div').click();

    cy.get(':nth-child(4) > #endpoint > #icon > .yt-icon-shape > div').click();

})