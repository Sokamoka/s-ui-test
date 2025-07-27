<script setup lang="ts">
defineProps<{
  label?: string;
}>();
</script>

<template>
  <div class="s-badge">
    <slot>
      {{ label }}
    </slot>
  </div>
</template>

<style scoped>
.s-badge {
  padding-inline: 1rem;
  padding-block: 0.5rem;
  display: inline-flex;
  align-items: center;
  border-radius: var(--s-input-border-radius);
  box-shadow: inset 0 0 0 1px var(--s-input-border-color);
  background-color: var(--s-input-disabled-bg-color);
  color: var(--s-input-placeholder-color);
}
</style>
