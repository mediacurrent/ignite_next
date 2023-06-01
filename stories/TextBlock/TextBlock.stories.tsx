import type { Meta, StoryObj } from "@storybook/react";
import TextBlock from "@/components/TextBlock";
const meta: Meta<typeof TextBlock> = {
  component: TextBlock,
  title: "TextBlock",
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TextBlock>;

export const Primary: Story = {
  args: {
    title: "Title Lorem Ipsum Dolor",
    paragraphText: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris mi, aliquam in orci at, finibus malesuada elit. Vivamus ex ante, imperdiet nec odio ac, sollicitudin fermentum velit. Nunc vestibulum massa est, eu auctor libero pellentesque eu. Cras id augue a lacus imperdiet convallis dictum vel diam. Fusce ut ex ac sem condimentum ornare. Nam at rutrum enim. Quisque convallis augue in nisi interdum, ac suscipit elit sollicitudin.</p><p>Nulla velit purus, varius quis velit aliquet, lobortis venenatis mauris. In non ligula eget ex semper pulvinar. Aliquam aliquet hendrerit auctor. Duis bibendum placerat risus, non commodo magna ornare id. Morbi eget nulla hendrerit, molestie nisl eget, semper odio. Mauris mollis risus sit amet ligula mattis vehicula. Donec maximus condimentum lacus, quis porttitor risus fermentum id. Duis semper neque in interdum pulvinar. Nam venenatis interdum libero. Proin dictum blandit ante sollicitudin laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas in pharetra ligula.</p>`,
  },
};
