import type { Meta, StoryObj } from '@storybook/react'
import Hero from '@/components/Hero/index'
const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'Hero',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Hero>
export const Primary: Story = {
  args: {
    img: 'https://via.placeholder.com/1024x576.png',
    position: 'primary',
    title: 'Ignite',
    headingText: 'Shortcut your design and development',
    paragraphText: `<p>
    Quickly design and customize responsive mobile-first sites with
    Bootstrap.
    </p>`,
    buttonText: `Learn more &ensp;`
  }
}
export const Top: Story = {
  args: {
    img: 'https://via.placeholder.com/1024x576.png',
    position: 'top',
    title: 'Ignite',
    headingText: `<strong>Shortcut</strong> your <strong>design</strong> and <strong>development</strong> with our website starter kit`,
    paragraphText: `<p>
    Quickly design and customize responsive mobile-first sites with
    Bootstrap, the world’s most popular front-end open source toolkit,
    featuring Sass variables and mixins, responsive grid system,
    extensive prebuilt components, and powerful JavaScript plugins.
  </p>`,
    buttonText: `Learn more &ensp;`
  }
}
export const Bottom: Story = {
  args: {
    img: 'https://via.placeholder.com/1024x576.png',
    position: 'bottom',
    title: 'Ignite',
    headingText: `<strong>Shortcut</strong> your <strong>design</strong> and
    <strong>development</strong> with our website starter kit`,
    buttonText: `Learn more &ensp;`
  }
}
export const Right: Story = {
  args: {
    img: 'https://via.placeholder.com/1024x576.png',
    position: 'right',
    title: 'Features',
    headingText: `We got your <strong>website</strong> and
    <strong>design system</strong> project covered`,
    paragraphText: `<p>
    Lorem ipsum dolor sit amet consectetur. Congue vel sagittis eu
    ullamcorper vel. Et et dui est ante tempor egestas pellentesque
    odio. Ornare erat lacus commodo porttitor ut enim. Ultricies mauris
    blandit in fermentum fringilla mollis risus ut. Nam eget eu
    suspendisse ut fermentum nascetur pretium lectus. Odio amet amet nam
    viverra hendrerit diam et. Nibh nunc in senectus odio tempor vitae
    id. Sit ut sit porta nisl enim.
  </p>`,
    buttonText: `See feature list &ensp;`
  }
}
export const Left: Story = {
  args: {
    img: 'https://via.placeholder.com/1024x576.png',
    position: 'left',
    title: 'Features',
    headingText: ` We got your <strong>website</strong> and
    <strong>design system</strong> project covered`,
    paragraphText: `<p>
    Lorem ipsum dolor sit amet consectetur. Congue vel sagittis eu
    ullamcorper vel. Et et dui est ante tempor egestas pellentesque
    odio. Ornare erat lacus commodo porttitor ut enim. Ultricies mauris
    blandit in fermentum fringilla mollis risus ut. Nam eget eu
    suspendisse ut fermentum nascetur pretium lectus. Odio amet amet nam
    viverra hendrerit diam et. Nibh nunc in senectus odio tempor vitae
    id. Sit ut sit porta nisl enim.
  </p>`,
    buttonText: `See feature list &ensp;`
  }
}
