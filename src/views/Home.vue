<template>
  <div class="home">
    <h1>Mogo TODO</h1>
    <TodoInput />
    <TodoList :todos="openTodos" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'Home',
  components: {
    TodoInput,
    TodoList
  },
  computed: {
    openTodos() {
      return this.$store.getters.openTodos
    }
  }
};
</script>
