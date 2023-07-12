import Shadow from '.'

describe('Shadow', () => {
  it('should render the No Shadow', () => {
    cy.mount(<Shadow noShadow text="No Shadow" />)
    cy.get("[data-cy='no-shadow']").should('exist').should('be.visible')
  })

  it('should render the Shadow', () => {
    cy.mount(<Shadow text="Regular Shadow" />)
    cy.get("[data-cy='show-shadow']").should('exist').should('be.visible')
  })
})
