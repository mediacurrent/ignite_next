import Modal from '.'

describe('Modal', () => {
  it('should render the Modal', () => {
    cy.mount(
      <Modal
        body="Modal body text goes here."
        buttonText="Launch demo modal"
        closeButtonName="Close"
        modalName="example"
        saveButton={{
          name: 'Save Changes',
          redirects: 'http://drupal.org/'
        }}
        title="Modal Title"
      />
    )
    cy.get("[data-cy='modal-button']")
      .should('exist')
      .should('be.visible')
      .click()
    cy.get("[data-cy='modal']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-content']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-header']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-title']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-body']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-footer']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-close-btn']").should('exist').should('be.visible')
    cy.get("[data-cy='modal-save-btn']").should('exist').should('be.visible')
  })
})
