import { ref, onUnmounted, computed } from "vue";
import { useStore } from "vuex";

export const useToast = () => {
  const store = useStore();
  const toastMessage = computed(() => store.state.toastMessage);
  const toastAlertType = computed(() => store.state.toastAlertType);
  const showToast = computed(() => store.state.showToast);
  const timeout = computed(() => store.state.timeout);
  //   const toastMessage = ref("");
  //   const toastAlertType = ref("");
  //   const showToast = ref(false);
  //   const timeout = ref(null);
  const triggerToast = (message, type = "success") => {
    // toastMessage.value = message;
    // toastAlertType.value = type;
    // showToast.value = true;
    // timeout.value = setTimeout(() => {
    //   toastMessage.value = "";
    //   toastAlertType.value = "";
    //   showToast.value = false;
    // }, 1000);
    store.dispatch("triggerToast", message, type);
  };

  onUnmounted(() => {
    clearTimeout(timeout.value);
  });

  return {
    toastMessage,
    toastAlertType,
    showToast,
    triggerToast,
  };
};
