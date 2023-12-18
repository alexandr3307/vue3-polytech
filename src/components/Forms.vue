<template>
  <div class="forms">
    <LeftMenu>
      <template v-slot:menu>
        <div v-for="(item, index) in menu" :key="index">
          <div class="item" @click="changeActive(item.id)" :class="(activeId === item.id ? 'active' : '')">{{ item.name }}</div>
        </div>
      </template>
      <template v-slot:buttons>
        <MyButton :variant="'outline'" @click="">Выход</MyButton>
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
        console.log(this.block);
      }
    }
  }
</script>

<style scoped lang="scss">
.forms {
  display: flex;
  width: 1440px;
  height: 900px;
  background: #f6f6f6;
  .item {
    font-weight: 500;
    padding-top: 16px;
  }
  .active {
    color: #3EA748;
  }
}
</style>