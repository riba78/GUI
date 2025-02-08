<template>
  <div id="app">
    <!-- Background Effect -->
    <BackgroundCircles />
  
    <!-- AppHeader -->
    <header>
      <BaseNav>
        <!-- Brand Slot: Displays the app logo -->
        <template #brand>
          <div class="logo">LingoBoo</div>
        </template>

        <!-- Content Header Slot: Toggles between Login and Logout buttons -->
        <template #content-header>
          <button v-if="!isLoggedIn" class="argon-login-button" @click="goToLogin">
            Login
          </button>
          <button v-else class="argon-login-button" @click="handleLogout">
            Logout
          </button>
        </template>
      </BaseNav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view :userNick="userNick" />
    </main>

    <!-- AppFooter -->
    <AppFooter />
  </div>
</template>

<script>
import { ref, provide, watch, onMounted } from "vue";
import BaseNav from "@/components/BaseNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import BackgroundCircles from "@/components/BackgroundCircles.vue";

export default {
  name: "App",
  components: {
    BaseNav,
    AppFooter,
    BackgroundCircles,
  },
  setup() {
    // ✅ Reactive state to track authentication status
    const isLoggedIn = ref(!!localStorage.getItem("token"));

    // ✅ Reactive state for the logged-in user's nickname
    const userNick = ref("Guest");

    // ✅ Provide authentication state & username globally to child components
    provide("isLoggedIn", isLoggedIn);
    provide("userNick", userNick);

    // ✅ Fetch the logged-in user's nickname from localStorage or API on mount
    onMounted(async () => {
      if (isLoggedIn.value) {
        userNick.value = localStorage.getItem("username") || "Guest";
      }
    });

    // ✅ Watch for changes in authentication token and update username
    watch(
      () => localStorage.getItem("token"),
      async (newToken) => {
        isLoggedIn.value = !!newToken;

        // If token exists, fetch username from storage or API
        if (isLoggedIn.value) {
          userNick.value = localStorage.getItem("username") || "Guest";
        } else {
          userNick.value = "Guest"; // Reset username if logged out
        }
      }
    );

    // ✅ Redirect user to login page
    const goToLogin = () => {
      window.location.href = "/login";
    };

    // ✅ Logout user, clear session, and redirect to login
    const handleLogout = () => {
      localStorage.removeItem("token"); // Remove JWT token
      localStorage.removeItem("username"); // Remove stored username
      isLoggedIn.value = false;
      userNick.value = "Guest"; // Reset user nickname
      window.location.href = "/login"; // Redirect to login page
    };

    // ✅ Provide login/logout methods globally to child components
    provide("goToLogin", goToLogin);
    provide("handleLogout", handleLogout);

    return {
      isLoggedIn,
      userNick,
      goToLogin,
      handleLogout,
    };
  },
};
</script>

<style>
/* Global App Styles */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom, #172b4d, #1a202c);
}

main {
  position: relative;
  margin-top: 80px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Header Styles */
header {
  background-color: transparent;
  padding: 10px 20px;
  color: white;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Login/Logout Button Styles */
.argon-login-button {
  background-color: #5e72e4;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;
  transition: background-color 0.3s ease;
}

.argon-login-button:hover {
  background-color: #324cdd;
}
</style>
