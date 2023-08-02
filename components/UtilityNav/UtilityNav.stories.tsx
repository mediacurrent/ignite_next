import type { Meta, StoryObj } from '@storybook/react'
import UtilityNav from '@/components/UtilityNav'
const meta: Meta<typeof UtilityNav> = {
  component: UtilityNav,
  title: 'Navigation/UtilityNav',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof UtilityNav>

export const Primary: Story = {
  args: {
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
