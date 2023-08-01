import Accordion from 'react-bootstrap/Accordion'
import '@/styles/components/sideBar.scss'

interface SideBarTypes {
  tags: {
    header: string
    items: {
      text: string
      href: string
      disabled?: boolean
    }[]
  }[]
}

const SideBar = ({ tags }: SideBarTypes) => (
  <>
    <Accordion defaultActiveKey="0">
      {tags.map(({ header, items }, idx: number) => (
        <Accordion.Item eventKey={`${idx}`}>
          <Accordion.Header data-cy="sidebar-header">{header}</Accordion.Header>
          {items.map(({ text, href, disabled = false }) => (
            <Accordion.Body
              as="a"
              className={`list-group-item list-group-item-action ${
                disabled ? 'disabled' : ''
              }`}
              href={href}
              data-cy="sidebar-item"
            >
              {text}
            </Accordion.Body>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  </>
)

export default SideBar
