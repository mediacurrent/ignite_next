import type { Meta, StoryObj } from '@storybook/react'
import Shadow from '@/components/Shadow'
const meta: Meta<typeof Shadow> = {
  component: Shadow,
  title: 'General/Shadow',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Shadow>

const data = [
  {
    noShadow: true,
    text: 'No Shadow'
  },
  {
    size: 'sm',
    text: 'Small Shadow'
  },
  {
    text: 'Regular Shadow'
  },
  {
    size: 'lg',
    text: 'Larger Shadow'
  }
]

export const Default: Story = {
  render: (_) => (
    <div>
      {data.map(({ size, text, noShadow }) => (
        <Shadow size={size} text={text} noShadow={noShadow} />
      ))}
    </div>
  )
}
