<template>
  <!-- Navigation Bar -->
  <nav class="navbar">
    <!-- Brand Slot -->
    <!-- Displays a brand logo or text, such as the app's name -->
    <slot name="brand"></slot>

    <!-- Navigation Links -->
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/features">Features</router-link></li>
      <li><router-link to="/service-plans-payments">Service Plans & Payments</router-link></li>
    </ul>

    <!-- Content Header Slot -->
    <!-- Allows additional content like a Login/Logout button to be inserted -->
    <slot name="content-header"></slot>
  </nav>
</template>

<script>
export default {
  name: "BaseNav", // Component name for the navigation bar
};
</script>

<style scoped>
/* Navigation Bar Styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 10px 40px;
  color: white;
}

/* Navigation Links Container */
.navbar-links {
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
}

/* Individual Navigation Links */
.navbar-links a {
  position: relative;
  color: #ffffff; /* Brighter white */
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  transition: color 0.3s ease-in-out;
}

/* Underline Effect */
.navbar-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

/* Expand Underline on Hover */
.navbar-links a:hover::after {
  width: 100%;
}

/* Lighten Text Color on Hover */
.navbar-links a:hover {
  color: #f8f9fa;
}
</style>
