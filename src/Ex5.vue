<template>
  <div class="container">
    <h4>count: {{ count }}</h4>
    <h4>double count computed: {{ doubleCountComputed }}</h4>
    <h4>double count method: {{ doubleCountMethod() }}</h4>
    <button @click="count++">AddOne</button>
    <h2>To-Do List</h2>
    <TodoSimpleForm @add-todo="addTodo" />

    <div v-if="!todos.length">추가된 Todo가 없습니다.</div>

    <TodoList
      :todos="todos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoSimpleForm,
    TodoList,
  },
  setup() {
    const todos = ref([]);

    const addTodo = (todo) => {
      console.log(todo);
      todos.value.push(todo);
    };

    const toggleTodo = (index) => {
      todos.value[index].completed = !todos.value[index].completed;
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    const count = ref(1);
    const doubleCountComputed = computed(() => {
      return count.value * 2;
    });
    const doubleCountMethod = () => {
      return count.value * 2;
    };

    return {
      todos,
      addTodo,
      deleteTodo,
      toggleTodo,
      count,
      doubleCountComputed,
      doubleCountMethod,
    };
  },
};
</script>

<style>
/* css설정 파일이 들어감 */
.todo {
  color: gray;
  text-decoration: line-through;
}
</style>
