<template lang="pug">
  div
    // SNACKBAR
    v-snackbar(
      v-model="successMessage"
      right
      :timeout="6000"
      top) Запись успешно добавлена
      v-btn(
        color="red"
        flat
        @click="successMessage = false")
        v-icon close
    // SNACKBAR
      
    
    v-dialog(
      v-model="dialog"
      width="500"
    )
      v-btn(
        slot="activator"
        color="indigo"
        dark
      ) Добавить

      v-card
        v-card-title(
          class="headline grey lighten-2"
          primary-title
          light
        ) Добавить

        v-card-text
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT
          
          SelectlistField(
            label="Причина"
            v-model="fields.Cause"
            :items="values.Cause")
          
          DateField(
            label="Дата визита"
            v-model="fields.VisitDate")

          SelectlistField(
            label="Итог визита"
            v-model="fields.VisitResult"
            :items="values.VisitResult")

        v-divider

        v-card-actions
          v-spacer
          v-btn(
            color="primary"
            flat
            @click="dialog = false"
          ) Отмена
          v-btn(
            color="indigo"
            @click="onSubmit"
            dark
            :loading="buttonLoading"
          ) Добавить
</template>

<script>
import itemCreate from '@/mixins/item/create'

export default {
  mixins: [itemCreate],
  data () {
    return {
      fields: {
        Cause: null,
        VisitDate: null,
        VisitResult: null
      },
      values: {
        Cause: [
          'Инфекционное обострение ХОБЛ',
          'Неинфекционное обострение ХОБЛ',
          'Внебольничная пневмония'
        ],
        VisitResult: [
          'Амбулаторное лечение',
          'Госпитализация'
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
