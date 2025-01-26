<template>
  <!-- Form Container -->
  <div class="form-container">
    <!-- Card-like structure for the form -->
    <div class="form-card">
      <!-- Title of the sign-in form -->
      <h2>Sign in with</h2>

      <!-- Social Media Sign-In Buttons -->
      <div class="auth-buttons">
        <button class="facebook-btn" @click="signInWithFacebook" :disabled="loading">
          <i class="fab fa-facebook"></i> Facebook
        </button>
        <button class="google-btn" @click="signInWithGoogle" :disabled="loading">
          <i class="fab fa-google"></i> Google
        </button>
      </div>

      <!-- Separator Text -->
      <p>Or sign in with credentials</p>

      <!-- Sign-In Form -->
      <form @submit.prevent="submitForm">
        <!-- Email Input -->
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
          <!-- Email Validation Error -->
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>

        <!-- Password Input -->
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
          <!-- Password Validation Error -->
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
        </div>

        <!-- Submit Button -->
        <button class="sign-in-btn" type="submit" :disabled="loading">
          {{ loading ? "Signing In..." : "Sign In" }}
        </button>
      </form>

      <!-- Backend Error Message -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <!-- Sign-Up Prompt -->
      <p>Don't have an account?</p>
      <button class="sign-up-btn" @click="goToSignUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import api from "@/api"; // Import Axios instance for API calls

export default {
  name: "SignInForm", // Component name
  data() {
    return {
      email: "", // User input for email
      password: "", // User input for password
      emailError: "", // Error message for email validation
      passwordError: "", // Error message for password validation
      errorMessage: "", // Backend error messages
      loading: false, // State for disabling buttons during API calls
    };
  },
  methods: {
    /**
     * Clears all error messages when inputs are modified.
     */
    clearError() {
      this.emailError = "";
      this.passwordError = "";
      this.errorMessage = "";
    },

    /**
     * Validates email and password inputs.
     * @returns {boolean} Whether the inputs are valid.
     */
    validateInputs() {
      let valid = true;

      // Validate email
      if (!this.email) {
        this.emailError = "Email is required.";
        valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.emailError = "Invalid email format.";
        valid = false;
      }

      // Validate password
      if (!this.password) {
        this.passwordError = "Password is required.";
        valid = false;
      }

      return valid;
    },

    /**
     * Handles the form submission.
     * Calls the API to log the user in and stores the token in localStorage.
     */
    async submitForm() {
      this.clearError(); // Clear previous errors

      if (!this.validateInputs()) return; // Stop if inputs are invalid

      this.loading = true; // Show loading state
      try {
        // Make a POST request to the login API
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });

        // Save the token to localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect to the dashboard page
        window.location.href = "/dashboard";
      } catch (error) {
        // Display error from the backend
        this.errorMessage = error.response?.data?.detail || "An error occurred.";
      } finally {
        // Stop loading state
        this.loading = false;
      }
    },

    /**
     * Dummy function to simulate signing in with Facebook.
     */
    signInWithFacebook() {
      alert("Sign in with Facebook clicked!");
    },

    /**
     * Dummy function to simulate signing in with Google.
     */
    signInWithGoogle() {
      alert("Sign in with Google clicked!");
    },

    /**
     * Redirects the user to the sign-up page.
     */
    goToSignUp() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<style scoped>
/* Container for centering the form */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

/* Card styling for the form */
.form-card {
  background: white;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
}

/* Styling for social sign-in buttons */
.auth-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.facebook-btn,
.google-btn {
  background: #f4f5f7;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 48%;
}

.facebook-btn:hover {
  background: #3b5998;
  color: white;
}

.google-btn:hover {
  background: #4285f4;
  color: white;
}

/* Styling for input fields and validation */
.form-group {
  margin-bottom: 15px;
}

input {
  width: 93%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
}

/* Styling for sign-in button */
.sign-in-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sign-in-btn:hover {
  background-color: #0056b3;
}

/* Styling for sign-up button */
.sign-up-btn {
  margin-top: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
}

.sign-up-btn:hover {
  background-color: #218838;
}
</style>
