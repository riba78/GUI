<template>
  <div id="app">
    <header class="app-header">
      <BaseNav>
        <template #brand>
          <div class="logo">AI Receptionist</div>
        </template>
        <template #content-header>
          <!-- Argon Login Button -->
          <button class="argon-login-button" @click="goToLogin">Login</button>
        </template>
      </BaseNav>
    </header>
    <!-- Render Dynamic Content -->
    <router-view />
  </div>
</template>

<script>
import BaseNav from "@/components/BaseNav.vue";

export default {
  name: "App",
  components: {
    BaseNav,
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
/* Global App Styles */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
  min-height: 100vh;
  background: linear-gradient(to bottom, #172b4d, #1a202c); /* Gradient background */
  position: relative; /* Enables pseudo-elements for background circles */
  overflow: hidden; /* Prevents overflow from pseudo-elements */
}

#app::before {
  content: ""; /* Small circle in the top-right corner */
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%; /* Makes it circular */
  top: 10%; /* Position from the top */
  right: 10%; /* Position from the right */
  z-index: 0; /* Places it behind the main content */
}

#app::after {
  content: ""; /* Large background circle */
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%; /* Makes it circular */
  bottom: 10%; /* Position from the bottom */
  left: 10%; /* Position from the left */
  z-index: 0; /* Places it behind the main content */
}

/* Updated Header Styling */
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent; /* Transparent header to blend with background */
  padding: 15px 30px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed; /* Sticks the header to the top */
  top: 0; /* Aligns it to the top */
  width: 100%; /* Spans the full width of the viewport */
  z-index: 10; /* Places header above other content */
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Styling for the Login Button */
.argon-login-button {
  background-color: #5e72e4; /* Argon blue */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px; /* Add spacing */
  transition: background-color 0.3s ease;
}

.argon-login-button:hover {
  background-color: #324cdd; /* Darker Argon blue */
}

main {
  position: relative;
  z-index: 1; /* Ensures main content is above the background */
  padding: 20px;
  margin-top: 80px; /* Adds space for the fixed header */
}
</style>
