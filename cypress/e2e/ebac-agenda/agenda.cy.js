/// <reference types="cypress" />

describe('Testes para incluir um contato', () => {
    const contato = {
        nome: 'Marcos Viana',
        telefone: '00987654321',
        email: 'marcos@teste.com'
    }
    const contato2 = {
        nome: 'Marcos Alberto',
        telefone: '00123456789',
        email: 'marcos.alberto@teste.com'
    }
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    

    it('Deve adicionar um contato', () => {
        cy.get('.sc-gLDzan > input[type="text"]').type(contato.nome)
        cy.get('.sc-gLDzan > input[type="email"]').type(contato.email)
        cy.get('.sc-gLDzan > input[type="tel"]').type(contato.telefone+'{enter}')
    })

    it('Deve alterar o contato', () => {
        cy.get('.sc-beqWaB button.edit').last().click()

        cy.get('.sc-gLDzan > input[type="text"]').clear()
        cy.get('.sc-gLDzan > input[type="text"]').type(contato2.nome)

        cy.get('.sc-gLDzan > input[type="email"]').clear()
        cy.get('.sc-gLDzan > input[type="email"]').type(contato2.email)

        cy.get('.sc-gLDzan > input[type="tel"]').clear()
        cy.get('.sc-gLDzan > input[type="tel"]').type(contato2.telefone+'{enter}')
    })

        it('Deve remover o contato', () => {
        cy.get('.sc-beqWaB button.delete').last().click()
    })
})