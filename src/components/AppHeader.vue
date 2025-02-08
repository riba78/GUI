<template>
  <header class="app-header">
    <BaseNav>
      <!-- Brand Slot: Displays the app logo -->
      <template #brand>
        <div class="logo">AI Receptionist</div>
      </template>

      <!-- Content Header Slot: Navigation Links -->
      <template #content-header>
        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>

        <!-- Login Button -->
        <button v-if="!isLoggedIn" class="argon-login-button" @click="goToLogin">
          Login
        </button>

        <!-- Logout Button -->
        <button v-else class="argon-login-button" @click="handleLogout">
          Logout
        </button>
      </template>
    </BaseNav>
  </header>
</template>

<script>
import { inject } from "vue";
import BaseNav from "@/components/BaseNav.vue";

export default {
  name: "AppHeader",
  components: {
    BaseNav,
  },
  setup() {
    const isLoggedIn = inject("isLoggedIn");
    const goToLogin = inject("goToLogin");
    const handleLogout = inject("handleLogout");

    return {
      isLoggedIn,
      goToLogin,
      handleLogout,
    };
  },
};
</script>

<style scoped>
/* Header container */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 15px 30px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}

/* Logo styles */
.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 20px;
}

/* Header link styles */
.nav-links a {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 4px; /* Space for underline */
}

/* Add the hover effect - a sliding underline */
.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

/* Hover effect expands the underline */
.nav-links a:hover::after {
  width: 100%;
}

/* Login/Logout Button Styles */
.argon-login-button {
  background-color: #5e72e4;
  color: white;
  border: none;
  padding: 10px 20px;
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
