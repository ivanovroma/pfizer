<template lang="pug">
  tr
    td {{ item.index }}
    td 
      nuxt-link(
        :to="{ name: 'cards-id', params: { id: item._id } }") {{ item.name }}
    td {{ translatorKeyDate(item.birthDay) }}
    td {{ createdAtFormat }}
    td {{ user.name }}
    td {{ department.label }}
    td(class="text-xs-right")
      //- DepartmentUpdate(
      //-   :id = "item._id"
      //-   :label = "item.name")
      CardRemove(
        :id = "item._id")
    
</template>

<script>
import moment from 'moment'

export default {
  props: ['item'],
  computed: {
    createdAtFormat () {
      return moment(this.item.createdAt).format('DD.MM.YYYY')
    },
    department () {
      return this.$store.getters['Department/getByDepartmentId'](this.item.departmentId)
    },
    user () {
      return this.$store.getters['User/getByUserId'](this.item.userId)
    }
  }
}
</script>