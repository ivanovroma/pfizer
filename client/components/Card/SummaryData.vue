<template lang="pug">
  v-card(class="mb30")
    v-card-title(class="headline" color="indigo") {{ card.name }}
      v-spacer
    v-divider
    div(class="elevation-1")
      div(class="v-table__overflow")
        table(class="v-datatable v-table theme--light")
          thead
            tr
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") ФИО
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Дата рождения
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Дата регистрации
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Пользователь
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Подразделение
              th(
                role="columnheader" scope="col" aria-label=" : Not sorted."
                aria-sort="none" class="column text-xs-left")
          
          tbody
            tr
              td {{ card.name }}
              td {{ translatorKeyDate(card.birthDay) }}
              td {{ createdAtFormat }}
              td {{ user.name }}
              td {{ department.label }}
              td(class="text-xs-right")
                //- DepartmentUpdate(
                //-   :id = "item._id"
                //-   :label = "item.name")
                //- DepartmentRemove(
                //-   :id = "item._id")
    
</template>

<script>
import moment from 'moment'

export default {
  props: ['card'],
  computed: {
    createdAtFormat () {
      return moment(this.card.createdAt).format('DD.MM.YYYY')
    },
    department () {
      return this.$store.getters['Department/getByDepartmentId'](this.card.departmentId)
    },
    user () {
      return this.$store.getters['User/getByUserId'](this.card.userId)
    }
  }
}
</script>