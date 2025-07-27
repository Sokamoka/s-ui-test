import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Input from "./Input.vue";
import { ref } from "vue";

const meta = {
  title: "FormControls/Input",
  tags: ["autodocs"],
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const currentModel = ref("");
      return { args, currentModel };
    },
    template: `<div style="display: grid; width: 300px;">
        <div>Current value: {{ currentModel }}</div>
        <Input v-model="currentModel" v-bind="args" />
      </div>`,
  }),
  args: {
    type: "text",
    hasError: false,
    isValid: false,
    disabled: false,
    label: "Default Label",
    icon: "",
    appendIcon: "",
    placeholder: "",
    suggestion: "",
    compact: false,
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "search", "password"],
    },
  },
};
