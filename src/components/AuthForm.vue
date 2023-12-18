<template>
  <div class="auth">
    <div class="auth-form">
      <div class="auth-form-img"></div>
      <div class="auth-form-main">
        <h3 class="auth-form-main-title">
          Авторизация
        </h3>
        <div class="auth-form-main-inputs">
          <MyInput v-focus v-model="user.name" type="text" placeholder="Логин" />
          <MyInput v-focus v-model="user.password" type="password" placeholder="Пароль" />
        </div>
        <MyButton class="auth-form-main-button" @click="auth">
          Вход
        </MyButton>
      </div>
      <div class="auth-form-footer">
        <div class="text">
          Если возникла проблема, то можете написать <a href="">Алёне из Сибтеха</a>
        </div>
        <div class="text">С любовью, ваш <a href="">Сибтех</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyInput from './UI/MyInput.vue'
  import MyButton from './UI/MyButton.vue'
  export default {
    name: 'AuthForm',
    components: {
      MyButton,
      MyInput
    },
    data() {
      return {
        user: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      auth() {
        console.log(this.user.name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .auth {
    background-image: url("./src/assets/auth-background.png");
    height: 902px;
    background-repeat: no-repeat;
    width: 1440px;
    &-form {
      max-width: 620px;
      background: #ffffff;
      height: 100%;
      padding-left: 164px;
      padding-top: 80px;
      padding-bottom: 70px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      &-img {
        background-image: url("./src/assets/logo-poly.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 117px;
        height: 30px;
      }
      &-main {
        margin-top: 30px;
        &-button {
          margin-top: 50px;
        }
      }
      &-footer {
        margin-top: 280px;
        width: 260px;
      }
    }
  }
</style>