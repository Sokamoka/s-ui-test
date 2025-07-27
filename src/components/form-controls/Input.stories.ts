import { fn } from "storybook/test";

import Input from "./Input.vue";
import InputGroup from "./InputGroup.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "FormControls/Input",
  // component: Input,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base = {
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
