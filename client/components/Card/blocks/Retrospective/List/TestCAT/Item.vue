<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Points}}
    td 
      UpdateRetrospectiveTestCAT(:item="item")
      RemoveRetrospectiveTestCAT(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
