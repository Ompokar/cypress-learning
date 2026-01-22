describe("Http Request",() =>{

    it('Appoach 3 -- fixture json object', () =>{

        cy.fixture('data_of_API.json').then((data) =>{
            const requestBody=data;    

    cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestBody           
        })
    
        .then((Response) =>{
            expect(Response.status).to.eq(201)
            expect(Response.body.userId).to.eq(requestBody.userId)
            expect(Response.body.id).to.eq(101)
            expect(Response.body.title).to.eq(requestBody.title)
            expect(Response.body.body).to.eq(requestBody.body)

            })
        })
    })
})