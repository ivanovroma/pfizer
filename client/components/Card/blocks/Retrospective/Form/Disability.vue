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
        CardFieldsDefault(label="Инвалидность")
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT
          BooleanField(
            label="Инвалидность"
            v-model="fields.Disability")

          v-divider(class="mb30" v-if="fields.Disability")
          
          SelectlistField(
            label="Группа инвалидности"
            v-if="fields.Disability"
            v-model="fields.Group"
            :items="values.Group")

          BooleanField(
            label="Причина инвалидности - ХОБЛ"
            v-if="fields.Disability"
            v-model="fields.Cause")
          
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT

      div(v-if="read")
        v-card-title(class="headline" color="indigo") Инвалидность
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Инвалидность
                  td {{ translatorBoolean(fields.Disability) }}
                tr
                  td Группа инвалидности
                  td {{ fields.Group }}
                tr
                  td Причина инвалидности - ХОБЛ?
                  td {{ translatorBoolean(fields.Cause) }}
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
          @click="cancelSetData"
          v-if="!read"
          flat) Отмена
        v-btn(
          color="indigo"
          @click="onSubmit"
          v-if="!read"
          :loading="buttonLoading"
          dark) Сохранить

</template>

<script>
import form from '@/mixins/form'

export default {
  props: ['cardId'],
  mixins: [form],
  data () {
    return {
      fields: {
        Disability: null, // Инвалидность
        Group: null, // Группа инвалидности
        Cause: null // Причина инвалидности - ХОБЛ?
      },

      values: {
        Group: [
          '1',
          '2',
          '3',
          '4'
        ]
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
