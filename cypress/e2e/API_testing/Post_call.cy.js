describe("Http Request",() =>{

    it('Appoach 1 -- Hard Coded json object', () =>{

        const requestbody=
        {
            userId: 1,
            //id: 1,
            title: "This is test",
            body: "Tested by me"
        }

    cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestbody            
        })
        .then((Response) =>{
            expect(Response.status).to.eq(201)
            expect(Response.body.userId).to.eq(1)
            expect(Response.body.id).to.eq(101)
            expect(Response.body.title).to.eq('This is test')
            expect(Response.body.body).to.eq('Tested by me')
        })
    })
})