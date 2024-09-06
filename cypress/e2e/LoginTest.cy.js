import '../support/e2e'

describe("login", () => {

    

    it("Test1 - Login com dados válidos", () =>{
        cy.fixture('usuario').then((usuario) => {
            cy.fluxoLogin(usuario)
        })
    })

    it("Test2 - Login com dados inválidos", () =>{
        cy.fluxoLoginDadosInvalidos()
    })

    it("Test3 - Login com dados em branco", ()=> {
        cy.fluxoLoginDadosEmBranco()
    })
})