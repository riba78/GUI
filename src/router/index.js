import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import UserDashboard from "@/components/Dashboard.vue";

const routes = [
  {
    path: "/", // Landing Page
    name: "Home",
    components: {
      header: AppHeader,
      default: HeroSection,
      footer: AppFooter,
    },
  },
  {
    path: "/login", // Login Page
    name: "Login",
    components: {
      header: AppHeader,
      default: SignInForm,
      footer: AppFooter,
    },
  },
  {
    path: "/signup", // Signup Page
    name: "SignUp",
    components: {
      header: AppHeader,
      default: SignUpForm,
      footer: AppFooter,
    },
  },
  {
    path: "/features", // Features Page
    name: "Features",
    components: {
      header: AppHeader,
      default: HeroSection,
      footer: AppFooter,
    },
  },
  {
      path: "/about",
      name: "About",
      //component: () => import("@/components/About.vue"), // Placeholder component
   },
  {
      path: "/terms",
      name: "Terms",
      //component: () => import("@/components/Terms.vue"), // Placeholder component
    },
  {
    path: "/dashboard", // Dashboard Page
    name: "UserDashboard",
    component: UserDashboard,
    meta: { requiresAuth: true }, // Add meta field to require authentication
  },
  {
      path: "/privacy",
      name: "Privacy",
      //component: () => import("@/components/Privacy.vue"), // Placeholder component
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists in localStorage
  console.log("Route requires auth:", to.meta.requiresAuth); // Log whether the route requires authentication
  console.log("User is authenticated:", isAuthenticated); // Log if the user is authenticated

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    // If route requires auth and user is not authenticated
    console.log("Redirecting to login..."); // Debugging log
    next({ name: "Login" }); // Redirect to login page
  } else {
    next(); // Allow access
  }
});

export default router;
