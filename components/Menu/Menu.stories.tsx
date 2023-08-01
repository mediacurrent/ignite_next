import type { Meta, StoryObj } from '@storybook/react'
import Menu from '@/components/Menu'
const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'Navigation/Menu',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Menu>

export const MainNavigation: Story = {
  args: {
    modifier: '',
    items: [
      {
        text: 'Link 1',
        href: '#'
      },
      {
        text: 'Link 2',
        href: '#'
      },
      {
        text: 'Link 3',
        href: '#'
      }
    ]
  }
}
