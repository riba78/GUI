// ❌ Removed unnecessary `createApp` import

// Import Sidebar components
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";

// Import global plugins and directives
import GlobalComponents from "@/components/SidebarPlugin/plugins/globalComponents.js";
import GlobalDirectives from "@/components/SidebarPlugin/plugins/globalDirectives.js";
import RTLPlugin from "@/components/SidebarPlugin/plugins/RTLPlugin.js";

// Import styles (Ensure these files exist)
import "@/assets/css/black-dashboard.css";
import "@/assets/css/nucleo-icons.css";
import "@/assets/sass/black-dashboard.scss"; // Ensure file exists
import "@/assets/demo/demo.css"; // Ensure file exists

// ✅ Renamed "Notify" to "NotificationPlugin" for better naming convention
import NotificationPlugin from "@/components/NotificationPlugin.vue"; // Ensure this file exists

export default {
  install(app) {
    // Register Sidebar components globally
    app.component("SideBar", SideBar);
    app.component("SidebarLink", SidebarLink);

    // Use global plugins
    app.use(GlobalComponents);
    app.use(GlobalDirectives);
    app.use(RTLPlugin);

    // ✅ Register Notification Plugin with proper naming
    if (NotificationPlugin) {
      app.component("NotificationPlugin", NotificationPlugin);
    }
  },
};
