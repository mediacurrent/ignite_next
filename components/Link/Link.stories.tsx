import type { Meta, StoryObj } from '@storybook/react'
import Link from '@/components/Link'

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Link>

const data = [
  {
    text: 'Primary link',
    type: 'primary'
  },
  {
    text: 'Secondary link',
    type: 'secondary'
  },
  {
    text: 'Success link',
    type: 'success'
  },
  {
    text: 'Danger link',
    type: 'danger'
  },
  {
    text: 'Warning link',
    type: 'warning'
  },
  {
    text: 'Info link',
    type: 'info'
  },
  {
    text: 'Light link',
    type: 'light'
  },
  {
    text: 'Dark link',
    type: 'dark'
  }
]

export const Primary: Story = {
  render: (args) => (
    <div className="d-flex justify-content-between">
      {data.map(({ text, type }) => (
        <Link text={text} type={type} {...args} />
      ))}
    </div>
  )
}
