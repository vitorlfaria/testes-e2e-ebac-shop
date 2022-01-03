/// <reference types="cypress" />
import { cep, cidade, complemento, email, empresa, endereco, estado, nome, notas, pais, sobrenome, telefone } from '../fixtures/faker'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addProduto('Abominable Hoodie', 'S', 'Green', '1')
        cy.addProduto('Aero Daily Fitness Tee', 'S', 'Black', '3')
        cy.addProduto('Aether Gym Pant', '34', 'Brown', '2')
        cy.addProduto('Atlas Fitness Tank', 'M', 'Blue', '4')
        cy.handleCheckout(
            nome,
            sobrenome,
            empresa,
            pais,
            endereco,
            complemento,
            cidade,
            estado,
            cep,
            telefone,
            email,
            notas
        )
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });


})