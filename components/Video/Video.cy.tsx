import Video from '.'

describe('Video', () => {
  it('should render the Link', () => {
    cy.mount(
      <Video
        videoSrc={
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // @ts-ignore - frameborder does not exist on DetailedHTMLProps
            frameborder="0"
            height="315"
            src="https://www.youtube.com/embed/i4jiTZ76XPk"
            title="YouTube video player"
            width="560"
            allowfullscreen
          />
        }
      />
    )
    cy.get("[data-cy='video']").should('exist').should('be.visible')
  })
})
