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
          
          DateField(
            label="Дата проведения"
            v-model="fields.EventDate")

          NumberField(
            label="Показатель (%)"
            v-model="fields.Indicator")

          SelectlistField(
            label="Фенотип ХОБЛ"
            v-model="fields.FenotipHOBL"
            :items="values.FenotipHOBL")

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
        EventDate: null,
        Indicator: null,
        FenotipHOBL: null
      },
      values: {
        FenotipHOBL: [
          'Бронхитический фенотип',
          'Эмфизематозный фенотип',
          'Перекрест ХОБЛ+БА',
          'Перекрест ХОБЛ+бронхоэктазы',
          'Фенотип с частыми обострениями',
          'Фенотип пульмонологической кахексии'
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
