import type { Meta, StoryObj } from '@storybook/react'
import SideBar from '@/components/SideBar'
const meta: Meta<typeof SideBar> = {
  component: SideBar,
  title: 'Navigation/SideBar',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof SideBar>

export const Primary: Story = {
  args: {
    tags: [
      {
        header: 'Services',
        items: [
          {
            text: 'The current link item',
            href: '#'
          },
          {
            text: 'A second link item',
            href: '#'
          },
          {
            text: 'A third link item',
            href: '#'
          },
          {
            text: 'A fourth link item',
            href: '#'
          },
          {
            text: 'A disabled link item',
            href: '#',
            disabled: true
          }
        ]
      }
    ]
  }
}
