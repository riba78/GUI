<template>
  <section class="hero">
    <!-- Hero section container -->
    <div class="hero-content">
      <!-- Main heading for the hero section -->
      <h1>Welcome to AI Receptionist</h1>
      <!-- Supporting text below the heading -->
      <p>A smart assistant designed to streamline your workflow.</p>
      <!-- Router link to navigate to the features page -->
      <router-link to="/features" class="hero-btn">Explore Features</router-link>
    </div>
  </section>
</template>


<script>
export default {
  name: "HeroSection", // Component name for the hero section
};
</script>


<style scoped>
.hero {
  /* Flexbox layout to center content */
  display: flex;
  justify-content: center; /* Centers content horizontally */
  align-items: center; /* Centers content vertically */
  height: 200px; /* Sets a fixed height for the hero section */
  //background: linear-gradient(90deg, #172b4d, #324cdd); /* Gradient background */
  color: white; /* Sets the text color */
  text-align: center; /* Centers the text */
}

.hero-content h1 {
  font-size: 36px; /* Large font size for the main heading */
  margin-bottom: 10px; /* Adds space below the heading */
}

.hero-content p {
  font-size: 18px; /* Smaller font size for the description text */
  margin-bottom: 20px; /* Adds space below the description */
}

.hero-btn {
  /* Button styling */
  padding: 10px 20px; /* Adds padding inside the button */
  background-color: white; /* Sets a white background */
  color: #324cdd; /* Sets text color to match the gradient */
  border: none; /* Removes default button border */
  border-radius: 5px; /* Rounds the corners of the button */
  text-decoration: none; /* Removes underline for the link */
  font-size: 16px; /* Sets a readable font size */
}

.hero-btn:hover {
  /* Hover effect for the button */
  background-color: #d3d3d3; /* Changes background color on hover */
}
</style>
