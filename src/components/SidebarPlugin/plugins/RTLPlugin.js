import { reactive } from "vue";

const RTLState = reactive({
  isRTL: false,
  enableRTL() {
    this.isRTL = true;
    document.body.classList.add("rtl", "menu-on-right");
    toggleBootstrapRTL(true);
  },
  disableRTL() {
    this.isRTL = false;
    document.body.classList.remove("rtl", "menu-on-right");
    toggleBootstrapRTL(false);
  }
});

function toggleBootstrapRTL(value) {
  for (let i = 0; i < document.styleSheets.length; i++) {
    let styleSheet = document.styleSheets[i];
    if (styleSheet.href && styleSheet.href.endsWith("bootstrap-rtl.css")) {
      styleSheet.disabled = !value;
    }
  }
}

// ✅ Register RTL state as a Vue 3 plugin
export default {
  install(app) {
    app.config.globalProperties.$rtl = RTLState;
  }
};
