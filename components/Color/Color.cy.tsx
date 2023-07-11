import Color from '.'

const data = [
  {
    bg: 'bg-primary',
    colorText: 'text-white',
    text: 'Primary'
  },
  {
    bg: 'bg-secondary',
    colorText: 'text-white',
    text: 'Secondary'
  },
  {
    bg: 'bg-success',
    colorText: 'text-white',
    text: 'Success'
  },
  {
    bg: 'bg-danger',
    colorText: 'text-white',
    text: 'Danger'
  },
  {
    bg: 'bg-warning',
    colorText: 'text-dark',
    text: 'Warning'
  },
  {
    bg: 'bg-info',
    colorText: 'text-dark',
    text: 'Info'
  },
  {
    bg: 'bg-light',
    colorText: 'text-dark',
    text: 'Light'
  },
  {
    bg: 'bg-dark',
    colorText: 'text-white',
    text: 'Dark'
  }
]

describe('Color', () => {
  it('should render the Color', () => {
    cy.mount(<Color data={data} />)
    cy.get("[data-cy='color']").should('exist').should('be.visible')
  })
})
