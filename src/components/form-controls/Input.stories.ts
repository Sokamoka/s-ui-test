import { fn } from "storybook/test";

import Input from "./Input.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "FormControls/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "search", "password"],
    },
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    type: "text",
    hasError: false,
    disabled: false,
    label: "Default Label",
    icon: "",
    appendIcon: "",
    placeholder: "",
    suggestion: "",
    compact: false,
  },
};
