<template>
  <section class="user-dashboard">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h3 class="mb-0 text-white">Company Dashboard</h3>
              <button class="btn btn-success btn-sm" @click="addNewRow">Add New</button>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table align-items-center table-flush">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">Company Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Assigned Twilio Phone Number</th>
                      <th scope="col">End-User Phone Number(s)</th>
                      <th scope="col">Account Status</th>
                      <th scope="col">Subscription Plan</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(company, index) in companies" :key="index">
                      <td>
                        <input
                          v-if="editIndex === index"
                          v-model="company.name"
                          type="text"
                          class="form-control"
                          placeholder="Enter Company Name"
                        />
                        <span v-else>{{ company.name }}</span>
                      </td>
                      <td>
                        <input
                          v-if="editIndex === index"
                          v-model="company.address"
                          type="text"
                          class="form-control"
                          placeholder="Enter Address"
                        />
                        <span v-else>{{ company.address }}</span>
                      </td>
                      <td>
                        <input
                          v-if="editIndex === index"
                          v-model="company.twilioPhone"
                          type="text"
                          class="form-control"
                          placeholder="Enter Twilio Phone"
                        />
                        <span v-else>{{ company.twilioPhone }}</span>
                      </td>
                      <td>
                        <input
                          v-if="editIndex === index"
                          v-model="company.userPhone"
                          type="text"
                          class="form-control"
                          placeholder="Enter User Phone"
                        />
                        <span v-else>{{ company.userPhone }}</span>
                      </td>
                      <td>
                        <input
                          v-if="editIndex === index"
                          v-model="company.status"
                          type="text"
                          class="form-control"
                          placeholder="Enter Status"
                        />
                        <span v-else>{{ company.status }}</span>
                      </td>
                      <td>
                        <input
                          v-if="editIndex === index"
                          v-model="company.subscription"
                          type="text"
                          class="form-control"
                          placeholder="Enter Subscription Plan"
                        />
                        <span v-else>{{ company.subscription }}</span>
                      </td>
                      <td>
                        <button
                          class="btn btn-info btn-sm"
                          @click="editRow(index)"
                        >
                          {{ editIndex === index ? "Save" : "Edit" }}
                        </button>
                        <button
                          v-if="editIndex === index"
                          class="btn btn-warning btn-sm"
                          @click="cancelEdit()"
                        >
                          Cancel
                        </button>
                        <button
                          v-if="editIndex !== index && !isRowEmpty(company)"
                          class="btn btn-danger btn-sm"
                          @click="deleteRow(index)"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserDashboard",
  data() {
    return {
      companies: [], // Starts empty
      editIndex: null,
    };
  },
  methods: {
    addNewRow() {
      this.companies.push({
        name: "",
        address: "",
        twilioPhone: "",
        userPhone: "",
        status: "",
        subscription: "",
      });
      this.editIndex = this.companies.length - 1; // Automatically set to edit mode
    },
    editRow(index) {
      if (this.editIndex === index) {
        this.editIndex = null; // Save changes
      } else {
        this.editIndex = index; // Enable edit mode
      }
    },
    cancelEdit() {
      this.editIndex = null; // Cancel edit mode
    },
    deleteRow(index) {
      this.companies.splice(index, 1); // Remove row at the given index
    },
    isRowEmpty(company) {
      // Checks if all fields in the row are empty
      return (
        !company.name &&
        !company.address &&
        !company.twilioPhone &&
        !company.userPhone &&
        !company.status &&
        !company.subscription
      );
    },
  },
};
</script>

<style scoped>
.user-dashboard {
  min-height: 100vh;
  background-color: #f6f9fc;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 0; /* Removed extra padding above the header */
}

.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.card-header {
  background-color: #324cdd;
  color: white;
  padding: 1rem 1.5rem;
  border-bottom: none;
}

.table {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-top: 1rem;
}

.table th {
  color: #344675;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
}

.table td {
  color: #525f7f;
  padding: 0.75rem;
}

.table tr:nth-child(even) {
  background-color: #f8f9fa;
}

.table tr:hover {
  background-color: #edf2f7;
}

.btn-info {
  background-color: #11cdef;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
}

.btn-info:hover {
  background-color: #0da6cb;
}

.btn-warning {
  background-color: #f5365c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
}

.btn-warning:hover {
  background-color: #d6304a;
}

.btn-success {
  background-color: #2dce89;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
}

.btn-success:hover {
  background-color: #27a97a;
}

.btn-danger {
  background-color: #f5365c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;
}

.btn-danger:hover {
  background-color: #d6304a;
}
</style>
