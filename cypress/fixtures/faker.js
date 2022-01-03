var faker = require('faker')
faker.locale = 'pt_BR'

export var nome = faker.name.firstName()
export var sobrenome = faker.name.lastName()
export var empresa = faker.company.companyName()
export var pais = 'Brasil'
export var endereco = faker.address.streetAddress()
export var complemento = faker.address.secondaryAddress()
export var cidade = faker.address.city()
export var estado = faker.address.state()
export var cep = faker.address.zipCode()
export var telefone = faker.phone.phoneNumber()
export var email = faker.internet.email(nome, sobrenome)
export var notas = faker.lorem.paragraph()