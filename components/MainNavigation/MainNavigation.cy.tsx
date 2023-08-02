import MainNavigation from '.'

describe('MainNavigation', () => {
  it('should render the MainNavigation', () => {
    cy.mount(
      <MainNavigation
        items={[
          {
            below: [
              {
                title: 'Vestibulum ac diam',
                url: '#'
              },
              {
                active: true,
                title: 'Mauris blandit aliquet',
                url: '#'
              },
              {
                title: 'Pellentesque in',
                url: '#'
              }
            ],
            is_expanded: true,
            title: 'Menu Item 1',
            url: '#'
          },
          {
            below: [
              {
                title: 'Vestibulum ac diam',
                url: '#'
              },
              {
                in_active_trail: true,
                title: 'Mauris blandit aliquet',
                url: '#'
              }
            ],
            in_active_trail: true,
            is_expanded: true,
            title: 'Menu Item 2',
            url: '#'
          },
          {
            title: 'Menu Item 3',
            url: '#'
          }
        ]}
        linkModifier="text-dark"
        modifier="navbar-light bg-white border-bottom"
        siteLogo="./images/logo.svg"
      />
    )
    cy.get("[data-cy='logo']").should('exist').should('be.visible')
    cy.get("[data-cy='nav-bar-collapse']")
      .should('exist')
      .should('be.visible')
      .click()
    cy.get("[data-cy='nav-bar-dropdown']").should('exist').should('be.visible')
    cy.get("[data-cy='nav-bar-link']").should('exist').should('be.visible')
    cy.get("[data-cy='button']").should('exist').should('be.visible')
  })
})
