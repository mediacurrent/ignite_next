import Pager from '.'

describe('Pager', () => {
  it('should render the Quote', () => {
    cy.mount(
      <Pager
        headingId="styleguide_instance--1"
        items={{
          next: {
            href: '?search=&page=3',
            text: 'Next'
          },
          pages: [
            {
              href: '?search=&page=0'
            },
            {
              href: '?search=&page=1'
            },
            {
              href: '?search=&page=2'
            },
            {
              href: '?search=&page=3'
            },
            {
              href: '?search=&page=4'
            },
            {
              href: '?search=&page=5'
            },
            {
              href: '?search=&page=6'
            },
            {
              href: '?search=&page=7'
            },
            {
              href: '?search=&page=8'
            },
            {
              href: '?search=&page=9'
            },
            {
              href: '?search=&page=10'
            },
            {
              href: '?search=&page=11'
            },
            {
              href: '?search=&page=12'
            }
          ],
          previous: {
            href: '?search=&page=1',
            text: 'Previous'
          }
        }}
      />
    )
    cy.get("[data-cy='pagination-prev']").should('exist').should('be.visible')
    cy.get("[data-cy='pagination-item']").should('exist').should('be.visible')
    cy.get("[data-cy='pagination-next']").should('exist').should('be.visible')
  })
})
