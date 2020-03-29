<template lang="pug">
  div
    // PRELOADER
    v-card(class="text-xs-center p15" v-if="loading")
      v-progress-linear(:indeterminate="true")
    // PRELOADER

    // SNACKBAR
    v-snackbar(
      v-model="successMessage"
      right
      :timeout="6000"
      top) Данные успешно записаны
      v-btn(
        color="red"
        flat
        @click="successMessage = false")
        v-icon close
    // SNACKBAR
    
    v-card(class="" v-if="!loading")

      v-card-actions(
        class="white")
        v-btn(
          color="indigo"
          @click="read = false"
          v-if="read && !done"
          dark) Заполнить
        v-btn(
          color="indigo"
          @click="read = false"
          v-if="read && done"
          dark) Редактировать
        v-btn(
          @click="cancelSetData"
          v-if="!read"
          flat) Отмена
        v-btn(
          color="indigo"
          @click="onSubmit"
          v-if="!read"
          :loading="buttonLoading"
          dark) Сохранить
      v-divider
      
      div(v-if="!read")
        CardFieldsDefault(label="Основной диагноз")
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT
          
          StringField(
            label="Диагноз основного заболевания"
            v-model="fields.DiagnozDefault")
          
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT

      div(v-if="read")
        v-card-title(class="headline" color="indigo") Основной диагноз
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Диагноз основного заболевания
                  td {{ fields.DiagnozDefault }}
        v-divider
      
      v-card-actions(
        class="white")
        v-spacer
        v-btn(
          color="indigo"
          @click="read = false"
          v-if="read && !done"
          dark) Заполнить
        v-btn(
          color="indigo"
          @click="read = false"
          v-if="read && done"
          dark) Редактировать
        v-btn(
          color="indigo"
          @click="onSubmit"
          v-if="!read"
          :loading="buttonLoading"
          dark) Сохранить
        v-btn(
          @click="cancelSetData"
          v-if="!read"
          flat) Отмена

</template>

<script>
import form from '@/mixins/form'

export default {
  mixins: [form],
  data () {
    return {
      fields: {
        DiagnozDefault: null // Диагноз основного заболевания
      }
    }
  },
  methods: {
    async onSubmit () {
      this.buttonLoading = true

      await this.sendData()

      this.buttonLoading = false
    }
  }
}
</script>
