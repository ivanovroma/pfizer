<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.ProductionDate) }}
    td {{ item.fields.Diagnoz}}
    td 
      UpdateRetrospectiveAdditionalDiagnoses(:item="item")
      RemoveRetrospectiveAdditionalDiagnoses(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
