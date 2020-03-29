<template lang="pug">
  tr
    td 
      nuxt-link(
        :to="{ name: 'extravisit-id', params: { id: item._id, item: item } }") {{ item.fields.Cause }}
    td {{ translatorKeyDate(item.fields.VisitDate) }}
    td {{ item.fields.VisitResult }}
    td 
      UpdatePerspectiveExtraVisit(:item="item")
      RemovePerspectiveExtraVisit(:id="item._id")
</template>

<script>
export default {
  props: ['item']
}
</script>
