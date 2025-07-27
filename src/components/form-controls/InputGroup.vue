<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  isHorizontal?: boolean;
}>();

const mainClasses = computed(() => [
  "s-input-group",
  { "is-horizontal": props.isHorizontal },
]);
</script>

<template>
  <div :class="mainClasses">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.s-input-group {
  display: inline-flex;
  flex-direction: column;

  :deep(.s-input) {
    z-index: 0;
  }

  :deep(:is(.s-input, .s-badge):not(:last-child)) {
    margin-block-end: -1px;
    margin-block-start: 0;
  }

  &:not(.is-horizontal):deep(.s-input):first-child .s-input-input {
    border-end-end-radius: 0;
    border-end-start-radius: 0;
  }

  &:not(.is-horizontal):deep(.s-input):last-child .s-input-input {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  :deep(.s-input):not(:first-child):not(:last-child) .s-input-input {
    border-radius: 0;
  }

  &.is-horizontal {
    flex-direction: row;

    :deep(:is(.s-input, .s-badge):not(:last-child)) {
      margin-block-end: 0;
      margin-inline-end: -1px;
      margin-inline-start: 0;
    }

    :deep(.s-input):first-child .s-input-input {
      border-end-end-radius: 0;
      border-start-end-radius: 0;
    }

    :deep(.s-input):last-child .s-input-input {
      border-end-start-radius: 0;
      border-start-start-radius: 0;
    }
  }

  :deep(.s-input):has(.s-input-input[aria-invalid="true"]) {
    z-index: 1;
  }

  :deep(.s-input):has(.s-input-input:focus-visible),
  :deep(.s-input):has(.s-input-input:not(:disabled):hover) {
    z-index: 2;
  }

  /* Badge */
  :deep(.s-badge):first-child {
    border-end-end-radius: 0;
    border-start-end-radius: 0;
  }

  :deep(.s-badge):last-child {
    border-end-start-radius: 0;
    border-start-start-radius: 0;
  }
}
</style>
