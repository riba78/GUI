import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router


// Create the app and use the router
const app = createApp(App);

app.use(router); // Register the router with the app
app.mount("#app"); // Mount the app to the DOM
