import Menu from '.'

describe('Menu', () => {
  it('should render the Menu', () => {
    cy.mount(
      <Menu
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
        modifier=""
      />
    )
    cy.get("[data-cy='menu-container']").should('exist').should('be.visible')
    cy.get("[data-cy='menu-item']").should('exist').should('be.visible')
  })
})
