import NewsLetterForm from '.'

describe('Quote', () => {
  it('should render the TextBlock', () => {
    cy.mount(
      <NewsLetterForm
        buttonText="Submit"
        subTitle="Learn how to improve your content editing flow."
        title="Get our tips, straight to your inbox"
      />
    )
    cy.get("[data-cy='title']")
      .should('exist')
      .should('be.visible')
      .contains('Get our tips, straight to your inbox')
    cy.get("[data-cy='sub-title']")
      .should('exist')
      .should('be.visible')
      .contains('Learn how to improve your content editing flow.')
    cy.get("[data-cy='submit']")
      .should('exist')
      .should('be.visible')
      .contains('Submit')
  })
})
