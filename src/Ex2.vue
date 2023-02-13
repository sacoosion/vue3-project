<template>
  <div>
    <h2>To-Do List</h2>
    <!-- <input type="text" :value="name" @input="updateName" /> -->
    <input type="text" v-model="name" />
    <button class="btn btn-primary" @click="onSubmit">Click</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("KAZES");

    const onSubmit = () => {
      console.log(name.value);
    };

    // const updateName = (e) => {
    //   //console.log(e.target.value);
    //   name.value = e.target.value;
    // };

    return {
      name,
      onSubmit,
      //   updateName,
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
