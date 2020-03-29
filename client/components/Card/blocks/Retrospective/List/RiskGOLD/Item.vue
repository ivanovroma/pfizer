<template lang="pug">
  tr
    td {{ item.fields.Year }}
    td {{ item.fields.RiskGOLD}}
    td 
      UpdateRetrospectiveRiskGOLD(:item="item")
      RemoveRetrospectiveRiskGOLD(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
