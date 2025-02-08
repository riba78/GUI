import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DashboardPlugin from "@/components/SidebarPlugin/plugins/blackDashboard.js";
import "./assets/styles/global.scss"; // ✅ Import global styles

// Create Vue app
const app = createApp(App);

// Use plugins
app.use(router);
app.use(DashboardPlugin);

// Mount the app
app.mount("#app");
