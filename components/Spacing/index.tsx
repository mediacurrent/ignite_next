import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

interface SpacingTypes {
  data: {
    modifier: string
    text: string
  }[]
}

const Spacing = ({ data }: SpacingTypes) => (
  <>
    <h3 className="mb-4">Spacing</h3>
    <Container fluid>
      <Row>
        {data.map(({ modifier, text }) => (
          <Col className="align-self-end" data-cy="spacing">
            <div className={modifier}></div>
            <div className="text-center text-dark">{text}</div>
          </Col>
        ))}
      </Row>
    </Container>
  </>
)

export default Spacing
