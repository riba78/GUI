<template>
  <div class="admin-dashboard">
    <!-- Sidebar Section -->
    <AdminSidebar /> <!-- Sidebar imported from the components directory -->

    <!-- Main Content -->
    <div class="main-content">
      <!-- Dashboard Sections -->
      <div class="dashboard-sections">
        <!-- User Information Panel -->
        <section>
          <h2>User Information Panel</h2>
          <!-- Dynamic admin details table -->
          <table class="user-info-table">
            <thead>
              <tr>
                <th>Field</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin Name</td>
                <td>John Doe</td> <!-- Replace with dynamic data -->
              </tr>
              <tr>
                <td>Last Login</td>
                <td>2025-01-25 14:30</td> <!-- Replace with dynamic data -->
              </tr>
              <tr>
                <td>Role</td>
                <td>Super Admin</td> <!-- Replace with dynamic data -->
              </tr>
            </tbody>
          </table>
        </section>

        <!-- Other Sections -->
        <section>
          <h2>End User Management</h2>
          <!-- Placeholder for future content -->
        </section>
        <section>
          <h2>Order Management</h2>
          <!-- Placeholder for future content -->
        </section>
        <section>
          <h2>Subscription Management</h2>
          <!-- Placeholder for future content -->
        </section>
        <section>
          <h2>Content Management System</h2>
          <!-- Placeholder for future content -->
        </section>
        <section>
          <h2>Settings Panel</h2>
          <!-- Placeholder for future content -->
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/admin/AdminSidebar.vue"; // Import Sidebar component from the components directory

export default {
  name: "AdminDashboard",
  components: {
    AdminSidebar, // Register the AdminSidebar component
  },
};
</script>

<style scoped>
/* Overall Layout */
.admin-dashboard {
  display: flex; /* Flexbox for sidebar and main content */
  min-height: 100vh; /* Full viewport height */
}

/* Main Content Area */
.main-content {
  flex: 1; /* Occupies remaining space after sidebar */
  display: flex;
  flex-direction: column; /* Stack sections vertically */
  padding: 20px;
  background: linear-gradient(to bottom, #172b4d, #1a202c); /* Gradient background */
}

/* Dashboard Sections */
.dashboard-sections {
  overflow-y: auto; /* Scrollable content */
  margin-bottom: 60px; /* Avoids footer overlap */
}

/* Section Styling */
section {
  margin-bottom: 40px; /* Spacing between sections */
  background: #2dce89; /* Green background */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  color: white;
}

/* User Information Table */
.user-info-table {
  width: 100%; /* Full width table */
  border-collapse: collapse; /* Remove gaps between cells */
}

.user-info-table th,
.user-info-table td {
  padding: 10px; /* Cell padding */
  text-align: left; /* Left-aligned text */
  border: 1px solid #ccc; /* Light gray borders */
}

.user-info-table th {
  background: #172b4d; /* Darker blue for header */
  color: white;
}

.user-info-table td {
  background: white; /* White background for table cells */
  color: #333; /* Dark text */
}
</style>
