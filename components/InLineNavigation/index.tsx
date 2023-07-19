import Dropdown from 'react-bootstrap/Dropdown'

interface InLineNavigationTypes {
  items: {
    text: string
    url: string
  }[]
}

const InLineNavigation = ({ items }: InLineNavigationTypes) => (
  <Dropdown data-cy="drop-container">
    <Dropdown.Toggle
      data-cy="drop-toggle"
      variant="primary"
      id="dropdown-basic"
    >
      Inline navigation
    </Dropdown.Toggle>
    <Dropdown.Menu data-cy="drop-menu">
      {items.map(({ text, url }) => (
        <Dropdown.Item href={url} data-cy="drop-item">
          {text}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
)

export default InLineNavigation
