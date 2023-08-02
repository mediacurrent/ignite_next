import type { Meta, StoryObj } from '@storybook/react'
import NewsLetterForm from '@/components/NewsLetterForm'
const meta: Meta<typeof NewsLetterForm> = {
  component: NewsLetterForm,
  title: 'General/NewsLetterForm',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof NewsLetterForm>

export const Primary: Story = {
  args: {
    title: 'Get our tips, straight to your inbox',
    subTitle: 'Learn how to improve your content editing flow.',
    buttonText: 'Submit'
  }
}
