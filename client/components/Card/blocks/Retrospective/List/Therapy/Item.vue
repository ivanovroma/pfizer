<template lang="pug">
  tr
    td {{ item.fields.DrugName }}
    td {{ item.fields.Dosage }}
    td {{ item.fields.ReceptionPerDay }}
    td {{ item.fields.YearStart }}
    td {{ translatorBoolean(item.fields.DrugEnd) }}
    td 
      UpdateRetrospectiveTherapy(:item="item")
      RemoveRetrospectiveTherapy(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
