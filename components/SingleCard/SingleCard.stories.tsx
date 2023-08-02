import type { Meta, StoryObj } from '@storybook/react'
import SingleCard from '@/components/SingleCard'

const meta: Meta<typeof SingleCard> = {
  component: SingleCard,
  title: 'General/SingleCard',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof SingleCard>

export const Primary: Story = {
  args: {
    img: 'https://storybook.ignite.build/images/card.webp',
    badges: [{ text: 'New feature' }, { text: 'Announcement' }],
    heading: 'Phasellus auctor, turpis',
    description: `This copy is optional, if nothing is entered nothing will display. Facit
    nulla in vulputate vulputate aliquam. Commodo esse habent tation nam.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed orci
    lacus.`,
    buttons: [
      {
        text: 'Link 1'
      },
      {
        text: 'Link 2',
        primary: false
      }
    ]
  }
}
