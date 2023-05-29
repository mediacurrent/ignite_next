import { HeroTypes } from "@/types/Hero";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { Col, Image, Card } from "react-bootstrap";

export const BottomHero = ({
  img,
  title = "",
  headingText = "",
  buttonText = "",
}: HeroTypes) => (
  <Card text="dark" className="hero border-0 text-dark border-0 image_bottom">
    <div className=" d-flex align-items-center justify-content-center text-align-center">
      <Col md={8} xxxl={6}>
        <div className="text-uppercase mb-2 fs-7">
          <span data-cy='title' dangerouslySetInnerHTML={{ __html: title }} />
        </div>
        <h2
          className="heading display-3 fw-bold text-dark mb-4"
          aria-label="No value"
        >
          <span data-cy='heading' dangerouslySetInnerHTML={{ __html: headingText }} />
        </h2>
        <a href="#" className="btn btn-primary text-white" role="button" data-cy='button'>
          <div className="d-flex">
            <div dangerouslySetInnerHTML={{ __html: buttonText }} />
            <Icon path={mdiArrowRight} size={1} />
          </div>
        </a>
      </Col>
    </div>
    <div className="pt-3 pt-lg-8">
      <Image src={img} className="card-img" rounded fluid alt="test image" data-cy='image' />
    </div>
  </Card>
);
