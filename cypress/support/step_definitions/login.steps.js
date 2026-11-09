const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que estou na página de login', () => {
    cy.visit('http://localhost:3000/login.html');

    // Valida carregamento da página
    cy.get('#email').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('#login-btn').should('be.visible');
});

When('informo credenciais válidas', () => {
    cy.get('#email').clear().type('admin@biblioteca.com');
    cy.get('#password').clear().type('admin123');
});

When('informo credenciais inválidas', () => {
    cy.get('#email').clear().type('usuario@teste.com');
    cy.get('#password').clear().type('senhaerrada');
});

When('clico no botão entrar', () => {
    cy.get('#login-btn').click();
});

Then('devo acessar a área administrativa', () => {

    // Valida mudança de página
    cy.url().should('include', 'admin');

    // Valida que realmente chegou na área administrativa
    cy.get('body').should('be.visible');

    // Opcional caso exista algum título na página:
    // cy.contains('Administração').should('be.visible');
});

Then('devo visualizar uma mensagem de erro', () => {

    cy.get('body').then(($body) => {

        const textoPagina = $body.text().toLowerCase();

        expect(
            textoPagina.includes('erro') ||
            textoPagina.includes('inválido') ||
            textoPagina.includes('invalid') ||
            textoPagina.includes('credenciais')
        ).to.be.true;

    });

});