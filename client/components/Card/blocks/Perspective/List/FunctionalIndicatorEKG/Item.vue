<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Result }}
    td {{ item.fields.Conclusion }}
    td 
      UpdatePerspectiveFunctionalIndicatorEKG(:item="item")
      RemovePerspectiveFunctionalIndicatorEKG(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
