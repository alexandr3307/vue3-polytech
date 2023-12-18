<template>
<div class="left-menu">
  <div class="left-menu-content">
    <div class="left-menu-img"></div>
    <div class="menu">
      <slot name="menu"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'LeftMenu'
  }
</script>

<style scoped lang="scss">
.left-menu {
  width: 420px;
  background: #ffffff;
  border-radius: 10px;
  &-content {
    margin-left: 180px;
  }
  &-img {
    background-image: url("./src/assets/logo-poly.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: 117px;
    height: 30px;
    margin-top: 80px;
  }
  .menu {
    margin-top: 14px;
  }
  .buttons {
    margin-top: 300px;
  }
}
</style>