<template>
  <div class="container">
    <LeftMenu>
      <template v-slot:menu>
        <div class="back" @click="back">
          <img src="@/assets/arrow-left.svg" alt="plus" >
          Назад
        </div>
        <div v-for="(item, index) in menu" :key="index">
          <div class="item" @click="changeActive(item.id)" :class="(activeId === item.id ? 'active' : '')">{{ item.name }}</div>
        </div>
      </template>
      <template v-slot:buttons>
        <div class="buttons">
          <MyButton variant="outline" @click="">Скрипт</MyButton>
          <MyButton @click="">Сохранить</MyButton>
        </div>
      </template>
    </LeftMenu>
    <RightMenu>
      <component :is="block"></component>
    </RightMenu>
  </div>
</template>

<script>
  import LeftMenu from './LeftMenu.vue'
  import MyButton from './UI/MyButton.vue'
  import RightMenu from './RightMenu.vue'
  import FieldsBlock from './FieldsBlock.vue'
  export default {
    name: 'Fields',
    components: { RightMenu, MyButton, LeftMenu, FieldsBlock },
    data() {
      return {
        activeId: 'fields',
        menu: [
          {
            name: 'Тип формы',
            id: 'type',
          },
          {
            name: 'Сущности',
            id: 'essence',
          },
          {
            name: 'Поля',
            id: 'fields',
          },
          {
            name: 'Правила показа полей',
            id: 'rules',
          },
          {
            name: 'Другие настройки',
            id: 'settings',
          }
        ]
      }
    },
    computed: {
      block() {
        return this.activeId === 'fields' ? 'FieldsBlock' : ''
      }
    },
    methods: {
      changeActive(id) {
        this.$router.push({ path: '/update', query: { param: id } });
        this.activeId = id;
      },
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="scss">
  .back {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    cursor: pointer;
    margin-top: 30px;
    img {
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }
  .buttons {
    width: 160px;
    margin-top: 330px;
  }
</style>