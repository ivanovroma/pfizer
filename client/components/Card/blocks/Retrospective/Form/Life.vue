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
        CardFieldsDefault(label="Род деятельности")
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT

          StringField(
            label="Род деятельности (профессия)"
            v-model="fields.ProfessionName")

          v-divider(class="mb30")

          BooleanField(
            label="Наличие профессиональных факторов вредности"
            v-model="fields.PresenceHazards")

          ChecklistField(
            label="Профессиональные вредности"
            v-if="fields.PresenceHazards"
            v-model="fields.PresenceHazardsList"
            :items="values.PresenceHazards")
          
          SelectlistField(
            label="Сочетание профессиональных факторов"
            v-if="fields.PresenceHazards"
            v-model="fields.CombinationHazards"
            :items="values.CombinationHazards")

          v-divider(class="mb30")
          
          BooleanField(
            label="Состоит на учете у профпатолога"
            v-model="fields.OccupationalPhysician")
          
          StringField(
            label="Диагноз"
            v-if="fields.OccupationalPhysician"
            v-model="fields.OccupationalPhysicianDiagnoz")

        CardFieldsDefault(label="Стаж курения")
          BooleanField(
            label="Курение"
            v-model="fields.Smoking")

          NumberField(
            label="Стаж курения"
            v-if="fields.Smoking"
            v-model="fields.SmokingExpirience")

          NumberField(
            label="Количество сигарет в день"
            v-if="fields.Smoking"
            v-model="fields.NumberCigarettes")

          NumberField(
            label="Индекс курильщика (пачка-лет)"
            v-if="fields.Smoking"
            v-model="SmokingIndex"
            :disabled="true")


        CardFieldsDefault(label="Весо-ростовые показатели")
          NumberField(
            label="Рост, см"
            v-model="fields.HeightCm")

          NumberField(
            label="Вес, кг"
            v-model="fields.WeightKg")

          NumberField(
            label="Индекс массы тела"
            v-model="WeightIndex"
            :disabled="true")
          
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT

      div(v-if="read")
        v-card-title(class="headline" color="indigo") Род деятельности
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Род деятельности (профессия)
                  td(v-html="fields.ProfessionName")
                tr
                  td Наличие профессиональных факторов вредности
                  td {{ translatorBoolean(fields.PresenceHazards) }}
                tr(v-if="fields.PresenceHazards")
                  td Профессиональные вредности
                  td
                    span(
                      v-for="(item, index) in fields.PresenceHazardsList"
                      :key="item"
                      :item="item") {{ item }}
                      span(v-if="fields.PresenceHazardsList.length - 1 !== index") , 
                tr(v-if="fields.PresenceHazards")
                  td Сочетание профессиональных факторов
                  td {{ fields.CombinationHazards }}
                tr
                  td Состоит на учете у профпатолога
                  td {{ translatorBoolean(fields.OccupationalPhysician) }}
                tr(v-if="fields.OccupationalPhysician")
                  td Диагноз
                  td {{ fields.OccupationalPhysicianDiagnoz }}
      
        v-card-title(class="headline" color="indigo") Стаж курения
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Курение
                  td {{ translatorBoolean(fields.Smoking) }}
                tr(v-if="fields.Smoking")
                  td Стаж курения
                  td {{ fields.SmokingExpirience }}
                tr(v-if="fields.Smoking")
                  td Количество сигарет в день
                  td {{ fields.NumberCigarettes }}
                tr(v-if="fields.Smoking")
                  td Индекс курильщика (пачка-лет)
                  td {{ fields.SmokingIndex }}
      
        v-card-title(class="headline" color="indigo") Весо-ростовые показатели
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Рост, см
                  td {{ fields.HeightCm }}
                tr
                  td Вес, кг
                  td {{ fields.WeightKg }}
                tr
                  td Индекс массы тела
                  td {{ fields.WeightIndex }}
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
        ProfessionName: null, // Род деятельности (профессия)
        PresenceHazards: null, // Наличие профессиональных факторов вредности
        PresenceHazardsList: null, // Профессиональные вредности
        CombinationHazards: null, // Сочетание профессиональных факторов
        OccupationalPhysician: null, // Состоит на учете у профпатолога
        OccupationalPhysicianDiagnoz: null, // Диагноз

        Smoking: null, // Курение
        SmokingExpirience: null, // Стаж курения
        NumberCigarettes: null, // Кол-во сигарет в день
        SmokingIndex: null, // Индекс курильщика (пачка-лет)

        HeightCm: null, // Рост (см)
        WeightKg: null, // Вес (кг)
        WeightIndex: null // Индекс массы тела
      },

      values: {
        PresenceHazards: [
          'Аэрозоли фиброгенного действия',
          'Пыль',
          'Низкие/высокие температуры',
          'Выхлопные газы'
        ],
        CombinationHazards: [
          'нет',
          '2 фактора',
          '3 фактора'
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      this.buttonLoading = true

      this.fields.SmokingIndex = this.SmokingIndex
      this.fields.WeightIndex = this.WeightIndex

      await this.sendData()

      this.buttonLoading = false
    }
  },
  computed: {
    // Индекс курильщика (пачка-лет)
    SmokingIndex () {
      if (!this.fields.SmokingExpirience || !this.fields.NumberCigarettes) return 0
      const SmokingExpirience = Number(this.fields.SmokingExpirience)
      const NumberCigarettes = Number(this.fields.NumberCigarettes)

      return SmokingExpirience * NumberCigarettes / 20
    },
    // Индекс массы тела
    WeightIndex () {
      if (!this.fields.HeightCm || !this.fields.WeightKg) return 0
      const HeightCm = Number(this.fields.HeightCm)
      const WeightKg = Number(this.fields.WeightKg)

      return (WeightKg / ((HeightCm / 100) * (HeightCm / 100))).toFixed(2)
    }
  }
}
</script>
