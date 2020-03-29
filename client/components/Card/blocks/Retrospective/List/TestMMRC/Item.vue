<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Stage}}
    td 
      UpdateRetrospectiveTestMMRC(:item="item")
      RemoveRetrospectiveTestMMRC(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
