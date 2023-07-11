import Image from '.'

describe('Image', () => {
  it('should render the Image', () => {
    cy.mount(<Image src="https://via.placeholder.com/640x480.png" />)
    cy.get("[data-cy='image']").should('exist').should('be.visible')
  })
})
