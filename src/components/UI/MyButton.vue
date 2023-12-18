<template>
  <button class="btn" :class="[variant, size]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "MyButton",
    props: {
      variant: {
        default: 'default',
        type: String,
      },
      size: {
        default: 'lg',
        type: String
      }
    }
  };
</script>

<style scoped>
  .btn {
    cursor: pointer;
    border-radius: 10px;
    height: fit-content;
  }
  .lg {
    padding: 16px 60px;
  }
  .sm {
    padding: 15px 20px;
    font-size: 16px;

  }
  .sm1 {
    padding: 12px 43px;
  }
  .default {
    border: none;
    color: #ffffff;
    background: #3EA748;
  }
  .outline {
    color: #3EA748;
    border: 1px solid #3EA748;
    background: #ffffff;
  }
  .simple {
    color: #3EA748;
    background: #ffffff;
    border: none;
  }
</style>