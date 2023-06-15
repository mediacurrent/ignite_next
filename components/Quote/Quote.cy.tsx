import Quote from '.'

describe('Quote', () => {
  it('should render the TextBlock', () => {
    cy.mount(
      <Quote
        author="Peggy Maher"
        authorPosition="SVP, Direct to Consumer at Guardian Life Insurance"
        logo="https://via.placeholder.com/640x480.png"
        quoteImage="https://via.placeholder.com/640x480.png"
        text="Mediacurrent provided a range of high caliber services including
          design, UX, development, and digital strategy that are helping us
          pivot and transform the insurance purchasing experience."
      />
    )
    cy.get("[data-cy='logo']").should('exist').should('be.visible')
    cy.get("[data-cy='open-quote']").should('exist').should('be.visible')
    cy.get("[data-cy='closed-quote']").should('exist').should('be.visible')
    cy.get("[data-cy='quote-image']").should('exist').should('be.visible')
    cy.get("[data-cy='author']").should('exist').contains('Peggy Maher')
    cy.get("[data-cy='author-position']").should('exist').should('be.visible')
  })
})
