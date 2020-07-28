<template>
  <form class="mogo_todo_input" @submit.prevent="createInput">
    <MInput class="mogo_todo_input__input" v-model="text" />
    <MButton class="mogo_todo_input__button" type="submit">Create TODO</MButton>
    <span class="mogo_todo_input__error">{{errorMessage}}</span>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import MInput from '@/base/MInput.vue';
import MButton from '@/base/MButton.vue';

@Component({
  components: {
    MInput,
    MButton
  }
})
export default class TodoInput extends Vue {
  text: string = ''
  errorMessage: string = ''

  createInput() {
    if (this.text) {
      this.$store.commit('ADD_TODO', this.text)
      this.text = ''
      this.errorMessage = ''
    } else {
      this.errorMessage = 'Can not create empty todo.'
    }
  }
}
</script>

<style lang="scss">
.mogo_todo_input {
  width: 100%;
  display: inline-grid;

  &__input {
    margin: 10px 0;
  }
}

.mogo_todo_input__error {
  padding: 10px;
  color: red;
}
</style>
