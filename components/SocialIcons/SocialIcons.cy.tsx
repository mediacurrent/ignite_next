import SocialIcons from '.'

describe('SocialIcons', () => {
  it('should render the SocialIcons', () => {
    cy.mount(
      <SocialIcons
        icons={[
          {
            ariaLabel: 'Visit our Facebook page',
            icon: (
              <svg
                fill="none"
                height="21"
                viewBox="0 0 12 21"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6484 11.75L11.1953 8.15625H7.71875V5.8125C7.71875 4.79688 8.1875 3.85938 9.75 3.85938H11.3516V0.773438C11.3516 0.773438 9.90625 0.5 8.53906 0.5C5.6875 0.5 3.8125 2.25781 3.8125 5.38281V8.15625H0.609375V11.75H3.8125V20.5H7.71875V11.75H10.6484Z"
                  fill="#0D0F16"
                />
              </svg>
            ),
            modifier: 'social-icon-dark',
            name: 'Facebook page',
            url: 'https://www.facebook.com/'
          }
        ]}
      />
    )
    cy.get("[data-cy='social-icons']").should('exist').should('be.visible')
  })
})
