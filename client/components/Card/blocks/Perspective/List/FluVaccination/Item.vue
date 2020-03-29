<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Vaccina }}
    td 
      UpdatePerspectiveFluVaccination(:item="item")
      RemovePerspectiveFluVaccination(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
