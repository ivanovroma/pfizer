<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Indicator}}
    td {{ item.fields.FenotipHOBL}}
    td 
      UpdateRetrospectivePulseoximetry(:item="item")
      RemoveRetrospectivePulseoximetry(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
