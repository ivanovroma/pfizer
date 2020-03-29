<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Vaccina }}
    td {{ item.fields.VaccineReactions }}
    td 
      UpdatePerspectivePneumococcalInfectionVaccination(:item="item")
      RemovePerspectivePneumococcalInfectionVaccination(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
