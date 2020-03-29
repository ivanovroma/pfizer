<template lang="pug">
  
    v-dialog(
      v-model="dialog"
      width="500"
    )
      v-btn(
        fixed
        slot="activator"
        dark
        fab
        left
        bottom
        color="red"
      )
        v-icon add

      v-card
        v-card-title(
          class="headline grey lighten-2"
          primary-title
          light
        ) Новая карта

        v-divider

        v-card-text
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          
          v-text-field(
            label="ФИО"
            outline
            v-model="name")

          v-text-field(
            mask="date"
            v-model="birthDay"
            label="Дата рождения"
            outline)

        v-divider

        v-card-actions
          v-spacer
          v-btn(
            color="primary"
            flat
            @click="dialog = false"
          ) Отмена
          v-btn(
            color="indigo"
            @click="onSubmit"
            dark
            :loading="buttonLoading"
          ) Создать
</template>

<script>
  export default {
    data: vm => ({
      dialog: false,
      buttonLoading: false,
      error: '',
      name: '',
      birthDay: '',
      mask: 'date'
    }),
    methods: {
      async onSubmit () {
        this.buttonLoading = true

        const result = await this.$store.dispatch('Card/create', {
          birthDay: this.birthDay,
          name: this.name,
          userId: this.user._id,
          departmentId: this.user.departmentId
        })

        if (!result.success) {
          this.error = result.response.message
        } else {
          this.error = ''
          this.dialog = false
          this.name = ''
          this.birthDay = ''
        }

        this.buttonLoading = false
      }
    },
    computed: {
      user () {
        return this.$store.getters['User/getCurrentUser']
      }
    }
  }
</script>
