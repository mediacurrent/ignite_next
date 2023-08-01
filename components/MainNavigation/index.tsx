import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ButtonComponent from '../Button'
import '@/styles/components/mainNavigation.scss'

interface MainNavigationTypes {
  modifier?: string
}

const MainNavigation = ({ modifier, linkModifier, siteLogo, items }) => (
  <Navbar expand="lg" className={`pt-3 pb-3 ${modifier}`}>
    <Container fluid>
      <Navbar.Brand href="/">
        <img
          src="https://storybook.ignite.build/images/logo.svg"
          className="logo "
          alt="Site logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-center mt-3 mt-lg-0 mr-auto gap-2 gap-lg-7"
      >
        {
          items.map(({ title, url, is_expanded, below, in_active_trail }) => {
            if (is_expanded) {
              return (
                <NavDropdown title={title} id={in_active_trail ? 'basic-nav-dropdown-active' : 'basic-nav-dropdown'}>
                  {
                    below.map(({ title: tl, url: ur, in_active_trail: active }) => (
                      <NavDropdown.Item href={ur} className={active ? `active active`: `${linkModifier}`}>{tl}</NavDropdown.Item>
                    ))
                  }
                </NavDropdown>
              )
            }
            return (
              <Nav.Link href={url}>{title}</Nav.Link>
            )
          })
        }
      </Navbar.Collapse>
      <div className="justify-content-end d-none d-lg-block">
        <ButtonComponent buttonText="Contact Us" href='/contact-us' />
      </div>
    </Container>
  </Navbar>
)

export default MainNavigation
