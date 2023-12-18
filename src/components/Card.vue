<template>
<div class="card">
  <div class="card-string">
    <div class="card-title">{{ card.title }}</div>
    <MyButton variant="outline" size="sm1" @click="update">Редактировать</MyButton>
  </div>
  <div class="card-string">
    Автор: {{ card.title }}
  </div>
  <div class="card-string">
    <div class="card-date">Дата создания: {{ card.date }}</div>
    <MyButton variant="simple">Удалить</MyButton>
  </div>
</div>
</template>

<script>
  import MyButton from './UI/MyButton.vue'
  export default {
    name: 'Card',
    components: { MyButton },
    props: {
      card: {
        required: true,
        type: Object
      }
    },
    methods: {
      update() {
        
      }
    }
  }
</script>

<style scoped lang="scss">
.card {
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  margin-top: 30px;
  color: #808080;
  font-size: 14px;
  &-title {
    color: #000000;
    font-size: 24px;
  }
  &-string {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    &:last-child {
      align-items: end;
    }
  }
}
</style>