import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Input from "./Input.vue";
import FormField from "./FormField.vue";

const meta = {
  title: "Form Controls/FormField",
  tags: ["autodocs"],
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { Input, FormField },
    setup() {
      return { args };
    },
    template: `<FormField v-bind="args" >
        <Input label="First" autocomplete="off" />
      </FormField>`,
  }),
  args: {
    label: "",
    hasError: false,
    errorLabel: "Error message",
    help: "Help text",
  },
};
