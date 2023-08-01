/* eslint-disable @next/next/no-img-element */
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ButtonComponent from '../Button'
import '@/styles/components/mainNavigation.scss'

interface MainNavigationTypes {
  modifier?: string
  linkModifier?: string
  items: {
    title: string
    url: string
    is_expanded?: boolean
    in_active_trail?: boolean
    below?: {
      title: string
      url: string
      active?: boolean
      in_active_trail?: boolean
    }[]
  }[]
}

const MainNavigation = ({
  modifier,
  items,
  linkModifier
}: MainNavigationTypes) => (
  <Navbar expand="lg" className={`pt-3 pb-3 ${modifier}`}>
    <Container fluid>
      <Navbar.Brand href="/">
        <img
          src="https://storybook.ignite.build/images/logo.svg"
          className="logo "
          alt="Site logo"
          data-cy="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-center mt-3 mt-lg-0 mr-auto gap-2 gap-lg-7"
        data-cy="nav-bar-collapse"
      >
        {items.map(
          (
            { title, url, is_expanded, below, in_active_trail },
            idx: number
          ) => {
            if (is_expanded) {
              return (
                <NavDropdown
                  title={title}
                  id={
                    in_active_trail
                      ? 'basic-nav-dropdown-active'
                      : 'basic-nav-dropdown'
                  }
                  data-cy="nav-bar-dropdown"
                  key={idx}
                >
                  {below.map(
                    (
                      { title: tl, url: ur, in_active_trail: active },
                      index: number
                    ) => (
                      <NavDropdown.Item
                        href={ur}
                        className={active ? `active active` : `${linkModifier}`}
                        key={index}
                      >
                        {tl}
                      </NavDropdown.Item>
                    )
                  )}
                </NavDropdown>
              )
            }
            return (
              <Nav.Link data-cy="nav-bar-link" href={url} key={idx}>
                {title}
              </Nav.Link>
            )
          }
        )}
      </Navbar.Collapse>
      <ButtonComponent buttonText="Contact Us" href="/contact-us" />
    </Container>
  </Navbar>
)

export default MainNavigation
