interface headingType {
  text: string
}

const Heading = ({ text }: headingType) => (
  <h2 data-cy="heading-text" className="heading display-3">
    {text}
  </h2>
)

export default Heading
