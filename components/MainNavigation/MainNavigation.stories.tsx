import type { Meta, StoryObj } from '@storybook/react'
import MainNavigationTemplate from '@/components/MainNavigation'
const meta: Meta<typeof MainNavigationTemplate> = {
  component: MainNavigationTemplate,
  title: 'Navigation/MainNavigationTemplate',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof MainNavigationTemplate>

export const MainNavigation: Story = {
  args: {
    modifier: 'navbar-light bg-white border-bottom',
    linkModifier: 'text-dark',
    siteLogo: './images/logo.svg',
    items: [
      {
        title: 'Menu Item 1',
        url: '#',
        is_expanded: true,
        below: [
          {
            title: 'Vestibulum ac diam',
            url: '#'
          },
          {
            title: 'Mauris blandit aliquet',
            active: true,
            url: '#'
          },
          {
            title: 'Pellentesque in',
            url: '#'
          }
        ]
      },
      {
        title: 'Menu Item 2',
        url: '#',
        is_expanded: true,
        in_active_trail: true,
        below: [
          {
            title: 'Vestibulum ac diam',
            url: '#'
          },
          {
            title: 'Mauris blandit aliquet',
            in_active_trail: true,
            url: '#'
          }
        ]
      },
      {
        title: 'Menu Item 3',
        url: '#'
      }
    ]
  }
}
