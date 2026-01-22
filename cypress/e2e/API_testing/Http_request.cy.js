describe("Http Request",() =>{

    it('GET Call', () =>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts')
        .its('status')
        .should('eq',200);
    })

    it('POST Call', ()=> {

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {                
                     userId: 1,
                     title: "this is the post call",
                     body: "this is the body of the post call"
            }
        })
    .its('status')
    .should('eq',201);
    })

    it('PUT Call',() =>{

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {                
                     userId: 1,
                     title: "this is the post call",
                     body: "this is the body of the post call"
            }
        })
        .its('status')
        .should('eq',200);
    })

    it('Delete Call',() =>{

        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {                
                     userId: 1,
                     title: "this is the post call",
                     body: "this is the body of the post call"
            }
        })
        .its('status')
        .should('eq',200);
    })
})
