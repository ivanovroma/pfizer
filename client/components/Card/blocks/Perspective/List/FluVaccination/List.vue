<template lang="pug">
  div
    // PRELOADER
    v-card(class="text-xs-center p15" v-if="loading")
      v-progress-linear(:indeterminate="true")
    // PRELOADER
    
    v-card(class="" v-if="!loading")
      div
        v-card-title(class="headline" color="indigo") {{ label }}
        v-spacer
        v-divider
        
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              thead
                tr
                  th(
                    role="columnheader" scope="col" aria-label="Название: Not sorted."
                    aria-sort="none" class="column text-xs-left") Дата проведения
                  th(
                    role="columnheader" scope="col" aria-label="Название: Not sorted."
                    aria-sort="none" class="column text-xs-left") Вакцина
                  th(
                    role="columnheader" scope="col" aria-label="Название: Not sorted."
                    aria-sort="none" class="column text-xs-left") 
              tbody
                tr(v-if="!items || items.length === 0")
                  td Нет записей
                ItemPerspectiveFluVaccination(
                  v-for="item in items"
                  :key="item._id"
                  :item="item")
              
        v-divider
        
        v-card-actions(
          class="white")
          v-spacer
          CreatePerspectiveFluVaccination(
            :cardId="cardId"
            :partId="partId"
            :item="item")

</template>

<script>
import itemList from '@/mixins/item/list'

export default {
  mixins: [itemList]
}
</script>
