<script setup lang="ts"></script>

<template>
  <div class="s-input-group">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.s-input-group {
  display: inline-flex;

  :deep(.s-input) {
    z-index: 0;
  }

  :deep(:is(.s-input, .s-badge):not(:last-child)) {
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

  :deep(.s-input):not(:first-child):not(:last-child) .s-input-input {
    border-radius: 0;
  }
}
</style>
