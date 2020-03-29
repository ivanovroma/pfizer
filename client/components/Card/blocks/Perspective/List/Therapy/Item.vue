<template lang="pug">
  tr
    td {{ item.fields.DrugName }}
    td {{ item.fields.Dosage }}
    td {{ item.fields.ReceptionPerDay }}
    td {{ translatorBoolean(item.fields.DrugEnd) }}
    td 
      UpdatePerspectiveTherapy(:item="item")
      RemovePerspectiveTherapy(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
