<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div style="position:absolute;">
    <RouterLink to="/auth">Авторизация</RouterLink>
  <RouterLink to="/">Формы</RouterLink>
  <RouterLink to="/update">Редактировать</RouterLink>
  <RouterLink to="/save">Сохраненная форма</RouterLink>
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
    font-weight: 700;
  }
  h4 {
    font-size: 24px;
    font-weight: 700;
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
  .container {
    display: flex;
    width: 1440px;
    height: 900px;
    background: #f6f6f6;
    &-divided {
      display: flex;
    }
    .item {
      font-weight: 500;
      padding-top: 16px;
    }
    .active {
      color: #3EA748;
    }
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 1s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
