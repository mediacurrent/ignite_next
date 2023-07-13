import type { Meta, StoryObj } from '@storybook/react'
import Typography from '@/components/Typography'
const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {}
}
