import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { NewsLetterFormTypes } from '@/types/NewsLetterForm'

const NewsLetterForm = ({
  title,
  subTitle,
  buttonText
}: NewsLetterFormTypes) => {
  return (
    <Col
      lg={10}
      className="newsletter-form shadow rounded-4 bg-dark text-light p-5"
    >
      <Row className="row">
        <Col lg={6}>
          <h3 className="text-light" data-cy="title">
            {title}
          </h3>
          <p data-cy="sub-title">{subTitle}</p>
        </Col>
        <Col lg={6} className="mt-4">
          <InputGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
              aria-label="Recipient's username with two button addons"
            />
            <Button
              className="btn btn-light border-start border-dark text-dark btn-newsletter"
              type="button"
              data-cy="submit"
            >
              {buttonText}
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Col>
  )
}

export default NewsLetterForm
