
describe("pimTest", () => {

    beforeEach(() => {
        cy.fixture('usuario').then((usuario) => {
            cy.fluxoLogin(usuario)
        })

        cy.PimPage()
      })

    it("Test1 - Cadastrar 'Employee' com sucesso", () =>{
        cy.fixture('pim').then((user) => {
            cy.criarUsuarioValido(user)
        })
    })

    it.only("Test1 - Cadastrar 'Employee' com nome e sobrenome em branco", () =>{
        cy.fixture('pim').then((user) => {
            cy.criarUsuarioEmBranco(user)
        })
    })

})