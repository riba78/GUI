<template>
  <aside class="admin-sidebar">
    <!-- Logo Section -->
    <div class="sidebar-logo">
      <span>AI Receptionist</span>
    </div>

    <!-- Navigation Links -->
    <nav>
      <ul>
        <li>
          <router-link to="/admin" class="nav-link">
            <i class="fas fa-users"></i> User Information
          </router-link>
        </li>
        <li>
          <router-link to="/admin/users" class="nav-link">
            <i class="fas fa-user-cog"></i> End User Management
          </router-link>
        </li>
        <li>
          <router-link to="/admin/orders" class="nav-link">
            <i class="fas fa-shopping-cart"></i> Order Management
          </router-link>
        </li>
        <li>
          <router-link to="/admin/subscriptions" class="nav-link">
            <i class="fas fa-credit-card"></i> Subscriptions
          </router-link>
        </li>
        <li>
          <router-link to="/admin/content" class="nav-link">
            <i class="fas fa-edit"></i> Content Management
          </router-link>
        </li>
        <li>
          <router-link to="/admin/settings" class="nav-link">
            <i class="fas fa-cogs"></i> Settings
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "AdminSidebar",
};
</script>

<style scoped>
/* Sidebar Styling */
.admin-sidebar {
  width: 250px; /* Fixed width */
  height: calc(100vh - 60px); /* Full viewport height minus footer */
  background-color: #252f40; /* Dark background */
  color: white;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  padding: 20px;
  position: fixed; /* Fixed position relative to the viewport */
  top: 10; /* Start from the top */
  left: 0; /* Align to the left */
}

/* Logo Section */
.sidebar-logo {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.logo {
  width: 30px; /* Logo width */
  height: 30px; /* Logo height */
  margin-right: 10px;
}

/* Navigation Links */
nav ul {
  list-style: none; /* Remove bullet points */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

nav ul li {
  margin-bottom: 15px; /* Spacing between links */
}

.nav-link {
  color: white;
  text-decoration: none; /* Remove underline */
  font-size: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #324cdd; /* Blue background on hover */
}
</style>
