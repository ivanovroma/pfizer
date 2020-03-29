export default {
  props: ['id'],
  data () {
    return {
      dialog: false,
      buttonLoading: false,
      error: ''
    }
  },
  methods: {
    async sendData () {
      const result = await this.$store.dispatch('Card/removeItem', { itemId: this.id })

      if (!result.success) {
        this.error = result.response.message
      } else {
        this.error = ''
        this.dialog = false
      }
    }
  }
}
