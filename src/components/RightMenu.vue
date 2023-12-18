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
  width: 825px;
  margin: 80px auto;
}
</style>