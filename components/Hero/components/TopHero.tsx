import { HeroTypes } from '@/types/Hero'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import { Col, Image, Card } from 'react-bootstrap'

export const TopHero = ({
  img,
  title = '',
  headingText = '',
  paragraphText = '',
  buttonText = ''
}: HeroTypes) => (
  <Card text="dark" className="hero border-0 image_top">
    <div className="pb-3 pb-lg-8">
      <Image
        data-cy="image"
        src={img}
        className="card-img"
        rounded
        fluid
        alt="test image"
      />
    </div>
    <div className=" d-flex align-items-center justify-content-center text-align-center">
      <Col md={8} xxxl={6}>
        <div className="text-uppercase mb-2 fs-7">
          <small>
            <span data-cy="title" dangerouslySetInnerHTML={{ __html: title }} />
          </small>
        </div>
        <h2 className="heading display-3 fw-bold" aria-label="No value">
          <span
            data-cy="heading"
            dangerouslySetInnerHTML={{ __html: headingText }}
          />
        </h2>
        <div className="rich-text text-dark mb-3">
          <span
            data-cy="paragraph"
            dangerouslySetInnerHTML={{ __html: paragraphText }}
          />
        </div>
        <a
          href="#"
          className="btn btn-primary text-white"
          role="button"
          data-cy="button"
        >
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: buttonText }} />
            <Icon path={mdiArrowRight} size={1} />
          </div>
        </a>
      </Col>
    </div>
  </Card>
)
