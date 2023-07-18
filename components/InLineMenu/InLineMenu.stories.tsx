import type { Meta, StoryObj } from '@storybook/react'
import InLineMenuTemplate from '@/components/InLineMenu'
const meta: Meta<typeof InLineMenuTemplate> = {
  component: InLineMenuTemplate,
  title: 'Navigation/InLineMenu',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof InLineMenuTemplate>

export const InLineMenu: Story = {
  args: {
    items: [
      {
        title: 'Active',
        url: '#'
      },
      {
        title: 'Link',
        url: '#'
      },
      {
        title: 'Link',
        url: '#'
      },
      {
        title: 'Disabled',
        disabled: true
      }
    ]
  }
}
