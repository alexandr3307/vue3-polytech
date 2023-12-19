<template>
  <div class="fields-container">
    <h3>Поля</h3>
    <div class="field-container">
      <h4>Скрытые поля</h4>
      <MyButton variant="outline-dashed">Добавить поле <img src="@/assets/plus.svg" alt="plus"></MyButton>
    </div>
    <div class="field-container">
      <h4>Поля</h4>
      <div v-for="(item, index) in fields" :key="index" class="field">
        <div class="delete-string">
          <span>{{ item.name }}</span>
          <span class="delete-span">Удалить поле</span>
        </div>
        <MyInput variant="white" v-model="item.content" type="text" :placeholder="item.name"></MyInput>
        <MyCheckbox label="Сделать поле обязательным" v-model="item.required" :value="item"></MyCheckbox>
      </div>
      <div class="buttons">
        <MyButton variant="outline-dashed">Добавить поле <img src="@/assets/plus.svg" alt="plus"></MyButton>
        <MyButton variant="outline-dashed">Добавить страницу формы <img src="@/assets/plus.svg" alt="plus"></MyButton>
      </div>
    </div>
  </div>
</template>

<script>
  import MyButton from './UI/MyButton.vue'
  import MyInput from './UI/MyInput.vue'
  import MyCheckbox from './UI/MyCheckbox.vue'
  export default {
    name: 'FieldsRedactor',
    components: { MyCheckbox, MyInput, MyButton },
    data() {
      return {
        fields: [
          {
            name: "Фамилия",
            required: false,
            id: 'family',
            content: "",
          },
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

<style scoped>
  .fields-container {
    width: 80%;
    overflow-y:  scroll;
    margin: 80px 30px;
  }
.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.field-container {
  margin-top: 30px;
}
  .buttons {
    display: flex;
    flex-direction: column;
  }
  .delete-string {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
  }
  .delete-span {
    color: #3EA748;
    cursor: pointer;
  }
</style>