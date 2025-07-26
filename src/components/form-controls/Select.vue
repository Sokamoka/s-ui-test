<script setup lang="ts">
import { useId } from "vue";
import { Icon } from "@iconify/vue";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "reka-ui";
import Input from "./Input.vue";

defineOptions({
  inheritAttrs: false,
});

const id = `s-select-${useId()}`;
const model = defineModel({ type: String });

defineProps<{
  options: { label: string; value: string | number };
}>();
</script>

<template>
  <SelectRoot v-model="model">
    <Input placeholder="Select" :externalId="id">
      <template #input>
        <SelectTrigger
          aria-label="label"
          :id="id"
          v-bind="$attrs"
          class="s-input-input"
        >
          <SelectValue placeholder="Select a fruit..." />
        </SelectTrigger>
      </template>
      <template #append>
        <Icon icon="radix-icons:chevron-down" class="is-icon" />
      </template>
    </Input>

    <SelectPortal>
      <SelectContent class="s-input-options" :side-offset="5" position="popper">
        <SelectScrollUpButton
          class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
        >
          <Icon icon="radix-icons:chevron-up" />
        </SelectScrollUpButton>

        <SelectViewport class="p-[5px]">
          <SelectGroup>
            <SelectItem
              v-for="(option, index) in options"
              :key="index"
              class="s-input-option-item"
              :value="option"
            >
              <SelectItemIndicator
                class="absolute left-0 w-[25px] inline-flex items-center justify-center"
              >
                <Icon icon="radix-icons:check" />
              </SelectItemIndicator>
              <SelectItemText>
                {{ option }}
              </SelectItemText>
            </SelectItem>
          </SelectGroup>
          <SelectSeparator class="h-[1px] bg-green6 m-[5px]" />
        </SelectViewport>

        <SelectScrollDownButton
          class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
        >
          <Icon icon="radix-icons:chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style scoped></style>
