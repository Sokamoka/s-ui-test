<template>
  <div class="s-input">
    <div v-if="suggestion" class="is-suggestion-text" v-html="suggestion" />
    <slot name="input">
      <input
        :id="idInt"
        class="s-input-input"
        :type="type"
        placeholder=" "
        :aria-invalid="hasError"
        v-bind="$attrs"
      />
    </slot>
    <label :for="idInt" v-text="label || placeholder" />
    <div v-if="$slots.prepend || icon" class="is-prepend">
      <slot name="prepend">
        <Icon :icon="icon" class="is-icon" width="20" height="20" />
      </slot>
    </div>
    <div v-if="$slots.append || appendIcon" class="is-append">
      <slot name="append">
        <Icon :icon="appendIcon" class="is-icon" width="20" height="20" />
      </slot>
    </div>
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
    icon?: string;
    appendIcon?: string;
    externalId?: string;
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
</script>

<style lang="scss" scoped>
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

  .s-input-input:placeholder-shown:not(:focus-visible) + label {
    font-weight: 400;
    padding-block-start: var(--s-input-padding-inline);
    font-size: var(--s-input-base-font-size);
    line-height: 1.5rem;
  }

  .s-input-input:disabled + label {
    color: var(--s-input-disabled-color);
  }

  &:has(.is-prepend) {
    :slotted(button),
    .is-suggestion-text,
    label,
    .s-input-input {
      --input-padding-start: 3rem;
    }
  }

  &:has(.is-append) {
    :slotted(button),
    .is-suggestion-text,
    label,
    .s-input-input {
      --input-padding-end: 3rem;
    }
  }

  :is(.is-prepend, .is-append) {
    position: absolute;
    inset-block: 0;
    display: flex;
    align-items: center;

    &:has(.is-icon) {
      pointer-events: none;
    }
  }

  .is-prepend {
    inset-inline-start: 0;
    padding-inline-start: 1rem;
  }

  .is-append {
    inset-inline-end: 0;
    padding-inline-end: 1rem;
  }
}
</style>
