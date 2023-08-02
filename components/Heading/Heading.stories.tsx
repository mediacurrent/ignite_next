import type { Meta, StoryObj } from '@storybook/react'
import Heading from '@/components/Heading'
const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'General/Heading',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Heading>

export const Primary: Story = {
  args: {
    text: 'Title Lorem Ipsum Dolor'
  }
}
