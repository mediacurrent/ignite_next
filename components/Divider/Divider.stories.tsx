import type { Meta, StoryObj } from '@storybook/react'
import Divider from '@/components/Divider'
const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'General/Divider',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Divider>

export const Primary: Story = {
  args: {}
}
