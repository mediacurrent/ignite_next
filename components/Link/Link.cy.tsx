import Link from '.'

describe('Link', () => {
  it('should render the Link', () => {
    cy.mount(<Link text="Primary link" type="primary" />)
    cy.get("[data-cy='link']").should('exist').should('be.visible')
  })
})
