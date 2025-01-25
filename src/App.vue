<template>
  <div id="app">
    <!-- Background Circles -->
    <BackgroundCircles />

    <!-- AppHeader -->
    <header>
      <BaseNav>
        <template #brand>
          <div class="logo">AI Receptionist</div>
        </template>
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
    <main>
      <router-view />
    </main>

    <!-- AppFooter -->
    <AppFooter />
  </div>
</template>

<script>
import { ref, provide, watch } from "vue";
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
    const isLoggedIn = ref(!!localStorage.getItem("token"));

    provide("isLoggedIn", isLoggedIn);

    watch(
      () => localStorage.getItem("token"),
      (newToken) => {
        isLoggedIn.value = !!newToken;
      }
    );

    const goToLogin = () => {
      window.location.href = "/login";
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      isLoggedIn.value = false;
      window.location.href = "/login";
    };

    provide("goToLogin", goToLogin);
    provide("handleLogout", handleLogout);

    return {
      isLoggedIn,
      goToLogin,
      handleLogout,
    };
  },
};
</script>

<style>
html,
body,
#app {
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
  position: relative;
  overflow: hidden;
}

main {
  position: relative;
  z-index: 1;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  background-color: transparent;
  padding: 10px 20px;
  color: white;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

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
