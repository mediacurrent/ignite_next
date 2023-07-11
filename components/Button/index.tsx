import Button from 'react-bootstrap/Button'

import { ButtonTypes } from '@/types/Button'
import Icon from '@mdi/react'
import { mdiArrowRight } from '@mdi/js'

const ButtonComponent = ({ buttonText, primary = true }: ButtonTypes) => (
  <a
    href="#"
    className={primary ? 'btn btn-primary' : 'btn btn-outline-primary'}
    role="button"
    data-cy="button"
  >
    <div className="d-flex">
      <span dangerouslySetInnerHTML={{ __html: buttonText }} />
      <Icon path={mdiArrowRight} size={1} />
    </div>
  </a>
)

export default ButtonComponent
