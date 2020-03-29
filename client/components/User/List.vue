<template lang="pug">
  div(class="elevation-1")
    div(class="v-table__overflow")
      table(class="v-datatable v-table theme--light")
        thead
          tr
            th(
              role="columnheader" scope="col" aria-label="Название: Not sorted."
              aria-sort="none" class="column text-xs-left") ФИО
            th(
              role="columnheader" scope="col" aria-label="Название: Not sorted."
              aria-sort="none" class="column text-xs-left") Логин
            th(
              role="columnheader" scope="col" aria-label="Название: Not sorted."
              aria-sort="none" class="column text-xs-left") Роль
            th(
              role="columnheader" scope="col" aria-label="Название: Not sorted."
              aria-sort="none" class="column text-xs-left") Дата регистрации
            th(
              role="columnheader" scope="col" aria-label="Название: Not sorted."
              aria-sort="none" class="column text-xs-left") Подразделение
            th(
              role="columnheader" scope="col" aria-label="Название: Not sorted."
              aria-sort="none" class="column text-xs-left") Заблокирован
            th(
              role="columnheader" scope="col" aria-label=" : Not sorted."
              aria-sort="none" class="column text-xs-left")
        
        tbody
          UserItem(
            v-for="user in users"
            :key="user._id"
            :item="user")
</template>

<script>
export default {
  props: ['loading'],
  computed: {
    users () {
      return this.$store.getters['User/get']
    }
  }
}
</script>