<template lang="pug">
  v-card(class="mb30")
    v-card-title(class="headline" color="indigo") Экстренный визит
    v-divider
    div(class="elevation-1")
      div(class="v-table__overflow")
        table(class="v-datatable v-table theme--light")
          thead
            tr
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Причина
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Дата визита
              th(
                role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                aria-sort="none" class="column text-xs-left") Итог визита
              th(
                role="columnheader" scope="col" aria-label=" : Not sorted."
                aria-sort="none" class="column text-xs-left")
          
          tbody
            tr
              td {{ item.fields.Cause }}
              td {{ translatorKeyDate(item.fields.VisitDate) }}
              td {{ item.fields.VisitResult }}
              
              td(class="text-xs-right")
                //- DepartmentUpdate(
                //-   :id = "item._id"
                //-   :label = "item.name")
                //- DepartmentRemove(
                //-   :id = "item._id")
    
</template>

<script>
export default {
  props: ['item'],
  computed: {
    // createdAtFormat () {
    //   return moment(this.card.createdAt).format('DD.MM.YYYY')
    // },
    // department () {
    //   return this.$store.getters['Department/getByDepartmentId'](this.card.departmentId)
    // },
    // user () {
    //   return this.$store.getters['User/getByUserId'](this.card.userId)
    // }
  }
}
</script>