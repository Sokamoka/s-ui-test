import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Input from "./Input.vue";
import InputGroup from "./InputGroup.vue";

const meta = {
  title: "Form Controls/InputGroup",
  tags: ["autodocs"],
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { Input, InputGroup },
    setup() {
      return { args };
    },
    template: `<InputGroup :isHorizontal="args.isHorizontal">
      <Input label="First" />
      <Input label="Second" />
      <Input label="Third" />
      </InputGroup>`,
  }),
  args: {
    isHorizontal: true,
  },
};
