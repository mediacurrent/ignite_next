import Breadcrumb from '.'

describe('Quote', () => {
  it('should render the Quote', () => {
    cy.mount(
      <Breadcrumb
        breadcrumb={[
          {
            text: 'Home',
            url: '#'
          },
          {
            text: 'Parent Page',
            url: '#'
          },
          {
            active: true,
            text: 'Current Page',
            url: ''
          }
        ]}
      />
    )
    cy.get("[data-cy='breadcrumb-item']").should('exist').should('be.visible')
    cy.get("[data-cy='breadcrumb-active']").should('exist').should('be.visible')
  })
})
