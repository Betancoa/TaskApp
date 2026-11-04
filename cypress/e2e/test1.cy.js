it('Debe mostrar la tarea creada', () => {
  cy.visit('http://localhost:3000');

  cy.get('#email').type('admin@test.com');
  cy.get('#password').type('123');

  cy.contains('Ingresar').click();

  cy.get('#taskTitle').type('Comprar pan');
  cy.contains('Crear tarea').click();

  // ❌ Error provocado: buscará 'Comprar leche', esperará 4 segundos y fallará
  cy.contains('Comprar leche').should('exist');
});