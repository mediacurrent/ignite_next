import type { Meta, StoryObj } from '@storybook/react'
import SpinnerComponent from '@/components/Spinner'

const meta: Meta<typeof SpinnerComponent> = {
  component: SpinnerComponent,
  title: 'General/Spinner',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof SpinnerComponent>

const data = [
  {},
  {
    variant: 'secondary'
  },
  {
    variant: 'success'
  },
  {
    variant: 'danger'
  },
  {
    variant: 'warning'
  },
  {
    variant: 'info'
  },
  {
    variant: 'light'
  },
  {
    variant: 'dark'
  }
]

export const Spinner: Story = {
  render: (args) => (
    <div className="d-flex">
      {data.map(({ variant }) => (
        <SpinnerComponent variant={variant} />
      ))}
    </div>
  )
}
