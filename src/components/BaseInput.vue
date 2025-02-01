<template>
    <div class="form-group"
         :class="[
       {'input-group': hasIcon},
       {'has-danger': error},
       {'focused': focused},
       {'input-group-alternative': alternative},
       {'has-label': label || $slots.label},
       {'has-success': valid === true},
       {'has-danger': valid === false}
       ]">
        <slot name="label">
            <label v-if="label" :class="labelClasses">
                {{ label }}
                <span v-if="required">*</span>
            </label>
        </slot>

        <div v-if="addonLeftIcon || $slots.addonLeft" class="input-group-prepend">
          <span class="input-group-text">
            <slot name="addonLeft">
              <i :class="addonLeftIcon"></i>
            </slot>
          </span>
        </div>

        <slot v-bind="slotData">
            <input
                    :value="value"
                    @input="updateValue"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-bind="$attrs"
                    class="form-control"
                    :class="[{'is-valid': valid === true}, {'is-invalid': valid === false}, inputClasses]"
                    aria-describedby="addon-right addon-left">
        </slot>

        <div v-if="addonRightIcon || $slots.addonRight" class="input-group-append">
          <span class="input-group-text">
              <slot name="addonRight">
                  <i :class="addonRightIcon"></i>
              </slot>
          </span>
        </div>

        <slot name="infoBlock"></slot>
        <slot name="helpBlock">
            <div class="text-danger invalid-feedback" style="display: block;" :class="{'mt-2': hasIcon}" v-if="error">
                {{ error }}
            </div>
        </slot>
    </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseInput",  // ✅ Updated to PascalCase for Vue best practices
  props: {
    required: Boolean,
    valid: {
      type: Boolean,
      default: undefined
    },
    alternative: Boolean,
    label: String,
    error: String,
    labelClasses: String,
    inputClasses: String,
    value: [String, Number],
    addonRightIcon: String,
    addonLeftIcon: String
  },
  data() {
    return {
      focused: false
    };
  },
  computed: {
    slotData() {
      return {
        focused: this.focused
      };
    },
    hasIcon() {
      return (
        this.$slots.addonRight ||
        this.$slots.addonLeft ||
        this.addonRightIcon ||
        this.addonLeftIcon
      );
    }
  },
  methods: {
    updateValue(evt) {
      this.$emit("update:value", evt.target.value);  // ✅ Vue 3 prefers "update:modelValue"
    },
    onFocus(evt) {
      this.focused = true;
      this.$emit("focus", evt);
    },
    onBlur(evt) {
      this.focused = false;
      this.$emit("blur", evt);
    }
  }
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
