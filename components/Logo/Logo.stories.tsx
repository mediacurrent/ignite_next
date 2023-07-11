import type { Meta, StoryObj } from '@storybook/react'
import Logo from '@/components/Logo'
const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Logo',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    src: 'https://storybook.ignite.build/images/logo.svg',
    modifier: 'col-3 p-3'
  }
}

export const Footer: Story = {
  args: {
    src: 'https://storybook.ignite.build/images/logo-footer.svg',
    modifier: 'col-3 p-3 bg-dark'
  }
}
