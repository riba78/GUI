import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import DashboardPlugin from "@/components/SidebarPlugin/plugins/blackDashboard.js"; // Ensure correct path

// Create Vue app
const app = createApp(App);

// Use plugins
app.use(router);
app.use(DashboardPlugin); // Register Black Dashboard Plugin

// Mount app
app.mount("#app");
