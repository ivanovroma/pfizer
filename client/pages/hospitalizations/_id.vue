<template lang="pug">
   v-layout(column justify-center align-center)
    v-flex(class="l-12")
      Breadcrumbs(:items="breadcrumbs")
      
      //- Первичные данные
      CardSummaryData(:card="card")

      SummaryDataPerspectiveHospitalization(:item="item")

      //- Диагноз
      CardPanelDefault(
        title="Диагноз",
        :hide="true"
        class="mb15")

        //- Основной диагноз
        FormPerspectiveDiagnosis(
          :cardId="card._id"
          :partId="item._id"
          form="perspective-hospitalization-diagnosis"
          class="mb15")
        
        //- Сопутствующие диагнозы
        ListRetrospectiveAdditionalDiagnoses(
          :cardId="card._id"
          :partId="item._id"
          item="perspective-hospitalization-additional-diagnoses")

      //- Антибиотикотерапия
      CardPanelDefault(
        title="Антибиотикотерапия",
        :hide="true"
        class="mb15")
        
        //- Исход терапии
        FormPerspectiveResultTherapy(
          :cardId="card._id"
          :partId="item._id"
          form="perspective-hospitalization-result-therapy"
          class="mb15")

        //- Антибактериальные препараты
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Антибактериальные препараты"
          item="perspective-hospitalization-antibacterial-drugs"
          class="mb15")
        //- Лечение ингаляционными бронходилятаторами
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Лечение ингаляционными бронходилятаторами"
          item="perspective-hospitalization-inhaled-bronchodilator"
          class="mb15")
        //- Фиксированная комбинация иГКС/ДДБА, ДДБА/ДДАХ
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Фиксированная комбинация иГКС/ДДБА, ДДБА/ДДАХ"
          item="perspective-hospitalization-fix-igks-ddba-ddba-ddah"
          class="mb15")
        //- Нефиксированная комбинация иГКС/ДДБА, ДДБА/ДДАХ
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Нефиксированная комбинация иГКС/ДДБА, ДДБА/ДДАХ"
          item="perspective-hospitalization-non-fix-igks-ddba-ddba-ddah"
          class="mb15")
        //- Лечение ингаляционными ГКС
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Лечение ингаляционными ГКС"
          item="perspective-hospitalization-inhaled-gks"
          class="mb15")
        //- Лечение системными ГКС
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Лечение системными ГКС"
          item="perspective-hospitalization-system-gks"
          class="mb15")
        //- Другие препараты
        ListPerspectiveTherapy(
          :cardId="card._id"
          :partId="item._id"
          label="Другие препараты"
          item="perspective-hospitalization-other-drugs")
</template>

<script>
  export default {
    data: () => ({
      breadcrumbs: []
    }),
    middleware: 'Anonimus',
    computed: {
      card () {
        return this.$store.getters['Card/getByCardId'](this.$route.params.item.cardId)
      },
      item () {
        return this.$route.params.item
      }
      // department () {
      //   return this.$store.getters['Department/getByDepatmentId'](this.card.departmentId)
      // },
      // user () {
      //   return this.$store.getters['User/getByUserId'](this.card.userId)
      // }
    },
    mounted () {
      this.breadcrumbs = [
        {
          text: 'Карты',
          disabled: false,
          to: '/'
        },
        {
          text: this.card.name,
          disabled: false,
          to: '/cards/' + this.card._id
        },
        {
          text: 'Госпитализация',
          disabled: true
        }
      ]
    }
  }
</script>