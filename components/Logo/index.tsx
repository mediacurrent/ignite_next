import Image from 'react-bootstrap/Image'

interface LogoTypes {
  src: string
  modifier?: string
}

const Logo = ({ src, modifier }: LogoTypes) => (
  <Image
    data-cy="logo"
    src={src}
    className={`logo ${modifier}`}
    alt="Site logo"
  />
)

export default Logo
