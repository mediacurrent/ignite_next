import type { Meta, StoryObj } from '@storybook/react'
import Badge from '@/components/Badge'
const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Badge',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    text: 'New feature'
  }
}
