import type { Meta, StoryObj } from '@storybook/react'
import BreadcrumbTemplate from '@/components/Breadcrumb'
const meta: Meta<typeof BreadcrumbTemplate> = {
  component: BreadcrumbTemplate,
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof BreadcrumbTemplate>

export const Breadcrumb: Story = {
  args: {
    breadcrumb: [
      {
        text: 'Home',
        url: '#'
      },
      {
        text: 'Parent Page',
        url: '#'
      },
      {
        text: 'Current Page',
        url: '',
        active: true
      }
    ]
  }
}
