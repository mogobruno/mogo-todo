<template>
  <input
    class="mogo_input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script lang="ts">
export default {
  name: 'MInput',
  props: ['value']
}
</script>

<style>
.mogo_input {
  height: 35px;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
  font-size: 16px;
  padding: 0 10px;
}
</style>
