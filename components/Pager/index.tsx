import Pagination from 'react-bootstrap/Pagination'
import Nav from 'react-bootstrap/Nav'
import '@/styles/components/pager.scss'

interface PagerTypes {
  headingId: string
  items: {
    previous: {
      href: string
      text: string
    }
    next: {
      href: string
      text: string
    }
    pages: {
      href: string
    }[]
  }
}

const Pager = ({ headingId, items: { previous, next, pages } }: PagerTypes) => (
  <Nav className="pager" role="navigation" aria-labelledby={headingId}>
    <h4 id={headingId} className="visually-hidden">
      Pagination
    </h4>
    <Pagination>
      <Pagination.Prev data-cy="pagination-prev" href={previous.href}>
        {previous.text}
      </Pagination.Prev>
      {pages.map(({ href }, idx) => (
        <Pagination.Item data-cy="pagination-item" href={href} key={idx}>
          {idx + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next data-cy="pagination-next" href={next.href}>
        {next.text}
      </Pagination.Next>
    </Pagination>
  </Nav>
)

export default Pager
