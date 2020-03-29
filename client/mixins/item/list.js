export default {
  props: ['cardId', 'partId', 'item', 'label'],
  data () {
    return {
      loading: false
    }
  },
  computed: {
    items () {
      return this.$store.getters['Card/getItemList']({
        cardId: this.cardId,
        partId: this.partId,
        item: this.item
      })
    }
  },
  async mounted () {
    this.loading = true

    await this.$store.dispatch('Card/getItemList', {
      cardId: this.cardId,
      partId: this.partId,
      item: this.item
    })

    this.loading = false
  }
}
