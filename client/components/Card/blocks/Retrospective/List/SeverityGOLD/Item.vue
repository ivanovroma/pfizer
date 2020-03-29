<template lang="pug">
  tr
    td {{ item.fields.Year }}
    td {{ item.fields.SeverityGOLD}}
    td 
      UpdateRetrospectiveSeverityGOLD(:item="item")
      RemoveRetrospectiveSeverityGOLD(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
