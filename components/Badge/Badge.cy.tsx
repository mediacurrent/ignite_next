import Badge from '.'

describe('Badge', () => {
  it('should render the Badge', () => {
    cy.mount(<Badge text="New Feature" />)
    cy.get("[data-cy='badge-text']")
      .should('exist')
      .should('be.visible')
      .contains('New Feature')
  })
})
