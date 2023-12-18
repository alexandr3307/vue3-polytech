<template v-slot>
  <div class="form-header">
    <h3>Формы</h3>
    <MyButton size="sm">Создать форму</MyButton>
  </div>
  <div class="list">
    <Card v-for="(item, index) in cards" :key="index" :card="item" class="card">
    </Card>
  </div>
</template>

<script>
  import MyButton from './UI/MyButton.vue'
  import Card from './Card.vue'
  export default {
    name: 'FormsBlock',
    components: { Card, MyButton },
    data() {
      return {
        cards: [
          {
            title: 'Форма регистрации участников',
            author: 'user1',
            date: '01.01.23'
          },
          {
            title: 'Форма регистрации участников',
            author: 'user1',
            date: '01.01.23'
          },
          {
            title: 'Форма регистрации участников',
            author: 'user1',
            date: '01.01.23'
          }
        ]
      }
    }

  }
</script>

<style lang="scss" scoped>
.form-header {
  display: flex;
  justify-content: space-between;
  .list {
    margin-top: 20px;
  }
}
</style>