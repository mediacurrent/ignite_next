import Ratio from 'react-bootstrap/Ratio'

interface VideoTypes {
  videoSrc: React.ReactChild
}

const Video = ({ videoSrc }: VideoTypes) => (
  <Ratio data-cy="video" aspectRatio="16x9">
    {videoSrc}
  </Ratio>
)

export default Video
