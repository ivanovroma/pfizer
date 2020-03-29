<template lang="pug">
  tr
    td {{ item.fields.Year }}
    td {{ item.fields.Amount}}
    td 
      UpdateRetrospectiveAmount(:item="item")
      RemoveRetrospectiveAmount(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
