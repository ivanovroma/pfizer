export default {
  props: ['cardId', 'partId', 'form'],
  data () {
    return {
      loading: true,
      read: true,
      buttonLoading: false,
      error: '',
      successMessage: false
    }
  },
  methods: {
    cancelSetData () {
      this.setDataFromStore()
      this.read = true
      this.error = ''
      this.buttonLoading = false
    },
    setDataFromStore () {
      const card = this.$store.getters['Card/getCard']
      for (let i = 0; i < card.forms.length; i++) {
        const data = card.forms[i]
        if (data.form === this.form) {
          var formData = data
        }
      }

      for (let key in this.fields) {
        if (formData && formData.fields[key] !== undefined) {
          this.fields[key] = formData.fields[key]
        } else {
          this.fields[key] = null
        }
      }
    },
    async sendData () {
      const user = this.$store.getters['User/getCurrentUser']

      const result = await this.$store.dispatch('Card/writeForm', {
        form: this.form,
        cardId: this.cardId,
        userId: user._id,
        fields: this.fields,
        partId: this.partId
      })

      if (!result.success) {
        this.error = this.translatorError(result.response.message)
      } else {
        this.read = true
        this.error = ''
        this.successMessage = true
      }
    }
  },
  async mounted () {
    this.loading = true
    await this.$store.dispatch('Card/readForm', {
      form: this.form,
      cardId: this.cardId,
      partId: this.partId
    })

    await this.setDataFromStore()

    this.loading = false
  },
  computed: {
    done () {
      const card = this.$store.getters['Card/getCard']
      for (let i = 0; i < card.forms.length; i++) {
        const data = card.forms[i]
        if (data.form === this.form) {
          return true
        }
      }
      return false
    }
  }
}
