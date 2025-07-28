<script setup lang="ts">
import { toRefs } from "vue";
import { useFormProvider } from "../../composables/use-form";

const props = defineProps<{
  validator: unknown;
}>();

const emit = defineEmits<{
  submit: [];
}>();

const { validator } = toRefs(props);

useFormProvider(validator);
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <slot />
  </form>
</template>
