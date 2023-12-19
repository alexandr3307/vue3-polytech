<template>
  <div class="container">
    <LeftMenu>
      <template v-slot:menu>
        <div v-for="(item, index) in menu" :key="index">
          <div class="item" @click="changeActive(item.id)" :class="(activeId === item.id ? 'active' : '')">{{ item.name }}</div>
        </div>
      </template>
      <template v-slot:buttons>
        <MyButton variant="outline" class="button" @click="">Выход</MyButton>
      </template>
    </LeftMenu>
    <RightMenu>
      <div class="right-menu-container">
        <component :is="block"></component>
      </div>
    </RightMenu>
  </div>
</template>

<script>
  import LeftMenu from './LeftMenu.vue'
  import MyButton from './UI/MyButton.vue'
  import RightMenu from './RightMenu.vue'
  import FormsBlock from './FormsBlock.vue'
  export default {
    name: 'Forms',
    components: { RightMenu, MyButton, LeftMenu, FormsBlock },
    data() {
      return {
        activeId: 'forms',
        menu: [
          {
            name: 'Формы',
            id: 'forms',
          },
          {
            name: 'Пользователи',
            id: 'users'
          }
        ]
      }
    },
    computed: {
      block() {
        return this.activeId === 'forms' ? 'FormsBlock' : ''
      }
    },
    methods: {
      changeActive(id) {
        this.$router.push({ path: '/', query: { param: id } });
        this.activeId = id;
      }
    }
  }
</script>

<style scoped lang="scss">
  .button {
    margin-top: 570px;
  }
  .right-menu-container {
    width: 825px;
    margin: 80px auto;
  }
</style>