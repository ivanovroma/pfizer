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

          StringField(
            v-if="fields.Cause === 'Другая причина'"
            label="Другая причина"
            v-model="fields.OtherCause")
          
          DateField(
            label="Дата госпитализации"
            v-model="fields.HospitalizationStart")

          DateField(
            label="Дата выписки"
            v-model="fields.HospitalizationEnd")

          NumberField(
            label="Количество койко-дней"
            v-model="fields.NumberDays")

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
        OtherCause: null,
        HospitalizationStart: null,
        HospitalizationEnd: null,
        NumberDays: null
      },
      values: {
        Cause: [
          'Инфекционное обострение',
          'Неинфекционное обострение',
          'Пневмония',
          'Другая причина'
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
