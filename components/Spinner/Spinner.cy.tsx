import Spinner from '.'

describe('Spinner', () => {
  it('should render the Spinner', () => {
    cy.mount(<Spinner variant="primary" />)
    cy.get("[data-cy='spinner']").should('exist').should('be.visible')
  })
})
