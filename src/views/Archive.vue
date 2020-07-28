<template>
  <div class="home">
    <h1>Archived</h1>
    <TodoList :todos="archivedTodos" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Archive',
  components: {
    TodoList
  },
  computed: {
    archivedTodos() {
      return this.$store.getters.archivedTodos
    }
  }
};
</script>
