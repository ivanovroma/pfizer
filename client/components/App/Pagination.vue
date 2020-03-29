<template lang="pug">
  v-pagination(
    v-model="page"
    :length="pages"
    v-if="pages != 1"
    circle)
</template>

<script>
export default {
  data () {
    return {
      page: 1
    }
  },
  watch: {
    async page () {
      await this.$store.dispatch('Card/get', { page: this.page })
    }
  },
  computed: {
    pages () {
      const pagination = this.$store.getters['Card/getPagination']
      return pagination.pages
    }
  },
  created () {
    const pagination = this.$store.getters['Card/getPagination']
    this.page = pagination.page
  }
}
</script>
