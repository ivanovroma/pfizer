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
            label="Клинический диагноз"
            v-model="fields.ClinicDiagnoz")

          DateField(
            label="Дата постановки"
            v-model="fields.ProductionDate")

          v-divider(class="mb30")
          
          BooleanField(
            label="Классификация по GOLD"
            v-model="fields.ClassificationGOLD")
          
          SelectlistField(
            label="Риск по GOLD на момент включения в исследование"
            v-if="fields.ClassificationGOLD"
            v-model="fields.ClassificationGOLDRisk"
            :items="values.ClassificationGOLD")
          
          SelectlistField(
            label="Степень тяжести по GOLD на момент включения в исследование"
            v-if="fields.ClassificationGOLD"
            v-model="fields.SeverityGOLD"
            :items="values.SeverityGOLD")
          
          v-divider(class="mb30")
          
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
                  td Клинический диагноз
                  td {{ fields.ClinicDiagnoz }}
                tr
                  td Дата постановки
                  td {{ translatorKeyDate(fields.ProductionDate) }}
                tr
                  td Классификация по GOLD
                  td {{ translatorBoolean(fields.ClassificationGOLD) }}
                tr
                  td Риск по GOLD на момент включения в исследование
                  td {{ fields.ClassificationGOLDRisk }}
                tr
                  td Степень тяжести по GOLD на момент включения в исследование
                  td {{ fields.SeverityGOLD }}
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
  props: ['cardId'],
  mixins: [form],
  data () {
    return {
      fields: {
        ClinicDiagnoz: null, // Клинический диагноз
        ProductionDate: null, // Дата постановки
        ClassificationGOLD: null, // Классификация по GOLD
        ClassificationGOLDRisk: null, // Риск по GOLD на момент включения в исследование
        SeverityGOLD: null, // Степень тяжести по GOLD на момент включения в исследование
        DiagnozDefault: null // Диагноз основного заболевания
      },
      values: {
        ClassificationGOLD: [
          'A',
          'B',
          'C',
          'D'
        ],
        SeverityGOLD: [
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
