<template>
  <div id="app">
    <!-- AppHeader -->
    <!-- Header section that contains navigation with branding and login/logout buttons -->
    <header>
      <BaseNav>
        <!-- Brand Slot: Displays the app logo -->
        <template #brand>
          <div class="logo">AI Receptionist</div>
        </template>
        <!-- Content Header Slot: Toggles between Login and Logout buttons based on user's authentication state -->
        <template #content-header>
          <button
            v-if="!isLoggedIn"
            class="argon-login-button"
            @click="goToLogin"
          >
            Login
          </button>
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

    <!-- Main Content -->
    <!-- Displays the content of the active route -->
    <main>
      <router-view />
    </main>

    <!-- AppFooter -->
    <!-- Footer section of the application -->
    <AppFooter />
  </div>
</template>

<script>
import { ref, provide, watch } from "vue"; // Vue composition API functions
import BaseNav from "@/components/BaseNav.vue"; // Navigation bar component
import AppFooter from "@/components/AppFooter.vue"; // Footer component

export default {
  name: "App",
  components: {
    BaseNav,
    AppFooter,
  },
  setup() {
    // Reactive variable to track if the user is logged in
    const isLoggedIn = ref(!!localStorage.getItem("token")); // Checks for the presence of a token in localStorage on load

    // Provide the reactive state globally to child components
    provide("isLoggedIn", isLoggedIn);

    // Watcher: Listens for changes to the "token" in localStorage and updates the isLoggedIn state
    watch(
      () => localStorage.getItem("token"), // Observes the "token" in localStorage
      (newToken) => {
        isLoggedIn.value = !!newToken; // Updates isLoggedIn based on the token's presence
      }
    );

    // Method: Redirects the user to the login page
    const goToLogin = () => {
      window.location.href = "/login"; // Uses a hard redirect for proper state synchronization
    };

    // Method: Logs out the user
    const handleLogout = () => {
      localStorage.removeItem("token"); // Removes the authentication token
      isLoggedIn.value = false; // Updates the authentication state
      window.location.href = "/login"; // Redirects to the login page
    };

    // Provide methods globally to child components
    provide("goToLogin", goToLogin);
    provide("handleLogout", handleLogout);

    // Return variables and methods to be used in the template
    return {
      isLoggedIn,
      goToLogin,
      handleLogout,
    };
  },
};
</script>

<style>
/* Global App Styles */
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif; /* Base font for the app */
  color: white; /* Text color */
}

#app {
  display: flex;
  flex-direction: column; /* Ensures header, main, and footer are stacked */
  min-height: 100vh; /* Full-height layout */
  background: linear-gradient(to bottom, #172b4d, #1a202c); /* Gradient background */
  position: relative;
  overflow: hidden; /* Prevents overflow issues */
}

main {
  position: relative;
  z-index: 1;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center; /* Centers the main content */
}

/* Header Styles */
header {
  background-color: transparent;
  padding: 10px 20px;
  color: white;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 24px; /* Font size for the logo */
  font-weight: bold; /* Makes the logo text bold */
}

/* Login/Logout Button Styles */
.argon-login-button {
  background-color: #5e72e4; /* Button background */
  color: white; /* Button text color */
  border: none;
  padding: 8px 16px; /* Padding for the button */
  font-size: 14px; /* Font size for the button text */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  margin-left: 15px; /* Spacing between buttons */
  transition: background-color 0.3s ease; /* Smooth hover effect */
}

.argon-login-button:hover {
  background-color: #324cdd; /* Darker blue on hover */
}
</style>
