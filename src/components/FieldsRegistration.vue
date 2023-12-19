<template>
  <div class="fields-registration">
    <div class="fields-registration-form">
      <h4>Форма регистрации участников</h4>
      <div class="fields-registration-form-fields">
        <div v-for="(item, index) in fields" :key="index" class="fields-registration-form-field">
          <MyInput v-model="item.content" type="text" :placeholder="item.name"></MyInput>
        </div>
        <MyCheckbox text="gray" label="Нажимая кнопку «Отправить», я принимаю условия политики конфиденциальности" v-model="check" :value="check"></MyCheckbox>
        <MyButton>Отправить</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
  import MyButton from './UI/MyButton.vue'
  import MyInput from './UI/MyInput.vue'
  import MyCheckbox from './UI/MyCheckbox.vue'
  export default {
    name: 'FieldsRegistration',
    components: { MyCheckbox, MyInput, MyButton },
    data() {
      return {
        check: false,
        fields: [
          {
            name: "Фамилия",
            required: false,
            id: 'family',
            content: "",
          },
          {
            name: "Имя",
            required: true,
            id: 'name',
            content: '',
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
.fields-registration {
  background: #3EA748;
  width:100%;
  &-form {
    margin-top: 88px;
    margin-left: 90px;
    margin-right: 90px;
    background: #ffffff;
    padding: 40px;
    border-radius: 20px;
  }
}
</style>