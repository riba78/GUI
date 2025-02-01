import {
  BaseInput,
  BaseCard, // Renamed from Card
  BaseDropdown,
  BaseButton,
  BaseCheckbox,
} from "@/components/index";

/**
 * Register global components and use them as a plugin in Vue
 */
const GlobalComponents = {
  install(app) {
    app.component("BaseInput", BaseInput);
    app.component("BaseCard", BaseCard); // Updated name
    app.component("BaseDropdown", BaseDropdown);
    app.component("BaseButton", BaseButton);
    app.component("BaseCheckbox", BaseCheckbox);
  },
};

export default GlobalComponents;
