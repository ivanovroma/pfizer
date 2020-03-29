export default {
  props: ['item'],
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
      const result = await this.$store.dispatch('Card/updateItem', {
        itemId: this.item._id,
        item: this.item.item,

        fields: this.fields
      })

      if (!result.success) {
        this.error = this.translatorError(result.response.message)
      } else {
        this.dialog = false
        this.read = true
        this.error = ''
        this.successMessage = true
      }
    },
    openDialog () {
      this.setDataFromProps()
      this.dialog = true
    },
    setDataFromProps () {
      for (let key in this.fields) {
        this.fields[key] = this.item.fields[key]
      }
    }
  },
  mounted () {
    this.setDataFromProps()
  }
}
