<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" :class="variant" :placeholder="placeholder" />
</template>

<script>
  export default {
    name: "MyInput",
    props: {
      modelValue: [String, Number],
      placeholder: {
        default: '',
        type: String
      },
      variant: {
        default: 'default',
        type: String,
      }
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
</script>

<style scoped lang="scss">
  .default {
    width: 100%;
    max-width: 350px;
    padding: 30px;
    margin-top: 10px;
  }
  .white {
    width: 100%;
    padding: 30px;
    background: #ffffff;
  }

  input { border-radius: 5px; border: 0; font-size: 16px; color: #9a9a9a; background: #F6F6F6 }
</style>