<template>
  <div class="container">
    <h2>To-Do List</h2>
    <TodoSimpleForm />

    <div v-if="!todos.length">추가된 Todo가 없습니다.</div>
    <div v-for="(todo, index) in todos" :key="todo.id" class="card mt-2">
      <div class="card-body p-2 d-flex align-items-center">
        <div class="form-check flex-grow-1">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="todo.completed"
          />
          <!-- <label class="form-check-label" :style="todo.completed ? todoStyle : {}"          > -->
          <label class="form-check-label" :class="{ todo: todo.completed }">
            {{ todo.subject }}</label
          >
        </div>
        <div>
          <button class="btn btn-danger btn-sm" @click="deleteTodo(index)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TodoSimpleForm from "./components/TodoSimpleForm.vue";
export default {
  components: {
    TodoSimpleForm,
  },
  setup() {
    const todos = ref([]);
    // const todoStyle = {
    //   textDecoration: "line-through",
    //   color: "gray",
    // };

    const onSubmit = () => {
      //   if (todo.value === "") {
      //     hasError.value = true;
      //   } else {
      //     todos.value.push({
      //       id: Date.now(),
      //       subject: todo.value,
      //       completed: false,
      //     });
      //     hasError.value = false;
      //     todo.value = "";
      //   }
    };

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
    };

    return {
      todos,
      onSubmit,
      //   todoStyle,
      deleteTodo,
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
