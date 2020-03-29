export default {
  props: ['cardId', 'partId', 'item'],
  data () {
    return {
      dialog: false,
      buttonLoading: false,
      error: '',
      successMessage: false
    }
  },
  methods: {
    async sendData () {
      const user = this.$store.getters['User/getCurrentUser']

      const result = await this.$store.dispatch('Card/createItem', {
        item: this.item,
        userId: user._id,
        cardId: this.cardId,
        partId: this.partId,

        fields: this.fields
      })

      if (!result.success) {
        this.error = this.translatorError(result.response.message)
      } else {
        this.dialog = false
        this.read = true
        this.error = ''
        this.successMessage = true
        this.resetForm()
      }
    },
    resetForm () {
      for (let key in this.fields) {
        this.fields[key] = null
      }
    }
  }
}
