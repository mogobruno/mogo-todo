<template>
  <button class="mogo_button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'MButton'
}
</script>

<style>
.mogo_button {
  height: 37px;
  color: white;
  background-color: #34495e;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 10px;
  outline: none;
  cursor: pointer;
}
</style>
