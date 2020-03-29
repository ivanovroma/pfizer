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
        CardFieldsDefault(label="Коморбидная патология")
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT
          BooleanField(
            label="Наличие коморбидной патологии"
            v-model="fields.Comorbidities")
        
        CardFieldsDefault(label="Кахексия" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Cachexia"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Cachexia === 'Да'"
            v-model="fields.CachexiaStart")
          YearField(
            label="Год окончания"
            v-if="fields.Cachexia === 'Да'"
            v-model="fields.CachexiaEnd")

        CardFieldsDefault(label="Анемия" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Anemia"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Anemia === 'Да'"
            v-model="fields.AnemiaStart")
          YearField(
            label="Год окончания"
            v-if="fields.Anemia === 'Да'"
            v-model="fields.AnemiaEnd")

        CardFieldsDefault(label="Депрессия" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Depression"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Depression === 'Да'"
            v-model="fields.DepressionStart")
          YearField(
            label="Год окончания"
            v-if="fields.Depression === 'Да'"
            v-model="fields.DepressionEnd")

        CardFieldsDefault(label="ГЭРБ" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.GERB"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.GERB === 'Да'"
            v-model="fields.GERBStart")
          YearField(
            label="Год окончания"
            v-if="fields.GERB === 'Да'"
            v-model="fields.GERBEnd")

        CardFieldsDefault(label="Остеопороз" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Osteoporosis"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Osteoporosis === 'Да'"
            v-model="fields.OsteoporosisStart")
          YearField(
            label="Год окончания"
            v-if="fields.Osteoporosis === 'Да'"
            v-model="fields.OsteoporosisEnd")

        CardFieldsDefault(label="ИБС" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.IBS"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.IBS === 'Да'"
            v-model="fields.IBSStart")
          YearField(
            label="Год окончания"
            v-if="fields.IBS === 'Да'"
            v-model="fields.IBSEnd")

        CardFieldsDefault(label="Артериальная гипертензия" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Hypertension"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Hypertension === 'Да'"
            v-model="fields.HypertensionStart")
          YearField(
            label="Год окончания"
            v-if="fields.Hypertension === 'Да'"
            v-model="fields.HypertensionEnd")

        CardFieldsDefault(label="ХСН" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.HSN"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.HSN === 'Да'"
            v-model="fields.HSNStart")
          YearField(
            label="Год окончания"
            v-if="fields.HSN === 'Да'"
            v-model="fields.HSNEnd")

        CardFieldsDefault(label="Сахарный диабет" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Diabet"
            :items="values.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Diabet === 'Да'"
            v-model="fields.DiabetStart")
          YearField(
            label="Год окончания"
            v-if="fields.Diabet === 'Да'"
            v-model="fields.DiabetEnd")

        CardFieldsDefault(label="Другая патология" v-if="fields.Comorbidities")
          SelectlistField(
            label="Патология присутствует?"
            v-model="fields.Other"
            :items="values.Pathology")
          StringField(
            label="Укажите паталогию"
            v-if="fields.Other === 'Да'"
            v-model="fields.Pathology")
          YearField(
            label="Год начала"
            v-if="fields.Other === 'Да'"
            v-model="fields.OtherStart")
          YearField(
            label="Год окончания"
            v-if="fields.Other === 'Да'"
            v-model="fields.OtherEnd")
          
          // ALERT
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          // ALERT
          

      div(v-if="read")
        v-card-title(class="headline" color="indigo") Коморбидная патология
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Наличие коморбидной патологии
                  td {{ translatorBoolean(fields.Comorbidities) }}
      
        v-card-title(class="headline" color="indigo") Кахексия
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Cachexia }}
                tr
                  td Год начала
                  td {{ fields.CachexiaStart }}
                tr
                  td Год окончания
                  td {{ fields.CachexiaEnd }}
        
        v-card-title(class="headline" color="indigo") Анемия
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Anemia }}
                tr
                  td Год начала
                  td {{ fields.AnemiaStart }}
                tr
                  td Год окончания
                  td {{ fields.AnemiaEnd }}

        v-card-title(class="headline" color="indigo") Депрессия
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Depression }}
                tr
                  td Год начала
                  td {{ fields.DepressionStart }}
                tr
                  td Год окончания
                  td {{ fields.DepressionEnd }}
        
        v-card-title(class="headline" color="indigo") ГЭРБ
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.GERB }}
                tr
                  td Год начала
                  td {{ fields.GERBStart }}
                tr
                  td Год окончания
                  td {{ fields.GERBEnd }}
        
        v-card-title(class="headline" color="indigo") Остеопороз
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Osteoporosis }}
                tr
                  td Год начала
                  td {{ fields.OsteoporosisStart }}
                tr
                  td Год окончания
                  td {{ fields.OsteoporosisEnd }}
        
        v-card-title(class="headline" color="indigo") ИБС
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.IBS }}
                tr
                  td Год начала
                  td {{ fields.IBSStart }}
                tr
                  td Год окончания
                  td {{ fields.IBSEnd }}
        
        v-card-title(class="headline" color="indigo") Артериальная гипертензия
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Hypertension }}
                tr
                  td Год начала
                  td {{ fields.HypertensionStart }}
                tr
                  td Год окончания
                  td {{ fields.HypertensionEnd }}
        
        v-card-title(class="headline" color="indigo") ХСН
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.HSN }}
                tr
                  td Год начала
                  td {{ fields.HSNStart }}
                tr
                  td Год окончания
                  td {{ fields.HSNEnd }}
        
        v-card-title(class="headline" color="indigo") Сахарный диабет
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Diabet }}
                tr
                  td Год начала
                  td {{ fields.DiabetStart }}
                tr
                  td Год окончания
                  td {{ fields.DiabetEnd }}
        
        v-card-title(class="headline" color="indigo") Другая патология
        v-divider
        div(class="elevation-1")
          div(class="v-table__overflow")
            table(class="v-datatable v-table theme--light")
              tbody
                tr
                  td Патология присутствует?
                  td {{ fields.Other }}
                tr
                  td Укажите патологию
                  td {{ fields.Pathology }}
                tr
                  td Год начала
                  td {{ fields.OtherStart }}
                tr
                  td Год окончания
                  td {{ fields.OtherEnd }}

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
        Comorbidities: null, // Наличие коморбидной патологии

        Cachexia: null, // Патология присутствует?
        CachexiaStart: null, // Год начала
        CachexiaEnd: null, // Год окончания

        Anemia: null, // Патология присутствует?
        AnemiaStart: null, // Год начала
        AnemiaEnd: null, // Год окончания

        Depression: null, // Патология присутствует?
        DepressionStart: null, // Год начала
        DepressionEnd: null, // Год окончания

        GERB: null, // Патология присутствует?
        GERBStart: null, // Год начала
        GERBEnd: null, // Год окончания

        Osteoporosis: null, // Патология присутствует?
        OsteoporosisStart: null, // Год начала
        OsteoporosisEnd: null, // Год окончания

        IBS: null, // Патология присутствует?
        IBSStart: null, // Год начала
        IBSEnd: null, // Год окончания

        Hypertension: null, // Патология присутствует?
        HypertensionStart: null, // Год начала
        HypertensionEnd: null, // Год окончания

        HSN: null, // Патология присутствует?
        HSNStart: null, // Год начала
        HSNEnd: null, // Год окончания

        Diabet: null, // Патология присутствует?
        DiabetStart: null, // Год начала
        DiabetEnd: null, // Год окончания

        Other: null, // Патология присутствует?
        Pathology: null, // Укажите паталогию
        OtherStart: null, // Год начала
        OtherEnd: null // Год окончания
      },

      values: {
        Pathology: [
          'Нет',
          'Да',
          'Нет данных'
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
