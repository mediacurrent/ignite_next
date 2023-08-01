import Nav from 'react-bootstrap/Nav'

interface UtilityNavTypes {
  items: {
    text: string
    href: string
  }[]
}

const UtilityNav = ({ items }: UtilityNavTypes) => (
  <Nav data-cy="utility-nav-container">
    {items.map(({ text, href }, idx: number) => (
      <Nav.Item data-cy="utility-nav-item" key={text + idx}>
        <a href={href} className="nav-link" data-cy="utility-nav-link">
          {text}
        </a>
      </Nav.Item>
    ))}
  </Nav>
)

export default UtilityNav
