<template>
  <!-- html코드가 들어감 -->
  <div>
    <!-- <div v-bind:class="nameClass">{{ name }}</div> -->
    <div :class="nameClass">{{ name }}</div>
    <input :type="type" v-bind:value="name" />
    <!-- <button class="btn btn-primary" v-on:click="updateName">Click</button> -->
    <button class="btn btn-primary" @click="updateName">Click</button>
  </div>
</template>

<script>
import { ref } from "vue";
//import { reactive } from "vue";
export default {
  //자바스크립트 코드가 들어감
  setup() {
    const name = ref("KAZES");
    const type = ref("number");
    const nameClass = ref("");
    // const name = ref("KAZES");
    //let name = "KAZES";
    // const greeting = (name) => {
    //   return "Hello, " + name;
    // };
    // const greet = greeting(name);

    const updateName = () => {
      //name.value.id = 2;
      name.value = "Kazes!";
      type.value = "text";
      nameClass.value = "name";
      //console.log(name);
    };

    return {
      name,
      updateName,
      type,
      nameClass,
      //   greeting,
      //   greet,
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
