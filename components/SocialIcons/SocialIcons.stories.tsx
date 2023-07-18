import type { Meta, StoryObj } from '@storybook/react'
import SocialIcons from '@/components/SocialIcons'

const meta: Meta<typeof SocialIcons> = {
  component: SocialIcons,
  title: 'General/SocialIcons',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof SocialIcons>

export const Default: Story = {
  args: {
    icons: [
      {
        url: 'https://www.facebook.com/',
        ariaLabel: 'Visit our Facebook page',
        name: 'Facebook page',
        modifier: 'social-icon-light',
        icon: (
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6484 11.75L11.1953 8.15625H7.71875V5.8125C7.71875 4.79688 8.1875 3.85938 9.75 3.85938H11.3516V0.773438C11.3516 0.773438 9.90625 0.5 8.53906 0.5C5.6875 0.5 3.8125 2.25781 3.8125 5.38281V8.15625H0.609375V11.75H3.8125V20.5H7.71875V11.75H10.6484Z"
              fill="#0D0F16"
            />
          </svg>
        )
      },
      {
        url: 'https://www.twitter.com/',
        ariaLabel: 'Visit our Twitter page',
        name: 'Twitter page',
        modifier: 'social-icon-light',
        icon: (
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9297 4.4375C17.9297 4.63281 17.9297 4.78906 17.9297 4.98438C17.9297 10.4141 13.8281 16.625 6.28906 16.625C3.94531 16.625 1.79688 15.9609 0 14.7891C0.3125 14.8281 0.625 14.8672 0.976562 14.8672C2.89062 14.8672 4.64844 14.2031 6.05469 13.1094C4.25781 13.0703 2.73438 11.8984 2.22656 10.2578C2.5 10.2969 2.73438 10.3359 3.00781 10.3359C3.35938 10.3359 3.75 10.2578 4.0625 10.1797C2.1875 9.78906 0.78125 8.14844 0.78125 6.15625V6.11719C1.32812 6.42969 1.99219 6.58594 2.65625 6.625C1.52344 5.88281 0.820312 4.63281 0.820312 3.22656C0.820312 2.44531 1.01562 1.74219 1.36719 1.15625C3.39844 3.61719 6.44531 5.25781 9.84375 5.45312C9.76562 5.14062 9.72656 4.82812 9.72656 4.51562C9.72656 2.25 11.5625 0.414062 13.8281 0.414062C15 0.414062 16.0547 0.882812 16.8359 1.70312C17.7344 1.50781 18.6328 1.15625 19.4141 0.6875C19.1016 1.66406 18.4766 2.44531 17.6172 2.95312C18.4375 2.875 19.2578 2.64062 19.9609 2.32812C19.4141 3.14844 18.7109 3.85156 17.9297 4.4375Z"
              fill="#0D0F16"
            />
          </svg>
        )
      },
      {
        url: 'https://www.youtube.com/',
        ariaLabel: 'Visit our YouTube page',
        name: 'YouTube page',
        modifier: 'social-icon-light',
        icon: (
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1953 2.38281C20.9609 1.44531 20.2188 0.703125 19.3203 0.46875C17.6406 0 11 0 11 0C11 0 4.32031 0 2.64062 0.46875C1.74219 0.703125 1 1.44531 0.765625 2.38281C0.296875 4.02344 0.296875 7.53906 0.296875 7.53906C0.296875 7.53906 0.296875 11.0156 0.765625 12.6953C1 13.6328 1.74219 14.3359 2.64062 14.5703C4.32031 15 11 15 11 15C11 15 17.6406 15 19.3203 14.5703C20.2188 14.3359 20.9609 13.6328 21.1953 12.6953C21.6641 11.0156 21.6641 7.53906 21.6641 7.53906C21.6641 7.53906 21.6641 4.02344 21.1953 2.38281ZM8.8125 10.7031V4.375L14.3594 7.53906L8.8125 10.7031Z"
              fill="#0D0F16"
            />
          </svg>
        )
      },
      {
        url: 'https://www.instagram.com/',
        ariaLabel: 'Visit our Instagram page',
        name: 'Instagram page',
        modifier: 'social-icon-light',
        icon: (
          <svg
            aria-hidden="true"
            class="icon icon--instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 216 216"
          >
            <path
              d="M144.2,209.8c-24,0-48.1,0-72.1,0c-2.9-0.2-5.8-0.6-8.7-0.7c-31.9-1.6-52.4-20.6-56.1-52.2c-0.5-4.4-0.8-8.7-1.2-13.1
              c0-24,0-48.1,0-72.1c0.2-2.7,0.5-5.4,0.7-8.1C7.8,49.3,11.4,36,21.2,24.9c11.2-12.6,25.8-18,42.1-18.3c29.9-0.5,59.8-0.5,89.7,0
              c14.2,0.2,27.4,4.6,38.3,14.5c12.4,11.2,17.8,25.8,18,41.9c0.5,29.9,0.8,59.8,0,89.7c-0.9,31.9-20.4,52.2-51.9,56
              C153,209.1,148.6,209.4,144.2,209.8z M108.4,190.7C108.4,190.7,108.4,190.7,108.4,190.7c14.4,0,28.8,0,43.1-0.1
              c1.8,0,3.6-0.3,5.4-0.6c17.5-2.2,28.9-12.1,32.6-28.5c1-4.3,1.5-8.7,1.6-13.1c0.3-20.2,0.6-40.3,0.6-60.5c0-9.7-0.3-19.5-1.3-29.2
              c-1.9-18.2-12.6-29.9-30.6-32.7c-10-1.6-20.3-1.8-30.5-1.8c-21.3-0.1-42.6-0.1-63.9,0.6C40,25.7,26.5,39.5,25.3,65
              c-0.4,7.2-0.7,14.5-0.6,21.7c0.1,21.3,0,42.6,0.7,63.9c0.9,25.3,14.6,39,39.9,40C79.7,191.1,94.1,190.7,108.4,190.7z"
            />
            <path
              d="M108.2,160.1c-29.1,0-52.4-23.3-52.4-52.5c0-28.9,23.4-52.2,52.3-52.3c29.1,0,52.4,23.3,52.4,52.5
              C160.6,136.8,137.2,160.1,108.2,160.1z M142.2,107.7c0-18.7-15.3-33.9-33.9-34c-18.7,0-34,15.2-34.1,33.8
              c-0.1,18.8,15.3,34.2,34.1,34.1C127,141.7,142.2,126.4,142.2,107.7z"
            />
            <path
              d="M174.9,53.5c-0.1,6.8-5.7,12.2-12.5,12.1c-6.7-0.1-12-5.6-12-12.3c0-6.8,5.5-12.3,12.4-12.2
              C169.6,41.1,175,46.6,174.9,53.5z"
            />
          </svg>
        )
      }
    ]
  }
}

export const Dark: Story = {
  args: {
    background: 'dark',
    icons: [
      {
        url: 'https://www.facebook.com/',
        ariaLabel: 'Visit our Facebook page',
        name: 'Facebook page',
        modifier: 'social-icon-dark',
        icon: (
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6484 11.75L11.1953 8.15625H7.71875V5.8125C7.71875 4.79688 8.1875 3.85938 9.75 3.85938H11.3516V0.773438C11.3516 0.773438 9.90625 0.5 8.53906 0.5C5.6875 0.5 3.8125 2.25781 3.8125 5.38281V8.15625H0.609375V11.75H3.8125V20.5H7.71875V11.75H10.6484Z"
              fill="#0D0F16"
            />
          </svg>
        )
      },
      {
        url: 'https://www.twitter.com/',
        ariaLabel: 'Visit our Twitter page',
        name: 'Twitter page',
        modifier: 'social-icon-dark',
        icon: (
          <svg
            width="20"
            height="17"
            viewBox="0 0 20 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9297 4.4375C17.9297 4.63281 17.9297 4.78906 17.9297 4.98438C17.9297 10.4141 13.8281 16.625 6.28906 16.625C3.94531 16.625 1.79688 15.9609 0 14.7891C0.3125 14.8281 0.625 14.8672 0.976562 14.8672C2.89062 14.8672 4.64844 14.2031 6.05469 13.1094C4.25781 13.0703 2.73438 11.8984 2.22656 10.2578C2.5 10.2969 2.73438 10.3359 3.00781 10.3359C3.35938 10.3359 3.75 10.2578 4.0625 10.1797C2.1875 9.78906 0.78125 8.14844 0.78125 6.15625V6.11719C1.32812 6.42969 1.99219 6.58594 2.65625 6.625C1.52344 5.88281 0.820312 4.63281 0.820312 3.22656C0.820312 2.44531 1.01562 1.74219 1.36719 1.15625C3.39844 3.61719 6.44531 5.25781 9.84375 5.45312C9.76562 5.14062 9.72656 4.82812 9.72656 4.51562C9.72656 2.25 11.5625 0.414062 13.8281 0.414062C15 0.414062 16.0547 0.882812 16.8359 1.70312C17.7344 1.50781 18.6328 1.15625 19.4141 0.6875C19.1016 1.66406 18.4766 2.44531 17.6172 2.95312C18.4375 2.875 19.2578 2.64062 19.9609 2.32812C19.4141 3.14844 18.7109 3.85156 17.9297 4.4375Z"
              fill="#0D0F16"
            />
          </svg>
        )
      },
      {
        url: 'https://www.youtube.com/',
        ariaLabel: 'Visit our YouTube page',
        name: 'YouTube page',
        modifier: 'social-icon-dark',
        icon: (
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1953 2.38281C20.9609 1.44531 20.2188 0.703125 19.3203 0.46875C17.6406 0 11 0 11 0C11 0 4.32031 0 2.64062 0.46875C1.74219 0.703125 1 1.44531 0.765625 2.38281C0.296875 4.02344 0.296875 7.53906 0.296875 7.53906C0.296875 7.53906 0.296875 11.0156 0.765625 12.6953C1 13.6328 1.74219 14.3359 2.64062 14.5703C4.32031 15 11 15 11 15C11 15 17.6406 15 19.3203 14.5703C20.2188 14.3359 20.9609 13.6328 21.1953 12.6953C21.6641 11.0156 21.6641 7.53906 21.6641 7.53906C21.6641 7.53906 21.6641 4.02344 21.1953 2.38281ZM8.8125 10.7031V4.375L14.3594 7.53906L8.8125 10.7031Z"
              fill="#0D0F16"
            />
          </svg>
        )
      },
      {
        url: 'https://www.instagram.com/',
        ariaLabel: 'Visit our Instagram page',
        name: 'Instagram page',
        modifier: 'social-icon-dark',
        icon: (
          <svg
            aria-hidden="true"
            class="icon icon--instagram"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 216 216"
          >
            <path
              d="M144.2,209.8c-24,0-48.1,0-72.1,0c-2.9-0.2-5.8-0.6-8.7-0.7c-31.9-1.6-52.4-20.6-56.1-52.2c-0.5-4.4-0.8-8.7-1.2-13.1
              c0-24,0-48.1,0-72.1c0.2-2.7,0.5-5.4,0.7-8.1C7.8,49.3,11.4,36,21.2,24.9c11.2-12.6,25.8-18,42.1-18.3c29.9-0.5,59.8-0.5,89.7,0
              c14.2,0.2,27.4,4.6,38.3,14.5c12.4,11.2,17.8,25.8,18,41.9c0.5,29.9,0.8,59.8,0,89.7c-0.9,31.9-20.4,52.2-51.9,56
              C153,209.1,148.6,209.4,144.2,209.8z M108.4,190.7C108.4,190.7,108.4,190.7,108.4,190.7c14.4,0,28.8,0,43.1-0.1
              c1.8,0,3.6-0.3,5.4-0.6c17.5-2.2,28.9-12.1,32.6-28.5c1-4.3,1.5-8.7,1.6-13.1c0.3-20.2,0.6-40.3,0.6-60.5c0-9.7-0.3-19.5-1.3-29.2
              c-1.9-18.2-12.6-29.9-30.6-32.7c-10-1.6-20.3-1.8-30.5-1.8c-21.3-0.1-42.6-0.1-63.9,0.6C40,25.7,26.5,39.5,25.3,65
              c-0.4,7.2-0.7,14.5-0.6,21.7c0.1,21.3,0,42.6,0.7,63.9c0.9,25.3,14.6,39,39.9,40C79.7,191.1,94.1,190.7,108.4,190.7z"
            />
            <path
              d="M108.2,160.1c-29.1,0-52.4-23.3-52.4-52.5c0-28.9,23.4-52.2,52.3-52.3c29.1,0,52.4,23.3,52.4,52.5
              C160.6,136.8,137.2,160.1,108.2,160.1z M142.2,107.7c0-18.7-15.3-33.9-33.9-34c-18.7,0-34,15.2-34.1,33.8
              c-0.1,18.8,15.3,34.2,34.1,34.1C127,141.7,142.2,126.4,142.2,107.7z"
            />
            <path
              d="M174.9,53.5c-0.1,6.8-5.7,12.2-12.5,12.1c-6.7-0.1-12-5.6-12-12.3c0-6.8,5.5-12.3,12.4-12.2
              C169.6,41.1,175,46.6,174.9,53.5z"
            />
          </svg>
        )
      }
    ]
  }
}
