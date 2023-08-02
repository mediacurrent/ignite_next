import Spacing from '.'

describe('Spacing', () => {
  it('should render the Spacing', () => {
    cy.mount(
      <Spacing
        data={[
          {
            modifier: 'pb-1 m-2 bg-primary shadow opacity-25',
            text: '1'
          }
        ]}
      />
    )
    cy.get("[data-cy='spacing']").should('exist').should('be.visible')
  })
})
