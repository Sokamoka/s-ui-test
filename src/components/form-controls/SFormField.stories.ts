import type { Meta, StoryObj } from "@storybook/vue3-vite";
import SInput from "./SInput.vue";
import SFormField from "./SFormField.vue";

const meta = {
  title: "Form Controls/FormField",
  tags: ["autodocs"],
  component: SFormField,
} satisfies Meta<typeof SFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { SInput, SFormField },
    setup() {
      return { args };
    },
    template: `<SFormField v-bind="args" >
        <SInput label="First" autocomplete="off" />
      </SFormField>`,
  }),
  args: {
    label: "",
    hasError: false,
    errorLabel: "Error message",
    help: "Help text",
  },
};
