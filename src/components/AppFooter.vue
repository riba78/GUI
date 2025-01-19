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
.footer {
  background-color: transparent; /* Matches the background design */
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 14px;
  position: fixed; /* Fixes the footer at the bottom */
  bottom: 0; /* Aligns it to the bottom of the viewport */
  width: 100%; /* Ensures it spans the full width */
  z-index: 1; /* Keeps it above background elements */
}

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
