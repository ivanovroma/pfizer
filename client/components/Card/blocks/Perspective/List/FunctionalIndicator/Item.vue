<template lang="pug">
  tr
    td {{ translatorKeyDate(item.fields.EventDate) }}
    td {{ item.fields.Result }}
    td {{ item.fields.Conclusion }}
    td 
      UpdatePerspectiveFunctionalIndicator(:item="item")
      RemovePerspectiveFunctionalIndicator(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
