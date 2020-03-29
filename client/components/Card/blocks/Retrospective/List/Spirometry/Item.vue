<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.OfvBefore}}
    td {{ item.fields.OfvAfter}}
    td {{ item.fields.FjelAfter}}
    td {{ item.fields.OfvFjel}}
    td 
      UpdateRetrospectiveSpirometry(:item="item")
      RemoveRetrospectiveSpirometry(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
