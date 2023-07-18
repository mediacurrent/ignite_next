import type { Meta, StoryObj } from '@storybook/react'
import Color from '@/components/Color'
const meta: Meta<typeof Color> = {
  component: Color,
  title: 'General/Color',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Color>

export const Primary: Story = {
  args: {
    data: [
      {
        bg: 'bg-primary',
        colorText: 'text-white',
        text: 'Primary'
      },
      {
        bg: 'bg-secondary',
        colorText: 'text-white',
        text: 'Secondary'
      },
      {
        bg: 'bg-success',
        colorText: 'text-white',
        text: 'Success'
      },
      {
        bg: 'bg-danger',
        colorText: 'text-white',
        text: 'Danger'
      },
      {
        bg: 'bg-warning',
        colorText: 'text-dark',
        text: 'Warning'
      },
      {
        bg: 'bg-info',
        colorText: 'text-dark',
        text: 'Info'
      },
      {
        bg: 'bg-light',
        colorText: 'text-dark',
        text: 'Light'
      },
      {
        bg: 'bg-dark',
        colorText: 'text-white',
        text: 'Dark'
      }
    ]
  }
}
