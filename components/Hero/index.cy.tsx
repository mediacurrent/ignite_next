import React from 'react'
import Hero from './index'
import { BottomHero } from './components/BottomHero'
import { LeftHero } from './components/LeftHero'
import { RightHero } from './components/RightHero'
import { TopHero } from './components/TopHero'

describe('<Hero />', () => {
  describe('Primary Hero', () => {
    it('should render Primary Hero', () => {
      cy.mount(<Hero
        buttonText="Learn more &ensp;"
        headingText="Shortcut your design and development"
        img="https://via.placeholder.com/1024x576.png"
        paragraphText="<p>
          Quickly design and customize responsive mobile-first sites with
          Bootstrap.
          </p>"
        position="primary"
        title="Ignite"
      />)
      cy.get("[data-cy='image'").should('exist')
      cy.get("[data-cy='title']")
      .should('exist')
      .contains('Ignite')
      cy.get("[data-cy='heading']")
        .should('exist')
        .contains('Shortcut your design and development')
      cy.get("[data-cy='paragraph']")
        .should('exist')
        .contains('Quickly design and customize responsive mobile-first sites with Bootstrap.')
      cy.get("[data-cy='button']")
        .should('exist')
        .contains('Learn more')
    })
  })

  describe('Bottom Hero', () => {
    it('should render Bottom Hero', () => {
      cy.mount(<BottomHero
        buttonText="Learn more &ensp;"
        headingText="<strong>Shortcut</strong> your <strong>design</strong> and
          <strong>development</strong> with our website starter kit"
        img="https://via.placeholder.com/1024x576.png"
        position="bottom"
        title="Ignite"
      />)
      cy.get("[data-cy='image'").should('exist')
      cy.get("[data-cy='title']")
      .should('exist')
      .contains('Ignite')
      cy.get("[data-cy='heading']")
        .should('exist')
        .contains('Shortcut your design and development with our website starter kit')
      cy.get("[data-cy='button']")
        .should('exist')
        .contains('Learn more')
    })
  })

  describe('Left Hero', () => {
    it('should render Left Hero', () => {
      cy.mount(<LeftHero
        buttonText="See feature list &ensp;"
        headingText=" We got your <strong>website</strong> and
          <strong>design system</strong> project covered"
        img="https://via.placeholder.com/1024x576.png"
        paragraphText="<p>
        Quickly design and customize responsive mobile-first sites with
        Bootstrap.
        </p>"
        position="left"
        title="Features"
      />)
      cy.get("[data-cy='image'").should('exist')
      cy.get("[data-cy='title']")
      .should('exist')
      .contains('Features')
      cy.get("[data-cy='heading']")
        .should('exist')
        .contains('We got your website and design system project covered')
      cy.get("[data-cy='paragraph']").children()
        .should('exist')
        .contains('Quickly design and customize responsive mobile-first sites with Bootstrap.')
      cy.get("[data-cy='button']")
        .should('exist')
        .contains('See feature list')
    })
  })

  describe('Right Hero', () => {
    it('should render Right Hero', () => {
      cy.mount(<RightHero
        buttonText="See feature list &ensp;"
        headingText="We got your <strong>website</strong> and
          <strong>design system</strong> project covered"
        img="https://via.placeholder.com/1024x576.png"
        paragraphText="<p>
        Quickly design and customize responsive mobile-first sites with
        Bootstrap.
        </p>"
        position="right"
        title="Features"
      />)
      cy.get("[data-cy='image'").should('exist')
      cy.get("[data-cy='title']")
      .should('exist')
      .contains('Features')
      cy.get("[data-cy='heading']")
        .should('exist')
        .contains('We got your website and design system project covered')
      cy.get("[data-cy='paragraph']")
        .should('exist')
        .contains('Quickly design and customize responsive mobile-first sites with Bootstrap.')
      cy.get("[data-cy='button']")
        .should('exist')
        .contains('See feature list')
    })
  })

  describe('TopHero', () => {
    it('should render Top Hero', () => {
      cy.mount(<TopHero
        buttonText="Learn more &ensp;"
        headingText="<strong>Shortcut</strong> your <strong>design</strong> and <strong>development</strong> with our website starter kit"
        img="https://via.placeholder.com/1024x576.png"
        paragraphText="<p>
        Quickly design and customize responsive mobile-first sites with
        Bootstrap.
        </p>"
        position="top"
        title="Ignite"
      />)
      cy.get("[data-cy='image'").should('exist')
      cy.get("[data-cy='title']")
      .should('exist')
      .contains('Ignite')
      cy.get("[data-cy='heading']")
        .should('exist')
        .contains('Shortcut your design and development with our website starter kit')
      cy.get("[data-cy='paragraph']")
        .should('exist')
        .contains('Quickly design and customize responsive mobile-first sites with Bootstrap.')
      cy.get("[data-cy='button']")
        .should('exist')
        .contains('Learn more')
    })
  })
})
