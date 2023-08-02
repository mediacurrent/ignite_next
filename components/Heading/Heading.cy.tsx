import Heading from '.'

describe('Heading', () => {
  it('should render the Heading', () => {
    cy.mount(<Heading text="Title Lorem Ipsum Dolor " />)
    cy.get("[data-cy='heading-text']")
      .should('exist')
      .should('be.visible')
      .contains('Title Lorem Ipsum Dolor ')
  })
})
