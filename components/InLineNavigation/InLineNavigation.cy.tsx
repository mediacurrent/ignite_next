import InLineNavigation from '.'

describe('Quote', () => {
  it('should render the Quote', () => {
    cy.mount(
      <InLineNavigation
        items={[
          {
            text: 'Link 1',
            url: '#'
          },
          {
            text: 'Link 2',
            url: '#'
          },
          {
            text: 'Link 3',
            url: '#'
          }
        ]}
      />
    )
    cy.get("[data-cy='drop-container']").should('exist').should('be.visible')
    cy.get("[data-cy='drop-toggle']")
      .should('exist')
      .should('be.visible')
      .click()
    cy.get("[data-cy='drop-menu']").should('exist').should('be.visible')
    cy.get("[data-cy='drop-item']").should('exist').should('be.visible')
  })
})
