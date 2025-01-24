<template>
  <header class="app-header">
    <BaseNav>
      <!-- Brand Slot: Displays the app logo -->
      <template #brand>
        <div class="logo">AI Receptionist</div>
      </template>

      <!-- Content Header Slot: Toggles between Login and Logout buttons -->
      <template #content-header>
        <!-- Login Button: Appears when the user is not logged in -->
        <button
          v-if="!isLoggedIn"
          class="argon-login-button"
          @click="goToLogin"
        >
          Login
        </button>

        <!-- Logout Button: Appears when the user is logged in -->
        <button
          v-else
          class="argon-login-button"
          @click="handleLogout"
        >
          Logout
        </button>
      </template>
    </BaseNav>
  </header>
</template>

<script>
import { inject } from "vue"; // Import Vue's inject function for dependency injection
import BaseNav from "@/components/BaseNav.vue"; // Import the BaseNav component for navigation

export default {
  name: "AppHeader", // Component name
  components: {
    BaseNav, // Register the BaseNav component
  },
  setup() {
    /**
     * Inject global state and methods provided by the parent component
     */
    const isLoggedIn = inject("isLoggedIn"); // Reactive boolean indicating login state
    const goToLogin = inject("goToLogin"); // Method to redirect the user to the login page
    const handleLogout = inject("handleLogout"); // Method to log the user out and redirect to login

    // Return the injected variables and methods to use in the template
    return {
      isLoggedIn,
      goToLogin,
      handleLogout,
    };
  },
};
</script>

<style scoped>
/* Header Styling */

/* Main header container styling */
.app-header {
  display: flex; /* Aligns children horizontally */
  align-items: center; /* Vertically centers children */
  justify-content: space-between; /* Pushes brand and content header to opposite sides */
  background-color: transparent; /* Transparent background for the header */
  padding: 15px 30px; /* Padding for spacing */
  color: white; /* Text color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for a lifted effect */
  position: fixed; /* Fixed positioning for consistent placement */
  top: 0; /* Positions the header at the top */
  width: 100%; /* Full width */
  z-index: 10; /* Ensures the header appears above other elements */
}

/* Styling for the logo */
.logo {
  font-size: 24px; /* Font size for the logo text */
  font-weight: bold; /* Bold font for prominence */
}

/* Styling for the login/logout buttons */
.argon-login-button {
  background-color: #5e72e4; /* Primary blue background */
  color: white; /* White text */
  border: none; /* Removes the default border */
  padding: 10px 20px; /* Adds padding for a clickable area */
  font-size: 14px; /* Text size */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor for interactivity */
  margin-left: 15px; /* Space between buttons */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

/* Hover effect for the login/logout buttons */
.argon-login-button:hover {
  background-color: #324cdd; /* Darker blue on hover */
}
</style>
