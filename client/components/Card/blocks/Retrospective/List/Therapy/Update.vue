<template lang="pug">
  div(style="display: inline-block")
    // SNACKBAR
    v-snackbar(
      v-model="successMessage"
      right
      :timeout="6000"
      top) Запись успешно обновлена
      v-btn(
        color="red"
        flat
        @click="successMessage = false")
        v-icon close
    // SNACKBAR
      
    
    v-btn(
      fab
      flat
      small
      color="indigo"
      @click="openDialog"
    )
      v-icon edit
    v-dialog(
      v-model="dialog"
      width="500"
    )

      v-card
        v-card-title(
          class="headline grey lighten-2"
          primary-title
          light
        ) Редактировать

        v-card-text
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT
          
          StringField(
            label="Препарат"
            v-model="fields.DrugName")
          
          NumberField(
            label="Дозировка (мкг)"
            v-model="fields.Dosage")
          
          NumberField(
            label="Кратность приема в день"
            v-model="fields.ReceptionPerDay")
          
          YearField(
            label="Год начала приема"
            v-model="fields.YearStart")
          
          BooleanField(
            label="Прием окончен"
            v-model="fields.DrugEnd")

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
          ) Обновить
</template>

<script>
import itemUpdate from '@/mixins/item/update'

export default {
  mixins: [itemUpdate],
  data () {
    return {
      fields: {
        DrugName: null, // Препарат
        Dosage: null, // Дозировка (мкг)
        ReceptionPerDay: null, // Кратность приема в день
        YearStart: null, // Год начала приема
        DrugEnd: null // Прием окончен
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
