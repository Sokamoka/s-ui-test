<template>
  <div :class="mainClasses">
    <div v-if="suggestion" class="is-suggestion-text" v-html="suggestion" />
    <slot name="input">
      <input
        :id="idInt"
        class="s-input-input"
        :type="type"
        placeholder=" "
        :aria-invalid="hasError"
        :disabled="disabled"
        v-bind="$attrs"
      />
    </slot>
    <label :for="idInt" v-text="label || placeholder" />
    <div v-if="$slots.prepend || icon" class="is-prepend">
      <slot name="prepend">
        <Icon :icon="icon" class="is-icon" width="24" height="24" />
      </slot>
    </div>
    <div v-if="$slots.append || appendIcon" class="is-append">
      <slot name="append">
        <Icon :icon="appendIcon" class="is-icon" width="24" height="24" />
      </slot>
    </div>
    <Icon
      v-if="isValid"
      icon="mdi:check-bold"
      class="is-valid-icon"
      width="24"
      height="24"
    />
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, useId } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    type?: string;
    label?: string;
    placeholder?: string;
    suggestion?: string;
    hasError?: boolean;
    isValid?: boolean;
    disabled?: boolean;
    icon?: string;
    appendIcon?: string;
    externalId?: string;
    compact?: boolean;
  }>(),
  {
    type: "text",
    label: "",
    placeholder: "",
    suggestion: "",
    icon: "",
    appendIcon: "",
    hasError: false,
  }
);

const id = useId();
const idInt = computed(() => props.externalId || id);

const mainClasses = computed(() => [
  "s-input",
  { "s-input-compact": props.compact },
]);
</script>

<style lang="scss" scoped>
@media (pointer: coarse) {
  .s-input {
    --s-input-transition: none;
  }
}

.s-input {
  --input-padding-start: 1rem;
  --input-padding-end: 1rem;
  --s-input-input-color: var(--s-input-color);
  --s-input-input-bg-color: white;
  --s-input-input-border-color: var(--s-input-border-color);
  --s-input-input-border-width: 1px;

  position: relative;
  display: inline-flex;

  .is-suggestion-text {
    position: absolute;
    inset: 0;
    padding-inline-start: var(--input-padding-start);
    padding-inline-end: var(--input-padding-end);
    padding-block-start: var(--s-input-padding-block-start);
    padding-block-end: var(--s-input-padding-block-end);
    font-size: var(--s-input-base-font-size);
    line-height: 1.5rem;
    pointer-events: none;
    font-family: var(--s-input-font-family);
    color: black;
    opacity: 0.3;
    /* mix-blend-mode: darken; */

    &:empty {
      display: none;
    }
  }

  :slotted(.s-input-input),
  .s-input-input {
    text-align: start;
    padding-block: var(--s-input-padding-block-start)
      var(--s-input-padding-block-end);
    padding-inline-start: var(--input-padding-start);
    padding-inline-end: var(--input-padding-end);
    border-width: 0;
    width: 100%;
    border-radius: var(--s-input-border-radius);
    font-family: var(--s-input-font-family);
    box-shadow: inset 0 0 0 var(--s-input-input-border-width)
      var(--s-input-input-border-color);
    font-size: var(--s-input-base-font-size);
    line-height: 1.5rem;
    color: var(--s-input-input-color);
    background-color: var(--s-input-input-bg-color);
    transition: var(--s-input-transition);

    &::placeholder {
      color: var(--s-input-placeholder-color);
    }

    &:focus {
      outline-style: none;
    }

    &:hover {
      --s-input-input-bg-color: var(--s-input-active-bg-color);
      --s-input-input-border-color: var(--s-input-focus-color);
    }

    &:focus-visible {
      --s-input-input-border-width: 2px;
      --s-input-input-bg-color: var(--s-input-active-bg-color);
      --s-input-input-border-color: var(--s-input-focus-color);
    }

    &:disabled {
      --s-input-input-color: var(--s-input-disabled-color);
      --s-input-input-bg-color: var(--s-input-disabled-bg-color);
      --s-input-input-border-color: var(--s-input-disabled-border-color);
    }

    &[aria-invalid="true"],
    &[aria-invalid="true"]:hover,
    &[aria-invalid="true"]:focus-visible {
      --s-input-input-bg-color: var(--s-input-error-bg-color);
      --s-input-input-border-color: var(--s-input-error-border-color);
    }

    &[aria-invalid="true"]:disabled {
      opacity: 0.5;
    }

    &[aria-invalid="true"] + label {
      color: var(--s-input-error-border-color);
    }
  }

  label {
    padding-inline-start: var(--input-padding-start);
    padding-inline-end: var(--input-padding-end);
    padding-block-start: var(--s-input-label-padding-block-start);
    position: absolute;
    inset: 0;
    font-size: 0.75rem;
    font-weight: 700;
    font-family: var(--s-input-font-family);
    color: var(--s-input-placeholder-color);
    transition: var(--s-input-transition);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
  }

  &.s-input-compact {
    .s-input-input {
      --s-input-padding-block-start: 1rem;
      --s-input-padding-block-end: 1rem;
    }

    label {
      padding-block-start: 1rem;
      opacity: 0;
      font-weight: 400;
      line-height: 1.5rem;
      font-size: var(--s-input-base-font-size);
    }

    .is-suggestion-text {
      --s-input-padding-block-start: 1rem;
      --s-input-padding-block-end: 1rem;
    }
  }

  .s-input-input:placeholder-shown:not(:focus-visible) + label {
    font-weight: 400;
    padding-block-start: var(--s-input-padding-inline);
    font-size: var(--s-input-base-font-size);
    line-height: 1.5rem;
    opacity: 1;
  }

  .s-input-input:disabled + label {
    color: var(--s-input-disabled-color);
  }

  .is-valid-icon {
    position: absolute;
    inset-inline-end: 1rem;
    inset-block-start: 1rem;
    color: #277c5a;
    animation: scale-in 650ms
      linear(
        0,
        0.009,
        0.035 2.1%,
        0.141,
        0.281 6.7%,
        0.723 12.9%,
        0.938 16.7%,
        1.017,
        1.077,
        1.121,
        1.149 24.3%,
        1.159,
        1.163,
        1.161,
        1.154 29.9%,
        1.129 32.8%,
        1.051 39.6%,
        1.017 43.1%,
        0.991,
        0.977 51%,
        0.974 53.8%,
        0.975 57.1%,
        0.997 69.8%,
        1.003 76.9%,
        1.004 83.8%,
        1
      );
  }

  &:has(.is-valid-icon):has(.is-append) {
    .is-valid-icon {
      inset-inline-end: 3rem;
    }
    .s-input-input {
      --input-padding-end: 5rem;
    }
  }

  &:has(.is-prepend) {
    label,
    .is-suggestion-text,
    .s-input-input {
      --input-padding-start: 3rem;
    }
  }

  &:has(.is-valid-icon),
  &:has(.is-append) {
    label,
    .is-suggestion-text,
    .s-input-input {
      --input-padding-end: 3rem;
    }
  }

  :is(.is-prepend, .is-append) {
    position: absolute;
    inset-block: 0;
    display: flex;
    align-items: center;
    color: var(--s-input-color);

    &:has(.is-icon) {
      pointer-events: none;
    }
  }

  .s-input-input[aria-invalid="true"] ~ :is(.is-prepend, .is-append) {
    color: var(--s-input-error-border-color);
  }

  .s-input-input:disabled ~ :is(.is-prepend, .is-append, .is-valid-icon) {
    opacity: 0.3;
  }

  .is-prepend {
    inset-inline-start: 0;
    padding-inline-start: 1rem;
  }

  .is-append {
    inset-inline-end: 0;
    padding-inline-end: 1rem;
  }

  @keyframes scale-in {
    from {
      scale: 0;
    }

    to {
      scale: 100%;
    }
  }
}
</style>
