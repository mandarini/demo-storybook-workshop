describe('ngbe', () => {
  beforeEach(() => cy.visit('/iframe.html?id=katerinacomponent--primary&args=title:Hello+ng-be;'));
  it('should render the component', () => {
    cy.get('bg-hoard-katerina').should('exist');
  });
});