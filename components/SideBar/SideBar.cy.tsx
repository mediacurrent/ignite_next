import SideBar from '.'

describe('Quote', () => {
  it('should render the Quote', () => {
    cy.mount(
      <SideBar
        tags={[
          {
            header: 'Services',
            items: [
              {
                href: '#',
                text: 'The current link item'
              },
              {
                href: '#',
                text: 'A second link item'
              },
              {
                href: '#',
                text: 'A third link item'
              },
              {
                href: '#',
                text: 'A fourth link item'
              },
              {
                disabled: true,
                href: '#',
                text: 'A disabled link item'
              }
            ]
          }
        ]}
      />
    )
    cy.get("[data-cy='sidebar-header']").should('exist').should('be.visible')
    cy.get("[data-cy='sidebar-item']").should('exist').should('be.visible')
  })
})
