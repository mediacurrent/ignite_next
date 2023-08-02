import Badge from 'react-bootstrap/Badge'

const BadgeComponent = ({ text }: { text: string }) => (
  <Badge
    data-cy="badge-text"
    className="rounded-pill p-1 px-2 fs-7 fw-semibold text-bg-primary"
  >
    {text}
  </Badge>
)

export default BadgeComponent
