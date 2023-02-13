import { computed } from "vue";
import { useStore } from "vuex";

export const useToast = () => {
  const store = useStore();
  const toast = computed(() => store.state.toast.toasts);

  const triggerToast = (message, type = "success") => {
    store.dispatch("toast/triggerToast", message, type);
  };

  return {
    triggerToast,
    toast,
  };
};
