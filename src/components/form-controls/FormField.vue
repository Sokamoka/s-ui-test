<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { useFormFieldProvider } from "../../composables/use-form-field";
import { useForm } from "../../composables/use-form";

const props = withDefaults(
  defineProps<{
    name?: string;
    label?: string;
    hasError?: boolean;
    errorLabel?: string;
    help?: string;
  }>(),
  {
    hasError: false, // Nem is kell
  }
);

const { hasError, errorMessage } = useForm(props.name || "");

const hasErrorInt = computed(() => props.hasError || hasError.value);
const errorMessageInt = computed(() => props.errorLabel || errorMessage.value);

useFormFieldProvider(hasErrorInt);
</script>

<template>
  <div>
    <div v-if="label" class="is-label">{{ label }}</div>
    <slot />
    <div v-if="help && !hasErrorInt" class="is-help">{{ help }}</div>
    <div v-if="hasErrorInt" class="is-error">
      <Icon icon="ic:round-warning" width="20" />
      {{ errorMessageInt }}
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
