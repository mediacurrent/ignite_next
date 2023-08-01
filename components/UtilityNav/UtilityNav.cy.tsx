import UtilityNav from '.'

describe('Quote', () => {
  it('should render the Quote', () => {
    cy.mount(
      <UtilityNav
        items={[
          {
            href: '#',
            text: 'Link 1'
          },
          {
            href: '#',
            text: 'Link 2'
          },
          {
            href: '#',
            text: 'Link 3'
          }
        ]}
      />
    )
    cy.get("[data-cy='utility-nav-container']")
      .should('exist')
      .should('be.visible')
    cy.get("[data-cy='utility-nav-item']").should('exist').should('be.visible')
    cy.get("[data-cy='utility-nav-link']").should('exist').should('be.visible')
  })
})
