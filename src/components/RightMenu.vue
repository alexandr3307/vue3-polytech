<template>
  <div class="right-menu-container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'RightMenu'
  }
</script>

<style scoped lang="scss">
  .right-menu-container {
    display: flex;
    width: 100%;
    justify-content:space-between;
  }
</style>