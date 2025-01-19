<template>
  <div class="form-container">
    <div class="form-card">
      <h2>Sign in with</h2>
      <div class="auth-buttons">
        <button class="facebook-btn" @click="signInWithFacebook" :disabled="loading">
          <i class="fab fa-facebook"></i> Facebook
        </button>
        <button class="google-btn" @click="signInWithGoogle" :disabled="loading">
          <i class="fab fa-google"></i> Google
        </button>
      </div>
      <p>Or sign in with credentials</p>
      <form @submit.prevent="submitForm">
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
        <button class="sign-in-btn" type="submit" :disabled="loading">
          {{ loading ? "Signing In..." : "Sign In" }}
        </button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p>Don't have an account?</p>
      <button class="sign-up-btn" @click="goToSignUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import api from "@/api"; // Import Axios instance

export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    clearError() {
      this.emailError = "";
      this.passwordError = "";
      this.errorMessage = "";
    },
    validateInputs() {
      let valid = true;
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
      return valid;
    },
    async submitForm() {
      this.clearError();
      if (!this.validateInputs()) return;

      this.loading = true;
      try {
        // Call the API for sign-in
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });

        // Handle successful login
        //alert("Sign-in successful!");
        this.$router.push({ name: "UserDashboard" });
        console.log("Response:", response.data);

        // Save token in localStorage for future use
        localStorage.setItem("token", response.data.token);

        // Redirect to another page, e.g., Dashboard
        this.$router.push({ name: "Dashboard" });
      } catch (error) {
        // Display error from the backend
        this.errorMessage = error.response?.data?.detail || "An error occurred.";
      } finally {
        // Reset loading state
        this.loading = false;
      }
    },
    signInWithFacebook() {
      alert("Sign in with Facebook clicked!");
    },
    signInWithGoogle() {
      alert("Sign in with Google clicked!");
    },
    goToSignUp() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<style scoped>
/* Styling remains unchanged */
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

.auth-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.facebook-btn,
.google-btn {
  background: #f4f5f7;
  border: none;
  padding: 10px 20px;
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
