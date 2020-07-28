import Vue from 'vue';
import Vuex from 'vuex';

import Todo from '@/model/Todo'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      new Todo('Test Todo'),
      new Todo('Random TODO'),
      new Todo('Make a cake'),
      new Todo('Lunch time!! =D', true),
    ],
  },
  mutations: {
    'ADD_TODO': (state, text: string) => {
      console.log(text)
      state.todos.push(new Todo(text))
    },
    'ARCHIVE_TODO': (state, todoId: string) => {
      const todo = state.todos.find(todo => todo.id === todoId)
      if (todo) {
        todo.archived = true
      }
    },
    'ACTIVATE_TODO': (state, todoId: string) => {
      const todo = state.todos.find(todo => todo.id === todoId)
      if (todo) {
        todo.archived = false
      }
    }
  },
  getters: {
    openTodos: (state) => {
      return state.todos.filter(todo => !todo.archived)
    },
    archivedTodos: (state) => {
      return state.todos.filter(todo => todo.archived)
    }
  }
});
