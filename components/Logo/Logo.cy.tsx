import Logo from '.'

describe('Logo', () => {
  it('should render the Logo', () => {
    cy.mount(
      <Logo
        src="https://via.placeholder.com/640x480.png"
        modifier="col-3 p-3"
      />
    )
    cy.get("[data-cy='logo']").should('exist').should('be.visible')
  })
})
