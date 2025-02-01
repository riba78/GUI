import clickOutside from "@/directives/click-outside.js";

/**
 * Register global directives and use them as a plugin in Vue
 */
const GlobalDirectives = {
  install(app) {
    app.directive("click-outside", clickOutside);
  },
};

export default GlobalDirectives;
