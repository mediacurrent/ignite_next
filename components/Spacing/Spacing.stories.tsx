import type { Meta, StoryObj } from '@storybook/react'
import Spacing from '@/components/Spacing'
const meta: Meta<typeof Spacing> = {
  component: Spacing,
  title: 'General/Spacing',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Spacing>

export const Default: Story = {
  args: {
    data: [
      {
        modifier: 'pb-1 m-2 bg-primary shadow opacity-25',
        text: '1'
      },
      {
        modifier: 'pb-2 m-2 bg-primary shadow opacity-25',
        text: '2'
      },
      {
        modifier: 'pb-3 m-2 bg-primary shadow opacity-50',
        text: '3'
      },
      {
        modifier: 'pb-4 m-2 bg-primary shadow opacity-75',
        text: '4'
      },
      {
        modifier: 'pb-5 m-2 bg-primary shadow',
        text: '5'
      }
    ]
  }
}
