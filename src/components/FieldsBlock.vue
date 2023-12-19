<template v-slot>
    <FieldsRedactor></FieldsRedactor>
    <FieldsRegistration></FieldsRegistration>
</template>

<script>
  import FieldsRedactor from './FieldsRedactor.vue'
  import FieldsRegistration from './FieldsRegistration.vue'
  export default {
    name: 'FieldsBlock',
    components: { FieldsRegistration, FieldsRedactor },
    data() {
      return {
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