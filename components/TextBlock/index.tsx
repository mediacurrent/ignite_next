import { Col, Image, Card, Row } from 'react-bootstrap'
type TextBlockTypes = {
  title?: string
  paragraphText?: string
}

const TextBlock = ({ title, paragraphText }: TextBlockTypes) => {
  return (
    <Row>
      <Col lg={10}>
        <h2 className="heading mb-2 display-3" aria-label="No value">
          <span data-cy="title" dangerouslySetInnerHTML={{ __html: title }} />
        </h2>
        <div className="rich-text">
          <span
            data-cy="paragraph"
            dangerouslySetInnerHTML={{ __html: paragraphText }}
          />
        </div>
      </Col>
    </Row>
  )
}

export default TextBlock
