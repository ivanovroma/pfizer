<template lang="pug">
  v-layout(column justify-center align-center)
    
    DepartmentCreate
    
    v-flex(class="l-12")
      
      v-card(class="mb30")
        v-card-title(class="headline" color="indigo") Подразделения
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
          DepartmentList(:loading="loading")
</template>

<script>
  export default {
    middleware: 'Anonimus',
    data () {
      return {
        buttonLoading: false,
        loading: false
      }
    },
    methods: {
      async refresh () {
        this.buttonLoading = true
        await this.$store.dispatch('Department/get')
        this.buttonLoading = false
      }
    }
  }
</script>