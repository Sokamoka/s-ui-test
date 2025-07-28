import type { Meta, StoryObj } from "@storybook/vue3-vite";

import SInput from "./SInput.vue";
import SInputGroup from "./SInputGroup.vue";

const meta = {
  title: "Form Controls/InputGroup",
  tags: ["autodocs"],
  component: SInputGroup,
} satisfies Meta<typeof SInputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { SInput, SInputGroup },
    setup() {
      return { args };
    },
    template: `<SInputGroup :isHorizontal="args.isHorizontal">
      <SInput label="First" />
      <SInput label="Second" />
      <SInput label="Third" />
      </SInputGroup>`,
  }),
  args: {
    isHorizontal: true,
  },
};
