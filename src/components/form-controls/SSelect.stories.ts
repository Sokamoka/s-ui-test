import type { Meta, StoryObj } from "@storybook/vue3-vite";

import SSelect from "./SSelect.vue";

const meta = {
  title: "Form Controls/Select",
  tags: ["autodocs"],
  // component: SSelect,
} satisfies Meta<typeof SSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => ({
    components: { SSelect },
    setup() {
      const options = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"];

      return { options };
    },
    template: `<SSelect :options="options" class="w-full" />`,
  }),
  // args: {
  //   isHorizontal: true,
  // },
};
