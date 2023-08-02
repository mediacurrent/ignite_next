import Button from '.'

describe('Button', () => {
  it('should render the Primary Button', () => {
    cy.mount(<Button buttonText="Primary Button" />)
    cy.get("[data-cy='button']")
      .should('exist')
      .should('be.visible')
      .contains('Primary Button')
  })

  it('should render the Secondary Button', () => {
    cy.mount(<Button buttonText="Secondary Button" primary={false} />)
    cy.get("[data-cy='button']")
      .should('exist')
      .should('be.visible')
      .contains('Secondary Button')
  })
})
