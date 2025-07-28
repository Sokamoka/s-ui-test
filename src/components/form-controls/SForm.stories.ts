import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Input from "./Input.vue";
import SFormField from "./FormField.vue";
import SForm from "./SForm.vue";

const meta = {
  title: "Form Controls/Form",
  tags: ["autodocs"],
  component: SForm,
} satisfies Meta<typeof SForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: (args) => ({
    components: { Input, SFormField, SForm },
    setup() {
      function submitForm() {
        console.log("SUBMIT");
      }

      return { args, submitForm };
    },
    template: `
    <div style="margin: 0 auto; display: grid; max-width: 320px;">
      <SForm style="display: grid; gap: 1rem;" @submit="submitForm">
        <SFormField>
          <Input label="E-mail" />
        </SFormField>
        <SFormField>
          <Input label="Password" type="password" />
        </SFormField>

        <button type="submit" style="display: inline-flex;">Submit form</button>
      </SForm>
    </div>`,
  }),
  // args: {
  //   isHorizontal: true,
  // },
};
