<template>
  <div>
    <div v-if="toggle">true</div>
    <div v-else>false</div>
    <button @click="onToggle">Toggle</button>
    <div class="container">
      <h2>To-Do List</h2>
      <form @submit.prevent="onSubmit">
        <div class="d-flex">
          <div class="flex-grow-1 mr-2">
            <input
              class="form-control"
              type="text"
              v-model="todo"
              placeholder="Type new to-do"
            />
          </div>
          <div>
            <button class="btn btn-primary" type="submit">Add</button>
          </div>
        </div>
        <div v-show="hasError" style="color: red">
          This field cannot be empty
        </div>
      </form>
      <!-- {{ todos }} -->
      <div v-for="todo in todos" :key="todo.id" class="card mt-2">
        <div class="card-body p-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="todo.completed"
            />
            <label class="form-check-label">{{ todo.subject }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const toggle = ref(false);
    const todo = ref("");
    const todos = ref([
      // { id: 1, subject: "휴대폰 사기" },
      // { id: 2, subject: "장보기" },
    ]);

    const hasError = ref(false);

    const onSubmit = () => {
      if (todo.value === "") {
        hasError.value = true;
      } else {
        todos.value.push({
          id: Date.now(),
          subject: todo.value,
          completed: false,
        });
        hasError.value = false;
        todo.value = "";
      }
    };

    const onToggle = () => {
      toggle.value = !toggle.value;
    };

    // const updateName = (e) => {
    //   //console.log(e.target.value);
    //   name.value = e.target.value;
    // };

    return {
      todo,
      todos,
      onSubmit,
      toggle,
      onToggle,
      hasError,
    };
  },
};
</script>

<style>
/* css설정 파일이 들어감 */
.name {
  color: red;
}
</style>
