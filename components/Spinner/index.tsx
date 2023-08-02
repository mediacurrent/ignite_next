import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'

interface SpinnerTypes {
  variant: string
}

const SpinnerComponent = ({ variant = 'primary' }: SpinnerTypes) => (
  <Spinner data-cy="spinner" animation="border" variant={variant}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>
)

export default SpinnerComponent
