<template>
  <div class="checkbox-container" :class="customClass">
    <input type="checkbox" v-model="model" :value="value" />
    <span>{{ label }}</span>
  </div>
</template>

<script>
  export default {
    name: "MyCheckbox",
    props:{
      modelValue: { type: [Array, Boolean] },
      value: { type: [Boolean, Object] },
      label: { type: String },
      customClass: { type: String }
    },
    computed:{
      model:{
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        }
      }
    }
  };
</script>

<style scoped lang="scss">
.checkbox-container {
  display: flex;
  margin-top: 10px;
}
input {
  min-width: 16px;
}
  span {
    margin-left: 20px;
    font-weight: 700;
  }
  .gray {
    color: #acacac;

  }
</style>