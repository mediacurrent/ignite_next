import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

interface Colors {
  data: {
    bg: string
    colorText: string
    text: string
  }[]
}

const Color = ({ data }: Colors) => (
  <Row>
    {data.map(({ bg, colorText, text }, idx: number) => (
      <Col md={4} key={idx}>
        <div data-cy="color" className={`p-3 mb-3 ${bg} ${colorText}`}>
          {text}
        </div>
      </Col>
    ))}
  </Row>
)

export default Color
