import type { Meta, StoryObj } from '@storybook/react'
import Video from '@/components/Video'
const meta: Meta<typeof Video> = {
  component: Video,
  title: 'Video',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Video>

export const Primary: Story = {
  args: {
    videoSrc: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/i4jiTZ76XPk"
        title="YouTube video player"
        // @ts-ignore - frameborder does not exist on DetailedHTMLProps
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    )
  }
}
