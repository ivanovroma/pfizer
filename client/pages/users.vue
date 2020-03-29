<template lang="pug">
  v-layout(column justify-center align-center)
    
    UserCreate
    
    v-flex(class="l-12")
      
      //- User list
      v-card(class="mb30")
        v-card-title(class="headline") Пользователи
          v-spacer

          v-btn(
            flat
            icon
            color="indigo"
            :loading="buttonLoading"
            @click="refresh")
            v-icon refresh

        v-divider
        v-card-text(class="p0")
          UserList(:loading="loading")
</template>

<script>
export default {
  middleware: ['Anonimus', 'Admin'],
  data () {
    return {
      buttonLoading: false,
      loading: false
    }
  },
  methods: {
    async refresh () {
      this.buttonLoading = true
      await this.$store.dispatch('User/get')
      this.buttonLoading = false
    }
  }
}
</script>