<script setup lang="ts">
import { Icon } from "@iconify/vue";

withDefaults(
  defineProps<{
    hasError?: boolean;
    errorLabel?: string;
    help?: string;
  }>(),
  {
    hasError: false, // Nem is kell
  }
);
</script>

<template>
  <div>
    <slot />
    <div v-if="help && !hasError" class="is-help">{{ help }}</div>
    <div v-if="hasError" class="is-error">
      <Icon icon="ic:round-warning" width="20" />
      {{ errorLabel }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.is-help {
  padding: 0.25rem;
  font-size: 0.875rem;
  color: var(--s-input-placeholder-color);
}

.is-error {
  padding: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--s-input-error-border-color);
}
</style>
