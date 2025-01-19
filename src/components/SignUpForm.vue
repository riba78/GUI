<template>
  <div class="form-container">
    <div class="form-card">
      <h2>Sign Up</h2>
      <form @submit.prevent="submitForm">
        <!-- Name Field -->
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
          <p v-if="nameError" class="error-message">{{ nameError }}</p>
        </div>

        <!-- Email Field -->
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
          <p v-if="emailError" class="error-message">{{ emailError }}</p>
        </div>

        <!-- Password Field -->
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
          <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
        </div>

        <!-- Confirm Password Field -->
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
          <p v-if="confirmPasswordError" class="error-message">{{ confirmPasswordError }}</p>
        </div>

        <!-- Submit Button -->
        <button class="sign-up-btn" type="submit" :disabled="loading">
          {{ loading ? "Signing Up..." : "Sign Up" }}
        </button>
      </form>

      <!-- General Error Message -->
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <!-- Redirect to Sign In -->
      <p>Already have an account?</p>
      <button class="sign-in-btn" @click="goToSignIn">Sign In</button>
    </div>
  </div>
</template>

<script>
import api from "@/api"; // Import Axios instance

export default {
  name: "SignUpForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    // Clear error messages
    clearError() {
      this.nameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";
      this.errorMessage = "";
    },

    // Validate user inputs
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

    // Submit form data to the backend
    async submitForm() {
      this.clearError(); // Clear existing errors
      if (!this.validateInputs()) return; // Stop if validation fails

      this.loading = true; // Set loading state
      try {
        // Call the sign-up API
        const response = await api.post("/signup", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        // Handle successful sign-up
        alert("Sign-up successful!");
        console.log("Response:", response.data);

        // Redirect to the sign-in page
        this.$router.push({ name: "Login" });
      } catch (error) {
        // Display backend errors
        this.errorMessage = error.response?.data?.detail || "An error occurred.";
      } finally {
        // Reset loading state
        this.loading = false;
      }
    },

    // Redirect to the Sign In page
    goToSignIn() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
/* Styling remains consistent with SignInForm */
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.form-card {
  background: white;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 92%;
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
