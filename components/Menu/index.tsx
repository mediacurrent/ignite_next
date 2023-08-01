import '@/styles/components/menu.scss'

interface MenuTypes {
  modifier: string
  items: {
    itemModifier?: string
    href: string
    text: string
  }[]
}

const Menu = ({ modifier = '', items }: MenuTypes) => (
  <div className={modifier} data-cy="menu-container">
    <ul className="list-unstyled">
      {items.map(({ itemModifier, href, text }) => (
        <li className={itemModifier} data-cy="menu-item">
          <a href={href} className="text-decoration-none">
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Menu
