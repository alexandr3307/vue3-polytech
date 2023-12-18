<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div style="position:absolute;">
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/auth">Auth</RouterLink>
  </div>
  <RouterView class="view" />
</template>

<style lang="scss">
  @font-face {
    font-family: 'Cera Pro';
    font-weight: 400;
    font-style: normal;
    src:
        url('./src/assets/cera-pro/CeraPro-Regular.woff2') format('woff2'),
        url('./src/assets/cera-pro/CeraPro-Regular.woff') format('woff');
  }
* {
  font-family: Cera Pro,serif;
}
  h3 {
    font-size: 40px;
    color: #000000;
  }
  #app {
    margin-left: auto;
    margin-right: auto;
  }
  body {
    background: #D6D6D6;
  }
  .text {
    color: #676767;
    a {
      color: #74bd93;
    }
  }
</style>
