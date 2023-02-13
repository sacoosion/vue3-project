import { createStore } from "vuex";
import modules from "./modules";

export default createStore({
  modules, //modules: modules, 생략
});
