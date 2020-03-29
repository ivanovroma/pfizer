<template lang="pug">
  tr
    td 
      nuxt-link(
        :to="{ name: 'hospitalizations-id', params: { id: item._id, item: item } }") {{ item.fields.Cause }}
    td {{ translatorKeyDate(item.fields.HospitalizationStart) }}
    td {{ translatorKeyDate(item.fields.HospitalizationEnd) }}
    td {{ item.fields.NumberDays }}
    td 
      UpdatePerspectiveHospitalization(:item="item")
      RemovePerspectiveHospitalization(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
