import Nav from 'react-bootstrap/Nav'

interface InLineMenuTypes {
  items: {
    title: string
    url?: string
    active?: boolean
    disabled?: boolean
  }[]
}

const InLineMenu = ({ items }: InLineMenuTypes) => {
  {
    return (
      <Nav justify variant="tabs" defaultActiveKey="link-0">
        {items.map(({ title, url, active, disabled }, idx) => (
          <Nav.Item key={idx} data-cy="inline-menu-item">
            <Nav.Link
              href={url}
              active={active}
              disabled={disabled}
              eventKey={`link-${idx}`}
              data-cy="inline-menu-link"
            >
              {title}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    )
  }
}

export default InLineMenu
