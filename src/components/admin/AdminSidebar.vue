<template>
  <side-bar>
    <sidebar-link to="/admin-dashboard" name="Dashboard" icon="tim-icons icon-chart-pie-36" />
    <sidebar-link to="/users" name="Users" icon="tim-icons icon-single-02" />
    <sidebar-link to="/settings" name="Settings" icon="tim-icons icon-settings" />
    <b-button @click="toggleSidebarMini">Toggle Mini Sidebar</b-button>
  </side-bar>
</template>

<script>
export default {
  methods: {
    toggleSidebarMini() {
      document.body.classList.toggle("sidebar-mini");
      localStorage.setItem("sidebarMini", document.body.classList.contains("sidebar-mini"));
    }
  },
  mounted() {
    if (localStorage.getItem("sidebarMini") === "true") {
      document.body.classList.add("sidebar-mini");
    }
  }
};
</script>

<style scoped>
/* Optional custom styles */
</style>
