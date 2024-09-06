
describe("pimTest", () => {

    beforeEach


    it("Test1 - Cadastrar 'Employee' com sucesso", () =>{
        cy.fixture('usuario').then((usuario) => {
            cy.fluxoLogin(usuario)
        })
    })

})