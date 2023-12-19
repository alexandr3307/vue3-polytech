<template>
  <div class="fields-container">
    <h3>Поля</h3>
    <div class="field-container">
      <h4>Скрытые поля</h4>
      <MyButton variant="outline-dashed">Добавить поле <img src="@/assets/plus.svg" alt="plus"></MyButton>
    </div>
    <div class="field-container">
      <h4>Поля</h4>
      <transition-group name="list" tag="p">
        <div v-for="(item, index) in fields" :key="index" class="field list-item">
        <div class="delete-string">
          <span>{{ item.name }}</span>
          <span class="delete-span" @click="deleteClickedField(item.id)">Удалить поле</span>
        </div>
        <MyInput variant="white" v-model="item.name" type="text" :placeholder="item.name"></MyInput>
        <MyCheckbox label="Сделать поле обязательным" v-model="item.required" :value="item"></MyCheckbox>
      </div>
      </transition-group>
      <div class="buttons">
        <MyButton variant="outline-dashed" @click="newField">Добавить поле <img src="@/assets/plus.svg" alt="plus"></MyButton>
        <MyButton variant="outline-dashed">Добавить страницу формы <img src="@/assets/plus.svg" alt="plus"></MyButton>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
  import MyButton from './UI/MyButton.vue'
  import MyInput from './UI/MyInput.vue'
  import MyCheckbox from './UI/MyCheckbox.vue'
  export default {
    name: 'FieldsRedactor',
    components: { MyCheckbox, MyInput, MyButton },
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        fields: (state) => state.fields
      })
    },
    methods: {
      ...mapMutations(['deleteField', 'addNewField']),
      deleteClickedField(id) {
        this.deleteField(id);
      },
      newField() {
        this.addNewField({
          name: "Новое поле",
          required: false,
          id: Math.random().toString(16).slice(2),
          content: '',
        })
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