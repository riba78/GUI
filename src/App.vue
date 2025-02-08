<template>
  <div id="app">
    <!-- Background Effect -->
    <BackgroundCircles />

    <!-- AppHeader -->
    <header>
      <BaseNav>
        <template #brand>
          <div class="logo">LingoBoo</div>
        </template>

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
    const userNick = ref("Guest");

    // ✅ Provide authentication state globally
    provide("isLoggedIn", isLoggedIn);
    provide("userNick", userNick);

    // ✅ Fetch username on mount
    onMounted(() => {
      if (isLoggedIn.value) {
        userNick.value = localStorage.getItem("username") || "Guest";
      }
    });

    // ✅ Watch for authentication state changes
    watch(
      () => localStorage.getItem("token"),
      (newToken) => {
        isLoggedIn.value = !!newToken;
        userNick.value = newToken ? localStorage.getItem("username") || "Guest" : "Guest";
      }
    );

    // ✅ Redirect to login
    const goToLogin = () => {
      window.location.href = "/login";
    };

    // ✅ Handle logout process
    const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      isLoggedIn.value = false;
      userNick.value = "Guest";
      window.location.href = "/login";
    };

    // ✅ Provide methods globally
    provide("goToLogin", goToLogin);
    provide("handleLogout", handleLogout);

    return { isLoggedIn, userNick, goToLogin, handleLogout };
  },
};
</script>

<style scoped>
/* Styles specific to App.vue */
</style>
