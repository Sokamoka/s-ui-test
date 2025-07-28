import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Input from "./SInput.vue";
import SFormField from "./SFormField.vue";
import SForm from "./SForm.vue";

import { useRegle } from "@regle/core";
import { required, minLength, maxLength, email } from "@regle/rules";
import { reactive } from "vue";

const meta = {
  title: "Form Controls/Form",
  tags: ["autodocs"],
  // component: SForm,
} satisfies Meta<typeof SForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => ({
    components: { Input, SFormField, SForm },
    setup() {
      const state = reactive({
        email: "",
        password: "",
      });
      const { r$ } = useRegle(
        state,
        {
          email: { required, email, minLength: minLength(4) },
          password: {
            required,
            minLength: minLength(4),
            maxLength: maxLength(12),
          },
        },
        { lazy: true }
      );

      async function submitForm() {
        const { valid } = await r$.$validate();
        console.log("SUBMIT", valid);
      }

      return { r$, state, submitForm };
    },
    template: `
    <div style="margin: 0 auto; display: grid; max-width: 320px;">
      <SForm style="display: grid; gap: 1rem;" :validator="r$" @submit="submitForm">
        <SFormField name="email">
          <Input v-model="state.email" label="E-mail" />
        </SFormField>
        <SFormField name="password">
          <Input v-model="state.password" label="Password" type="password" />
        </SFormField>

        <button type="submit" style="display: inline-flex;">Submit form</button>
      </SForm>
    </div>`,
  }),
  // args: {
  //   isHorizontal: true,
  // },
};
