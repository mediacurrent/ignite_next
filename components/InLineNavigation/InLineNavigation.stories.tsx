import type { Meta, StoryObj } from '@storybook/react'
import InLineNavigationTemplate from '@/components/InLineNavigation'
const meta: Meta<typeof InLineNavigationTemplate> = {
  component: InLineNavigationTemplate,
  title: 'Navigation/InLineNavigation',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof InLineNavigationTemplate>

export const InLineNavigation: Story = {
  args: {
    items: [
      {
        text: 'Link 1',
        url: '#'
      },
      {
        text: 'Link 2',
        url: '#'
      },
      {
        text: 'Link 3',
        url: '#'
      }
    ]
  }
}
