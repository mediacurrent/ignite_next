import SingleCard from '.'

describe('Quote', () => {
  it('should render the Single Card', () => {
    cy.mount(
      <SingleCard
        img="https://storybook.ignite.build/images/card.webp"
        badges={[{ text: 'New feature' }, { text: 'Announcement' }]}
        heading="Phasellus auctor, turpis"
        description={`This copy is optional, if nothing is entered nothing will display. Facit
        nulla in vulputate vulputate aliquam. Commodo esse habent tation nam.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci
        lacus.`}
        buttons={[
          {
            text: 'Link 1'
          },
          {
            text: 'Link 2',
            primary: false
          }
        ]}
      />
    )
    cy.get("[data-cy='image']").should('exist').should('be.visible')
    cy.get("[data-cy='badge']").should('exist').should('be.visible')
    cy.get("[data-cy='heading']").should('exist').should('be.visible')
    cy.get("[data-cy='description']").should('exist').should('be.visible')
    cy.get("[data-cy='button']").should('exist').should('be.visible')
  })
})
