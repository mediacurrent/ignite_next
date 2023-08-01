import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import Button from '@/components/Button'

import { SingleCardTypes } from '@/types/SingleCard'

const SingleCard = ({
  img,
  badges,
  heading,
  description,
  buttons
}: SingleCardTypes) => (
  <Card className="border-0 col-6">
    <Image
      data-cy="image"
      src={img}
      className="card-img-top"
      alt="test image"
    />

    <div className="card-body p-0 mt-2">
      <ul className="list-inline mb-2">
        {badges.map(({ text }, idx: number) => (
          <li className="list-inline-item" key={idx}>
            <Badge
              className="rounded-pill p-1 px-2 fs-7 fw-semibold text-bg-primary"
              data-cy="badge"
            >
              {text}
            </Badge>
          </li>
        ))}
      </ul>

      <h2 className="heading card-title mb-3" data-cy="heading">
        <a href="#" className="text-decoration-none">
          {heading}
        </a>
      </h2>
      <p
        data-cy="description"
        className="card-text fs-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <ul className="list-inline mb-0">
        {buttons.map(({ text, primary }, index: number) => (
          <li className="list-inline-item" key={text + index}>
            <Button data-cy="button" buttonText={text} primary={primary} />
          </li>
        ))}
      </ul>
    </div>
  </Card>
)

export default SingleCard
