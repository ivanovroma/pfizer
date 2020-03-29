<template lang="pug">
  v-card(class="mb30")
    v-card-title(class="headline" color="indigo") Карты
      v-spacer

      v-btn(
        flat
        icon
        color="indigo"
        :loading="buttonLoading"
        @click="refresh")
        v-icon refresh

    v-divider
    
    v-card-text(class="p0")
      // PRELOADER
      v-card(class="text-xs-center p15" v-if="loading")
        v-progress-linear(:indeterminate="true")
      // PRELOADER
      div(class="elevation-1" v-if="!loading")
        div(class="v-table__overflow")
          table(class="v-datatable v-table theme--light")
            thead
              tr
                th(
                  role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                  aria-sort="none" class="column text-xs-left") ID
                th(
                  role="columnheader" scope="col" aria-label="ФИО: Not sorted."
                  aria-sort="none" class="column text-xs-left")
                  v-text-field(
                    label="ФИО"
                    outline
                    v-model="searchQueryName"
                    class="search_input")
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
              tr(v-if="!items || items.length === 0")
                td Нет записей
              CardItem(
                v-for="item in items"
                :key="item._id"
                :item="item")
    v-card-actions(v-if="!loading")
      Pagination
</template>

<script>
import lodash from 'lodash'

export default {
  data () {
    return {
      loading: true,
      buttonLoading: false,
      searchQueryName: ''
    }
  },
  methods: {
    async refresh () {
      this.buttonLoading = true
      await this.$store.dispatch('Card/get')
      this.buttonLoading = false
    }
  },
  async mounted () {
    this.loading = true
    await this.$store.dispatch('Department/get', {})
    await this.$store.dispatch('User/get', {})
    await this.$store.dispatch('Card/get', {})
    this.loading = false
  },
  computed: {
    items () {
      return this.$store.getters['Card/get']
    }
  },
  watch: {
    searchQueryName: {
      handler: lodash.debounce(function () {
        this.$store.dispatch('Card/get', { searchQueryName: this.searchQueryName })
      }, 800)
    }
  }

}
</script>

<style>
.search_input .v-input__slot {
  margin-bottom: 0px !important;
}

.search_input .v-text-field__details {
  display: none;
}

.search_input {
  padding-top: 15px !important;
  padding-bottom: 15px !important;
}
</style>
