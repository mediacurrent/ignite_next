import type { Meta, StoryObj } from '@storybook/react'
import Quote from '@/components/Quote'
const meta: Meta<typeof Quote> = {
  component: Quote,
  title: 'Quote',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Quote>

export const Primary: Story = {
  args: {
    text: `Mediacurrent provided a range of high caliber services including
    design, UX, development, and digital strategy that are helping us
    pivot and transform the insurance purchasing experience.`,
    logo: 'https://via.placeholder.com/640x480.png',
    quoteImage: 'https://via.placeholder.com/640x480.png',
    author: 'Peggy Maher',
    authorPosition: 'SVP, Direct to Consumer at Guardian Life Insurance'
  }
}
