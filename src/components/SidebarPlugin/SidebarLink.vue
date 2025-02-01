<template>
  <li class="nav-item">
    <component
      :is="tag"
      class="nav-link"
      v-bind="$attrs"
      @click="hideSidebar"
    >
      <slot>
        <i v-if="icon" :class="icon"></i>
        <p>{{ name }}</p>
      </slot>
    </component>
  </li>
</template>

<script>
export default {
  name: "SidebarLink",
  inheritAttrs: false,
  inject: ["autoClose", "addLink", "removeLink"],
  props: {
    name: String,
    icon: String,
    tag: {
      type: String,
      default: "router-link",
    },
  },
  methods: {
    hideSidebar() {
      if (this.autoClose && this.$sidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    isActive() {
      return this.$el.classList.contains("active");
    },
  },
  mounted() {
    if (this.addLink) {
      this.addLink(this);
    }
  },
  beforeUnmount() {
    if (this.$el?.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    if (this.removeLink) {
      this.removeLink(this);
    }
  },
};
</script>
