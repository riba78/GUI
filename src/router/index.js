import { createRouter, createWebHistory } from "vue-router";
import HeroSection from "@/components/HeroSection.vue";
import SignInForm from "@/components/SignInForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import UserDashboard from "@/components/Dashboard.vue";

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
    name: "UserDashboard",
    component: UserDashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if trying to access a protected route
    next({ name: "Login" });
  } else if ((to.name === "Login" || to.name === "SignUp") && isAuthenticated) {
    // Prevent logged-in users from accessing login/signup pages
    next({ name: "UserDashboard" });
  } else {
    next();
  }
});

export default router;
