describe("login", () => {
    it("Test1 - Login com dados válidos", () =>{
        cy.fixture('usuario', (usuario) => {
            cy.fluxoLogin(usuario)
        })
    })
})