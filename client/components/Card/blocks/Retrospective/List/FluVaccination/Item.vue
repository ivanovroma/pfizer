<template lang="pug">
  tr
    td {{ item.fields.Year }}
    td 
      UpdateRetrospectiveFluVaccination(:item="item")
      RemoveRetrospectiveFluVaccination(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
