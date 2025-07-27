import Input from "./Input.vue";
import FormField from "./FormField.vue";

export default {
  title: "FormControls/FormField",
  tags: ["autodocs"],
};

export const Base = {
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
