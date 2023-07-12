import type { Meta, StoryObj } from '@storybook/react'
import Modal from '@/components/Modal'
const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Modal',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    buttonText: 'Launch demo modal',
    modalName: 'example',
    title: 'Modal Title',
    body: 'Modal body text goes here.',
    closeButtonName: 'Close',
    saveButton: {
      name: 'Save Changes',
      redirects: 'http://drupal.org/'
    }
  }
}
