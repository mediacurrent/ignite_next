import '@/styles/components/richText.scss'

interface RichTextTypes {
  text: string
}

const RichText = ({ text }: RichTextTypes) => (
  <div data-cy="rich-text-container" className="rich-text">
    <p dangerouslySetInnerHTML={{ __html: text }} data-cy="rich-text-content" />
  </div>
)

export default RichText
