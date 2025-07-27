import Input from "./Input.vue";
import InputGroup from "./InputGroup.vue";

export default {
  title: "FormControls/InputGroup",
  tags: ["autodocs"],
};

export const Base = {
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
