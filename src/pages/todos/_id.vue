<template>
  <div>
    <h1 class="text-red">To-Do Page</h1>
    <TodoForm :editing="true" />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";

export default {
  components: {
    TodoForm,
  },
};
</script>

<style></style>
