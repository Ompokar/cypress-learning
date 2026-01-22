describe("Http Request",() =>{

    it.skip('Appoach 2 -- random json object', () =>{

        const requestbody=
        {
            userId: Math.random().toString(1).substring(1),
            //id: 1,
            title: Math.random().toString(4).substring(3),
            body: Math.random().toString(4).substring(3)
        }

    cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: requestbody            
        })
        .then((Response) =>{
            expect(Response.status).to.eq(201)
            expect(Response.body.userId).to.eq(requestbody.userId)
            expect(Response.body.id).to.eq(101)
            expect(Response.body.title).to.eq(requestbody.title)
            expect(Response.body.body).to.eq(requestbody.body)
        })
    })
})