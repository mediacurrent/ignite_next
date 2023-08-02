const Link = ({ text, type }: { text: string; type: string }) => (
  <a data-cy="link" href="#" className={`link-${type}`}>
    {text}
  </a>
)

export default Link
