import Badge from '.'

describe('Quote', () => {
  it('should render the TextBlock', () => {
    cy.mount(<Badge text="New Feature" />)
    cy.get("[data-cy='badge-text']")
      .should('exist')
      .should('be.visible')
      .contains('New Feature')
  })
})
