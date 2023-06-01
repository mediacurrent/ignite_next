import { HeroTypes } from "@/types/Hero";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { Col, Image, Card } from "react-bootstrap";

export const HeroComponent = ({
  img,
  title = "",
  headingText = "",
  paragraphText = "",
  buttonText = "",
}: HeroTypes) => (
  <Card bg="dark" text="light" className="hero border-0 overlay rounded">
    <>
      <Image src={img} className="card-img" rounded fluid alt="test image" data-cy='image' />
    </>
    <Card.ImgOverlay className="d-flex align-items-center justify-content-center text-align-center">
      <Col lg={8}>
        <div className="text-uppercase mb-2 fs-7">
          <small>
            <span data-cy='title' dangerouslySetInnerHTML={{ __html: title }} />
          </small>
        </div>
        <h2 className="heading display-3 fw-bold" aria-label="No value">
          <span data-cy='heading' dangerouslySetInnerHTML={{ __html: headingText }} />
        </h2>
        <div className="rich-text mb-3 fs-5">
          <span data-cy='paragraph' dangerouslySetInnerHTML={{ __html: paragraphText }} />
        </div>
        <a href="#" className="btn btn-primary" role="button" data-cy='button'>
          <div className="d-flex">
            <span dangerouslySetInnerHTML={{ __html: buttonText }} />
            <Icon path={mdiArrowRight} size={1} />
          </div>
        </a>
      </Col>
    </Card.ImgOverlay>
  </Card>
);
