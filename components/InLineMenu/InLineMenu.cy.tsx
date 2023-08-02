import InLineMenu from '.'

describe('Quote', () => {
  it('should render the Quote', () => {
    cy.mount(
      <InLineMenu
        items={[
          {
            title: 'Active',
            url: '#'
          },
          {
            title: 'Link',
            url: '#'
          },
          {
            title: 'Link',
            url: '#'
          },
          {
            disabled: true,
            title: 'Disabled'
          }
        ]}
      />
    )
    cy.get("[data-cy='inline-menu-item']").should('exist').should('be.visible')
    cy.get("[data-cy='inline-menu-link']").should('exist').should('be.visible')
  })
})
