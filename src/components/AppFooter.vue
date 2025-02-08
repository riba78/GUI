<template>
  <footer class="footer">
    <div class="footer-links">
      <router-link to="/about">About Us</router-link>
      <router-link to="/terms">Terms of Service</router-link>
      <router-link to="/privacy">Privacy Policy</router-link>
    </div>
    <p>&copy; 2025 AI Receptionist Service by vskorik. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
/* Footer container */
.footer {
  background-color: transparent;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Center footer links */
.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
