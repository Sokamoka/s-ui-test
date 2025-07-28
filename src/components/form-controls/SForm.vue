<script setup lang="ts">
defineProps<{
  validator: unknown;
}>();

const emit = defineEmits<{
  submit: [];
}>();
</script>

<template>
  <form @submit.prevent="emit('submit')">
    <slot />
  </form>
</template>

<!-- <style scoped></style> -->
