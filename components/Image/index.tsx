import Image from 'react-bootstrap/Image'

interface imageTypes {
  src: string
}

const ImageComponent = ({ src }: imageTypes) => (
  <Image
    data-cy="image"
    src={src}
    className="img-fluid rounded"
    alt="Image alt text"
  />
)

export default ImageComponent
