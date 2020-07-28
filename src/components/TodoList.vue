<template>
  <ul class="mogo_todo_list">
    <li
      class="mogo_todo_item"
      v-for="todo in todos"
      v-bind:key="todo.id"
      @click="archiveIt(todo)">
      {{todo.text}}
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Todo from '../model/Todo';

@Component
export default class TodoList extends Vue {
  @Prop()
  todos!: [Todo]

  archiveIt(todo: Todo) {
    if (!todo.archived) {
      this.$store.commit('ARCHIVE_TODO', todo.id)
    } else {
      this.$store.commit('ACTIVATE_TODO', todo.id)
    }
  }
}
</script>

<style lang="scss">
.mogo_todo_list {
  list-style: none;
  padding: 0;
}

.mogo_todo_item {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #c3c3c3;
}
</style>
