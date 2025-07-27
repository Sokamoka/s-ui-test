<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { useFormFieldProvider } from "../../composables/use-form-field";

const props = withDefaults(
  defineProps<{
    label?: string;
    hasError?: boolean;
    errorLabel?: string;
    help?: string;
  }>(),
  {
    hasError: false, // Nem is kell
  }
);

useFormFieldProvider(computed(() => props.hasError));
</script>

<template>
  <div>
    <div v-if="label" class="is-label">{{ label }}</div>
    <slot />
    <div v-if="help && !hasError" class="is-help">{{ help }}</div>
    <div v-if="hasError" class="is-error">
      <Icon icon="ic:round-warning" width="20" />
      {{ errorLabel }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.is-label {
  padding: 0.25rem;
  font-weight: 700;
}

.is-help {
  padding: 0.25rem 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1rem;
  color: var(--s-input-placeholder-color);
}

.is-error {
  padding: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 700;
  color: var(--s-input-error-border-color);
}
</style>
