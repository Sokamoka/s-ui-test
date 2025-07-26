import { fn } from "storybook/test";

import Input from "./Input.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "FormControls/Input",
  // component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "search", "password"],
    },
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template:
      '<div style="display: grid; width: 300px;"><Input v-bind="args" /></div>',
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
};
