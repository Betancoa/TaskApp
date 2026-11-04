describe('Validación de vulnerabilidad XSS', () => {

  it('Debe evidenciar la interpretación de HTML ingresado por el usuario', () => {

    cy.visit('http://localhost:3000');

    // Login
    cy.get('#email').type('admin@test.com');
    cy.get('#password').type('123');
    cy.contains('button', 'Ingresar').click();

    // Crear tarea con HTML
    cy.get('#taskTitle').type('<h1>TAREA MALICIOSA</h1>');
    cy.contains('button', 'Crear tarea').click();

    // Verificar que NO existe un elemento H1 renderizado (mitigación XSS)
    cy.get('#taskList h1')
      .should('not.exist');

    // Verificar que el contenido se renderiza exactamente como texto plano
    cy.get('#taskList')
      .should('contain.text', '<h1>TAREA MALICIOSA</h1>');

  });

});