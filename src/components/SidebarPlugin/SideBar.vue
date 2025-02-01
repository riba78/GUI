<template>
  <div class="sidebar" :data="backgroundColor">
    <!-- Sidebar Wrapper -->
    <div class="sidebar-wrapper" id="style-3">
      
      <!-- Logo and Username Section -->
      <div class="logo">
        <!-- Custom Logo -->
        <img :src="logoSrc" alt="Sidebar Logo" class="sidebar-logo" :style="{ width: logoSize, height: 'auto' }" />

        <!-- Display User Nickname -->
        <span class="simple-text logo-normal">
          {{ computedUserNick }}
        </span>
      </div>

      <!-- Sidebar Links -->
      <slot></slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="index"
            :to="link.path"
            :name="link.name"
            :icon="link.icon"
          />
        </slot>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, watch } from "vue";
import SidebarLink from "./SidebarLink.vue";

export default {
  name: "SideBar",
  components: {
    SidebarLink,
  },
  props: {
    userNick: {
      type: String,
      default: "Guest", // Default username if not provided
    },
    logoSrc: {
      type: String,
      default: require('@/assets/my-logo.png'), // Default logo path
    },
    logoSize: {
      type: String,
      default: "200px", // Default size (adjustable)
    },
    backgroundColor: {
      type: String,
      default: "vue",
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    // ✅ Compute `userNick` dynamically from props and localStorage
    const computedUserNick = computed(() => localStorage.getItem("username") || props.userNick || "Guest");

    // ✅ Watch for username changes in localStorage
    watch(() => localStorage.getItem("username"), (newNick) => {
      console.log("UserNick updated:", newNick);
    });

    return {
      computedUserNick,
    };
  },
};
</script>

<style scoped>
/* Sidebar styling */
.sidebar, {
  width: 250px;
  transition: width 0.3s ease-in-out;
}

/* Sidebar Mini Mode */
.sidebar-mini .sidebar {
  width: 80px;
}

/* Logo Section */
.logo {
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Customizable Logo */
.sidebar-logo {
  max-width: 100%; /* Ensures responsiveness */
}

/* User Nickname Styling */
.logo-normal {
  font-size: 18px;
  font-weight: bold;
  color: white;
  text-transform: capitalize;
  margin-top: 10px;
  display: block;
}
</style>
