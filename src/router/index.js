import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import SignInForm from "@/pages/SignInForm.vue";
import SignUpForm from "@/pages/SignUpForm.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import AdminDashboard from "@/pages/AdminDashboard.vue"; // For admin users
import UserDashboard from "@/pages/UserDashboard.vue"; // Create if needed for user dashboards

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      header: AppHeader,
      default: HeroSection,
      footer: AppFooter,
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      header: AppHeader,
      default: SignInForm,
      footer: AppFooter,
    },
  },
  {
    path: "/signup",
    name: "SignUp",
    components: {
      header: AppHeader,
      default: SignUpForm,
      footer: AppFooter,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem("role"); // Check user role in localStorage
      if (userRole === "admin") {
        next({ name: "AdminDashboard" });
      } else {
        next({ name: "UserDashboard" });
      }
    },
  },
  {
    path: "/dashboard/user",
    name: "UserDashboard",
    components: {
      header: AppHeader,
      default: UserDashboard, // Replace with your user-specific dashboard component
      footer: AppFooter,
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/admin",
    name: "AdminDashboard",
    components: {
      header: AppHeader,
      default: AdminDashboard,
      footer: AppFooter,
    },
    meta: { requiresAuth: true, isAdmin: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // Assume roles are stored as "user" or "admin"

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if trying to access a protected route
    next({ name: "Login" });
  } else if (to.meta.isAdmin && userRole !== "admin") {
    // Redirect non-admin users trying to access admin routes
    next({ name: "UserDashboard" });
  } else if ((to.name === "Login" || to.name === "SignUp") && isAuthenticated) {
    // Prevent logged-in users from accessing login/signup pages
    next({ name: "Dashboard" });
  } else {
    next();
  }
});

export default router;
