import type { Meta, StoryObj } from '@storybook/react'
import Button from '@/components/Button'
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    buttonText: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    buttonText: 'Secondary Button',
    primary: false
  }
}
