<template>
  <!-- Main container for the admin dashboard -->
  <div class="admin-dashboard">
    
    <!-- Sidebar Component -->
    <side-bar :userNick="computedUserNick" :background-color="'green'" :sidebar-links="sidebarLinks" />

    <!-- Main content area -->
    <div class="main-content">
      <h2>Welcome, {{ computedUserNick }}!</h2>
      <p>AI Workplace</p>

      <!-- Cards inside the main content -->
      <div class="cards-container">
        
        <!-- First Card (AI Statistics) -->
        <BaseCard class="dashboard-card">
          <template #header>
            <h4 class="card-title">WhatsApp Receptionist</h4>
            <h6 class="card-subtitle text-muted"></h6> <!--Last Updates-->
          </template>
          <template #default>
            <p class="card-text">Get quick and friendly replies directly on WhatsApp whenever you message us!</p>
          </template>
          <template #footer>
            <a href="#" class="card-link">Configure</a>
          </template>
        </BaseCard>

        <!-- Second Card (Recent Activities) -->
        <BaseCard class="dashboard-card">
          <template #header>
            <h4 class="card-title">Voice Receptionist</h4>
            <h6 class="card-subtitle text-muted"></h6> <!--User Logs-->
          </template>
          <template #default>
            <p class="card-text">Handle phone calls and inquiries any time of day, all week long.</p>
          </template>
          <template #footer>
            <a href="#" class="card-link">Configure</a>
          </template>
        </BaseCard>

      </div>
    </div>

  </div>
</template>

<script>
import { computed } from "vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import BaseCard from "@/components/BaseCard.vue"; // ✅ Corrected Import Path

export default {
  name: "AdminDashboard",
  components: {
    SideBar,
    BaseCard, // ✅ Register the corrected card component
  },
  props: {
    userNick: {
      type: String,
      default: "Guest",
    },
  },
  setup(props) {
    const computedUserNick = computed(() => localStorage.getItem("username") || props.userNick || "Guest");
    return {
      computedUserNick,
    };
  },
  data() {
    return {
      sidebarLinks: [
        { path: "/admin", name: "AI Workplace", icon: "fas fa-users" },
        { path: "/admin/users", name: "AI Prompt", icon: "fas fa-user-cog" },
      ],
    };
  },
};
</script>

<style scoped>
/* Layout */
.admin-dashboard {
  display: flex;
  min-height: 20vh;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: transparent;
  color: white;
  text-align: center;
}

/* Card Container */
.cards-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}

/* Card Styling */
.dashboard-card {
  width: 20rem;
  background: #32325d;
  color: black;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 15px;
}

/* Responsive */
@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
