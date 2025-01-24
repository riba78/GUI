<template>
  <!-- Navigation Bar -->
  <nav class="navbar">
    <!-- Brand Slot -->
    <!-- Displays a brand logo or text, such as the app's name -->
    <slot name="brand"></slot>

    <!-- Navigation Links -->
    <ul class="navbar-links">
      <!-- Home Link -->
      <li><router-link to="/">Home</router-link></li>
      <!-- Features Link -->
      <li><router-link to="/features">Features</router-link></li>
      <!-- Service Plans and Payments Link -->
      <li><router-link to="/service plans & payments">Service Plans & Payments</router-link></li>
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
  display: flex; /* Aligns items horizontally */
  justify-content: space-between; /* Space between brand and other items */
  align-items: center; /* Vertically centers items */
  background-color: transparent; /* Transparent background for flexibility */
  padding: 10px 40px; /* Padding for spacing */
  color: white; /* White text for readability */
  font-size: 16px; /* Font size for links */
  font-weight: 500; /* Slightly bold for emphasis */
  text-decoration: none; /* Removes underline on links */
  transition: color 0.3s ease, transform 0.3s ease; /* Smooth hover effects */
}

/* Styles for the Navigation Links Container */
.navbar-links {
  list-style: none; /* Removes bullet points */
  display: flex; /* Displays links inline */
  gap: 80px; /* Spacing between links */
  margin: 0; /* Removes default margin */
  padding: 0; /* Removes default padding */
}

/* Styles for Individual Links */
.navbar-links a {
  color: white; /* White text color */
  text-decoration: none; /* Removes underline */
  font-size: 16px; /* Standard font size */
}

/* Hover Effects for Links */
.navbar-links a:hover {
  color: rgba(255, 255, 255, 0.8); /* Lightened white for hover effect */
  transform: scale(1.05); /* Slight enlargement on hover */
  text-decoration: none; /* Ensures no underline on hover */
}
</style>
