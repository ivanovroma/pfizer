<template lang="pug">
   v-layout(column justify-center align-center)
    v-flex(class="l-12")
      Breadcrumbs(:items="breadcrumbs")
      
      //- Первичные данные
      CardSummaryData(:card="card")

      //- Ретроспективная часть
      CardSectionDefault(
        title="Ретроспективная часть"
        class="mb15")
        
        //- Анамнез жизнни
        CardPanelDefault(
          title="Анамнез жизни",
          :hide="true"
          class="mb15")
          FormRetrospectiveLife(
            :cardId="card._id"
            :partId="null"
            form="retrospective-life")

        //- Диагноз
        CardPanelDefault(
          title="Диагноз",
          :hide="true"
          class="mb15")
          
          //- Основной диагноз
          FormRetrospectiveDiagnosis(
            class="mb15"
            :cardId="card._id"
            :partId="null"
            form="retrospective-diagnosis")
          
          //- Сопутствующие диагнозы
          ListRetrospectiveAdditionalDiagnoses(
            :cardId="card._id"
            :partId="null"
            item="retrospective-additional-diagnoses")
        
        //- Анамнез заболевания
        CardPanelDefault(
          title="Анамнез заболевания",
          :hide="true"
          class="mb15")
          
          //- Количество инфекционных обострений ХОБЛ
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество инфекционных обострений ХОБЛ"
            item="retrospective-amount-infectious-exacerbations"
            class="mb15")

          //- Количество не инфекционных обострений ХОБЛ
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество не инфекционных обострений ХОБЛ"
            item="retrospective-amount-non-infectious-exacerbations"
            class="mb15")

          //- Количество пневмоний
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество пневмоний"
            item="retrospective-amount-pneumonia"
            class="mb15")
          
          //- Количество госпитализаций по причине инфекционного обострения ХОБЛ
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество госпитализаций по причине инфекционного обострения ХОБЛ"
            item="retrospective-amount-infectious-hospitalization"
            class="mb15")

          //- Количество госпитализаций по причине неинфекционного обострения ХОБЛ
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество госпитализаций по причине неинфекционного обострения ХОБЛ"
            item="retrospective-amount-non-infectious-hospitalization"
            class="mb15")

          //- Количество госпитализаций по причине пневмонии
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество госпитализаций по причине пневмонии"
            item="retrospective-amount-pneumonia-hospitalization"
            class="mb15")

          //- Количество госпитализаций по другим причинам
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество госпитализаций по другим причинам"
            item="retrospective-amount-other-hospitalization"
            class="mb15")

          //- Количество плановых амбулаторных визитов по причине ХОБЛ
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество плановых амбулаторных визитов по причине ХОБЛ"
            item="retrospective-amount-plan-ambul-visit"
            class="mb15")
          
          //- Количество экстренных амбулаторных визитов по причине ХОБЛ
          ListRetrospectiveAmount(
            :cardId="card._id"
            :partId="null"
            label="Количество экстренных амбулаторных визитов по причине ХОБЛ"
            item="retrospective-amount-extra-ambul-visit")
        
        //- Показатели
        CardPanelDefault(
          title="Показатели",
          :hide="true"
          class="mb15")

          //- Результаты спирометрии
          ListRetrospectiveSpirometry(
            :cardId="card._id"
            :partId="null"
            item="retrospective-spirometry"
            class="mb15")

          //- Риск по GOLD
          ListRetrospectiveRiskGOLD(
            :cardId="card._id"
            :partId="null"
            item="retrospective-risk-gold"
            class="mb15")

          //- Степень тяжести по GOLD
          ListRetrospectiveSeverityGOLD(
            :cardId="card._id"
            :partId="null"
            item="retrospective-severity-gold"
            class="mb15")

          //- Данные пульсоксиметрии
          ListRetrospectivePulseoximetry(
            :cardId="card._id"
            :partId="null"
            item="retrospective-pulseoximetry"
            class="mb15")

          //- Оценочный тест ХОБЛ (CAT)
          ListRetrospectiveTestCAT(
            :cardId="card._id"
            :partId="null"
            item="retrospective-test-cat"
            class="mb15")

          //- Оценочный тест ХОБЛ (mMRC)
          ListRetrospectiveTestMMRC(
            :cardId="card._id"
            :partId="null"
            item="retrospective-test-mmrc")

        //- Сопутствующие патологии
        CardPanelDefault(
          title="Сопутствующие патологии",
          :hide="true"
          class="mb15")
          FormRetrospectiveComorbidities(
            :cardId="card._id"
            :partId="null"
            form="retrospective-comorbidities")
        
        //- Инвалидность
        CardPanelDefault(
          title="Инвалидность",
          :hide="true"
          class="mb15")
          FormRetrospectiveDisability(
            :cardId="card._id"
            :partId="null"
            form="retrospective-disability")
        
        //- Анамнез лечения
        CardPanelDefault(
          title="Анамнез лечения",
          :hide="true"
          class="mb15")
          //- Лечение ингаляционными бронходилятаторами
          ListRetrospectiveTherapy(
            :cardId="card._id"
            :partId="null"
            label="Лечение ингаляционными бронходилятаторами"
            item="retrospective-bronchodilator"
            class="mb15")
          //- Фиксированная комбинация ИГКС/БД
          ListRetrospectiveTherapy(
            :cardId="card._id"
            :partId="null"
            label="Фиксированная комбинация ИГКС/БД"
            item="retrospective-igks-bd"
            class="mb15")
          //- Лечение ингаляционными ГКС
          ListRetrospectiveTherapy(
            :cardId="card._id"
            :partId="null"
            label="Лечение ингаляционными ГКС"
            item="retrospective-inhaled-gks"
            class="mb15")
          //- Лечение системными ГКС
          ListRetrospectiveTherapy(
            :cardId="card._id"
            :partId="null"
            label="Лечение системными ГКС"
            item="retrospective-system-gks"
            class="mb15")
          //- Другая терапия
          ListRetrospectiveTherapy(
            :cardId="card._id"
            :partId="null"
            label="Другая терапия"
            item="retrospective-other-therapy"
            class="mb15")
          //- Изменения в терапии
          ListRetrospectiveTherapy(
            :cardId="card._id"
            :partId="null"
            label="Изменения в терапии"
            item="retrospective-change-therapy")
        
        //- Прививочный анамнез
        CardPanelDefault(
          title="Прививочный анамнез",
          :hide="true"
          class="mb15")
          //- Вакцинации против гриппа
          ListRetrospectiveFluVaccination(
            :cardId="card._id"
            :partId="null"
            label="Вакцинации против гриппа"
            item="retrospective-flu-vaccination"
            class="mb15")
          //- Вакцинации против пневмококковой инфекции
          ListRetrospectivePneumococcalInfectionVaccination(
            :cardId="card._id"
            :partId="null"
            label="Вакцинации против пневмококковой инфекции"
            item="retrospective-pneumococcal-infection-vaccination")

        //- Дополнительная информация
        CardPanelDefault(
          title="Дополнительная информация",
          :hide="true")
          FormRetrospectiveAdditional(
            :cardId="card._id"
            :partId="null"
            form="retrospective-additional")
      
      //- Госпитализации
      CardPanelDefault(
        title="Госпитализации",
        :hide="true"
        class="mb15")
        //- Госпитализации
        ListPerspectiveHospitalization(
          :cardId="card._id"
          :partId="null"
          label="Госпитализации"
          item="perspective-hospitalization")

      //- Амбулаторны визиты
      CardPanelDefault(
        title="Амбулаторны визиты",
        :hide="true"
        class="mb15")
        //- Плановые визиты
        ListPerspectivePlanVisit(
          :cardId="card._id"
          :partId="null"
          label="Плановые визиты"
          item="perspective-plan-visit"
          class="mb15")
        //- Экстренные визиты
        ListPerspectiveExtraVisit(
          :cardId="card._id"
          :partId="null"
          label="Экстренные визиты"
          item="perspective-extra-visit")

      //- Вакцинации
      CardPanelDefault(
        title="Вакцинации",
        :hide="true"
        class="mb15")
        //- Вакцинации против гриппа
        ListPerspectiveFluVaccination(
          :cardId="card._id"
          :partId="null"
          label="Вакцинации против гриппа"
          item="perspective-flu-vaccination"
          class="mb15")
        //- Вакцинации против пневмококковой инфекции
        ListPerspectivePneumococcalInfectionVaccination(
          :cardId="card._id"
          :partId="null"
          label="Вакцинации против пневмококковой инфекции"
          item="perspective-pneumococcal-infection-vaccination")
      
      //- Функциональные показатели
      CardPanelDefault(
        title="Функциональные показатели",
        :hide="true"
        class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="ОФВ1"
          item="perspective-functional-indicator-ofv1"
          class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="ФЖЕЛ"
          item="perspective-functional-indicator-fjel"
          class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="ОФВ1/ФЖЕЛ"
          item="perspective-functional-indicator-ofv1-fjel"
          class="mb15")
        ListPerspectiveFunctionalIndicatorEKG(
          :cardId="card._id"
          :partId="null"
          label="ЭКГ"
          item="perspective-functional-indicator-ekg"
          class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="ЧСС"
          item="perspective-functional-indicator-hss"
          class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="ЧДД"
          item="perspective-functional-indicator-hdd"
          class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="АД"
          item="perspective-functional-indicator-ad"
          class="mb15")
        ListPerspectiveFunctionalIndicator(
          :cardId="card._id"
          :partId="null"
          label="Сатурация"
          item="perspective-functional-indicator-saturation")
</template>

<script>
  export default {
    data: () => ({
      breadcrumbs: []
    }),
    middleware: 'Anonimus',
    computed: {
      card () {
        return this.$store.getters['Card/getByCardId'](this.$route.params.id)
      },
      department () {
        return this.$store.getters['Department/getByDepatmentId'](this.card.departmentId)
      },
      user () {
        return this.$store.getters['User/getByUserId'](this.card.userId)
      }
    },
    mounted () {
      this.$store.dispatch('Card/clearCard', {})
      this.breadcrumbs = [
        {
          text: 'Карты',
          disabled: false,
          to: '/'
        },
        {
          text: this.card.name,
          disabled: true
        }
      ]
    }
  }
</script>