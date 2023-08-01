import type { Meta, StoryObj } from '@storybook/react'
import Pager from '@/components/Pager'
const meta: Meta<typeof Pager> = {
  component: Pager,
  title: 'Navigation/Pager',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Pager>

export const Primary: Story = {
  args: {
    headingId: 'styleguide_instance--1',
    items: {
      previous: {
        href: '?search=&page=1',
        text: 'Previous'
      },
      pages: [
        {
          href: '?search=&page=0'
        },
        {
          href: '?search=&page=1'
        },
        {
          href: '?search=&page=2'
        },
        {
          href: '?search=&page=3'
        },
        {
          href: '?search=&page=4'
        },
        {
          href: '?search=&page=5'
        },
        {
          href: '?search=&page=6'
        },
        {
          href: '?search=&page=7'
        },
        {
          href: '?search=&page=8'
        },
        {
          href: '?search=&page=9'
        },
        {
          href: '?search=&page=10'
        },
        {
          href: '?search=&page=11'
        },
        {
          href: '?search=&page=12'
        }
      ],
      next: {
        href: '?search=&page=3',
        text: 'Next'
      }
    }
  }
}
