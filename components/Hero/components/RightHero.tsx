import { HeroTypes } from '@/types/Hero'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'
import { Col, Image } from 'react-bootstrap'

export const RightHero = ({
  img,
  title = '',
  headingText = '',
  paragraphText = '',
  buttonText = ''
}: HeroTypes) => (
  <div className="hero text-dark border-0">
    <div className="row flex-lg-row-reverse align-items-center">
      <Col lg={6}>
        <Image
          data-cy="image"
          src={img}
          className="card-img"
          rounded
          fluid
          alt="test image"
        />
      </Col>
      <Col lg={6} className="pe-lg-10">
        <div className="text-uppercase mb-2 mt-3 mt-lg-0 fs-7">
          <small>
            <span data-cy="title" dangerouslySetInnerHTML={{ __html: title }} />
          </small>
        </div>
        <h2
          className="heading display-3 fw-bold text-dark"
          aria-label="No value"
        >
          <span
            data-cy="heading"
            dangerouslySetInnerHTML={{ __html: headingText }}
          />
        </h2>
        <div className="rich-text mb-3">
          <div
            data-cy="paragraph"
            dangerouslySetInnerHTML={{ __html: paragraphText }}
          />
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
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
        </div>
      </Col>
    </div>
  </div>
)
