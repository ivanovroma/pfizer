<template lang="pug">
  tr
    td {{ item.fields.Year }}
    td {{ item.fields.Vaccina }}
    td 
      UpdateRetrospectivePneumococcalInfectionVaccination(:item="item")
      RemoveRetrospectivePneumococcalInfectionVaccination(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
