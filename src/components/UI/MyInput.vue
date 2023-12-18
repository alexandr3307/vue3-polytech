<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script>
  export default {
    name: "MyInput",
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
</script>

<style scoped>
  .input {
    width: 350px;
    padding: 30px;
    margin-top: 10px;
  }
  input { border-radius: 5px; border: 0; font-size: 16px; color: #9a9a9a; background: #F6F6F6 }
</style>