import type { Meta, StoryObj } from '@storybook/react'
import Image from '@/components/Image'
const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Image',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Image>

export const Primary: Story = {
  args: {
    src: 'https://via.placeholder.com/640x480.png'
  }
}
