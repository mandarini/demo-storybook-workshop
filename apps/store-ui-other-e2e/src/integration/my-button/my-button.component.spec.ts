describe('store-ui-other', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mybuttoncomponent--primary&args=bgcolor;btntext;disabled;'));
  it('should render the component', () => {
    cy.get('bg-hoard-my-button').should('exist');
  });
});