var faker = require('faker')
faker.locale = 'pt_BR'

let nome = faker.name.firstName()
let sobrenome = faker.name.lastName()
let empresa = faker.company.companyName()
let pais = 'Brasil'
let endereco = faker.address.streetAddress()
let complemento = faker.address.secondaryAddress()
let cidade = faker.address.city()
let estado = faker.address.state()
let cep = faker.address.zipCode()
let telefone = faker.phone.phoneNumber()
let email = faker.internet.email(nome, sobrenome)
let notas = faker.lorem.paragraph()

class Pedido {

    pedidoCompleto(){
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
    }

}

export default new Pedido()