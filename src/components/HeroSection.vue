<template>
  <!-- Hero Section -->
  <section class="hero">
    <!-- Hero section container -->
    <div class="hero-content">
      <!-- Main heading for the hero section -->
      <h1>Welcome to AI Receptionist</h1>
      <!-- Supporting text below the heading -->
      <p>A smart assistant designed to streamline your workflow.</p>
      <!-- Button to navigate to the features page -->
      <router-link to="/features" class="hero-btn">Explore Features</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection", // Component name for the Hero Section
};
</script>

<style scoped>
/* Hero Section Styles */
.hero {
  /* Flexbox layout to center the content */
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  height: 200px; /* Fixed height for the hero section */
  //background: linear-gradient(90deg, #172b4d, #324cdd); /* Optional gradient background */
  color: white; /* White text for contrast */
  text-align: center; /* Centers the text horizontally */
}

.hero-content h1 {
  font-size: 36px; /* Large font size for the main heading */
  margin-bottom: 10px; /* Adds spacing below the heading */
}

.hero-content p {
  font-size: 18px; /* Slightly smaller font size for the description */
  margin-bottom: 20px; /* Adds spacing below the description text */
}

.hero-btn {
  /* Styling for the button/link */
  padding: 10px 20px; /* Adds internal spacing to the button */
  background-color: white; /* White background for visibility */
  color: #324cdd; /* Blue text color to match branding */
  border: none; /* Removes default border */
  border-radius: 5px; /* Adds rounded corners */
  text-decoration: none; /* Removes underline from the link */
  font-size: 16px; /* Sets a readable font size */
}

.hero-btn:hover {
  /* Hover effect for the button */
  background-color: #d3d3d3; /* Changes the background color on hover */
}
</style>
