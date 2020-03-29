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
            label="ОФВ1 до бронхолитика"
            v-model="fields.OfvBefore")
          
          NumberField(
            label="ОФВ1 после бронхолитика"
            v-model="fields.OfvAfter")
          
          NumberField(
            label="ФЖЕЛ после бронхолитика"
            v-model="fields.FjelAfter")
          
          NumberField(
            label="ОФВ1/ФЖЕЛ"
            v-model="OfvFjel"
            :disabled="true")

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
        EventDate: null, // Дата проведения
        OfvBefore: null, // ОФВ1 до бронхолитика
        OfvAfter: null, // ОФВ1 после бронхолитика
        FjelAfter: null, // ФЖЕЛ после бронхолитика
        OfvFjel: null // ОФВ/ФЖЕЛ
      }
    }
  },
  methods: {
    async onSubmit () {
      this.buttonLoading = true

      this.fields.OfvFjel = this.OfvFjel

      await this.sendData()

      this.buttonLoading = false
    }
  },
  computed: {
    // ОФВ/ФЖЕЛ
    OfvFjel () {
      if (!this.fields.OfvAfter || !this.fields.FjelAfter) return 0

      const OfvAfter = Number(this.fields.OfvAfter)
      const FjelAfter = Number(this.fields.FjelAfter)

      return (OfvAfter / FjelAfter).toFixed(2)
    }
  }
}
</script>
