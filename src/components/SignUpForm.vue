<template>
  <!-- Sign-Up Form Container -->
  <!-- This block contains the entire form and centers it within the viewport -->
  <div class="form-container">
    <div class="form-card">
      <!-- Title of the form -->
      <h2>Sign Up</h2>

      <!-- Form Section -->
      <form @submit.prevent="submitForm">
        <!-- Name Input Field -->
        <!-- Allows the user to input their name or nickname -->
        <div class="form-group">
          <label>Type Name or Nickname</label>
          <input
            type="text"
            placeholder="Name or Nickname"
            v-model="name"
            @input="clearError"
            :class="{ 'input-error': nameError }"
            required
          />
          <!-- Error message for invalid name -->
          <p v-if="nameError" class="error-message">{{ nameError }}</p>
        </div>

        <!-- Email Input Field -->
        <!-- Allows the user to input their email address -->
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            @input="clearError"
            :class="{ 'input-error': emailError }"
            required
          />
          <!-- Error message for invalid email -->
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>

        <!-- Password Input Field -->
        <!-- Allows the user to input their password -->
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            @input="clearError"
            :class="{ 'input-error': passwordError }"
            required
          />
          <!-- Error message for invalid password -->
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
        </div>

        <!-- Confirm Password Input Field -->
        <!-- Ensures the user re-enters their password correctly -->
        <div class="form-group">
          <label>Re-enter Password</label>
          <input
            type="password"
            placeholder="Re-enter Password"
            v-model="confirmPassword"
            @input="clearError"
            :class="{ 'input-error': confirmPasswordError }"
            required
          />
          <!-- Error message if passwords do not match -->
          <p v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</p>
        </div>

        <!-- Submit Button -->
        <!-- Submits the form to create a new account -->
        <button class="sign-up-btn" type="submit" :disabled="loading">
          {{ loading ? "Signing Up..." : "Sign Up" }}
        </button>
      </form>

      <!-- General Error Message -->
      <!-- Displays any server-side or general errors -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <!-- Redirect to Sign In -->
      <!-- Provides a link for users who already have an account -->
      <p>Already have an account?</p>
      <button class="sign-in-btn" @click="goToSignIn">Sign In</button>
    </div>
  </div>
</template>

<script>
import api from "@/api"; // Axios instance for making API calls

export default {
  name: "SignUpForm", // Component name
  data() {
    return {
      name: "", // Stores the user's name
      email: "", // Stores the user's email
      password: "", // Stores the user's password
      confirmPassword: "", // Stores the re-entered password for confirmation
      nameError: "", // Validation error message for the name field
      emailError: "", // Validation error message for the email field
      passwordError: "", // Validation error message for the password field
      confirmPasswordError: "", // Validation error message for the confirm password field
      errorMessage: "", // General error message from the server
      loading: false, // Tracks whether the form submission is in progress
    };
  },
  methods: {
    /**
     * Clears all error messages when inputs are modified.
     * Purpose: Ensures that the form doesn't show outdated error messages after the user starts making changes.
     */
    clearError() {
      this.nameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";
      this.errorMessage = "";
    },

    /**
     * Validates the form inputs before submission.
     * @returns {boolean} True if all inputs are valid, false otherwise.
     * Purpose: Prevents the submission of invalid or incomplete data to the backend.
     */
    validateInputs() {
      let valid = true;

      if (!this.name) {
        this.nameError = "Name is required.";
        valid = false;
      }

      if (!this.email) {
        this.emailError = "Email is required.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.emailError = "Invalid email format.";
        valid = false;
      }

      if (!this.password) {
        this.passwordError = "Password is required.";
        valid = false;
      }

      if (!this.confirmPassword) {
        this.confirmPasswordError = "Please re-enter your password.";
        valid = false;
      } else if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Passwords do not match.";
        valid = false;
      }

      return valid;
    },

    /**
     * Submits the form data to the backend API.
     * Purpose: Handles account creation by sending the form inputs to the backend.
     * - Clears errors before submission.
     * - Displays a loading state during submission.
     * - Handles success or error responses from the backend.
     */
    async submitForm() {
      this.clearError(); // Clear any previous error messages
      if (!this.validateInputs()) return; // Stop if validation fails

      this.loading = true; // Set loading state
      try {
        // Call the sign-up API endpoint
        const response = await api.post("/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        // Display success message and redirect to the login page
        alert("Sign-up successful!");
        console.log("Response:", response.data);
        this.$router.push({ name: "Login" });
      } catch (error) {
        // Display error messages from the backend
        this.errorMessage = error.response?.data?.detail || "An error occurred.";
      } finally {
        // Reset loading state
        this.loading = false;
      }
    },

    /**
     * Redirects the user to the Sign In page.
     * Purpose: Provides a link for users who already have an account to log in.
     */
    goToSignIn() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
/* Form container styles */
/* Centers the form on the screen */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* Card-like appearance for the form */
.form-card {
  background: white;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
}

/* Input field group spacing */
.form-group {
  margin-bottom: 15px;
}

/* Input field styles */
input {
  width: 92%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Highlights invalid inputs */
.input-error {
  border-color: red;
}

/* Error message styling */
.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

/* Sign-up button styles */
.sign-up-btn {
  width: 100%;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sign-up-btn:hover {
  background-color: #218838;
}

/* Sign-in button styles */
.sign-in-btn {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
}

.sign-in-btn:hover {
  background-color: #0056b3;
}
</style>
