<template>
  <div id="app">
    <!-- AppHeader -->
    <header>
      <BaseNav>
        <template #brand>
          <div class="logo">AI Receptionist</div>
        </template>
        <template #content-header>
          <button class="argon-login-button" @click="goToLogin">Login</button>
        </template>
      </BaseNav>
    </header>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- AppFooter -->
    <AppFooter />
  </div>
</template>

<script>
import BaseNav from "@/components/BaseNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    BaseNav,
    AppFooter,
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
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%; /* Ensure full viewport height */
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
}

#app {
  display: flex;
  flex-direction: column; /* Stack header, main, and footer */
  min-height: 100vh; /* Full viewport height */
  background: linear-gradient(to bottom, #172b4d, #1a202c); /* Gradient background */
  position: relative; /* For pseudo-elements */
  overflow: hidden; /* Prevent overflow from pseudo-elements */
}

main {
  position: relative;
  z-index: 1;
  margin-top: 80px; /* Adjust to balance header spacing */
  margin-bottom: 40px; /* Add consistent bottom spacing if necessary */
  padding: 0; /* Remove padding if it's causing visual imbalance */
  display: flex;
  justify-content: center;
  align-items: center;
}


/* Header Styles */
header {
  background-color: transparent;
  padding: 10px 20px; /* Adjust header padding for balance */
  color: white;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

/* Footer Styles */
footer {
  background-color: transparent;
  text-align: center;
  padding: 10px 20px; /* Adjust footer padding for balance */
  font-size: 14px;
  color: white;
}

/* Login Button Styles */
.argon-login-button {
  background-color: #5e72e4; /* Argon blue */
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px; /* Adds spacing between other elements */
  transition: background-color 0.3s ease;
}

.argon-login-button:hover {
  background-color: #324cdd; /* Darker Argon blue */
}
</style>
