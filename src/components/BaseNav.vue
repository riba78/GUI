<template>
  <nav class="navbar">
    <slot name="brand"></slot> <!-- Brand logo or text -->
    <ul class="navbar-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/features">Features</router-link></li>
      <li><router-link to="/home">Service Plans & Payments</router-link></li>
    </ul>
    <slot name="content-header"></slot> <!-- Content header slot for Login Button -->
  </nav>
</template>

<script>
export default {
  name: "BaseNav",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #172b4d;
  padding: 10px 40px;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 80px;
  margin: 0;
  padding: 0;
}
.navbar-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}
.navbar-links a:hover {
  text-decoration: underline;
}
</style>
