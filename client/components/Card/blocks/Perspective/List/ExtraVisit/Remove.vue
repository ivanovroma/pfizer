<template lang="pug">
  div(style="display: inline-block")
    v-dialog(
      v-model="dialog"
      width="500"
    )
      v-btn(
        fab
        flat
        small
        color="red"
        slot="activator"
      )
        v-icon delete

      v-card
        v-card-title(
          class="headline grey lighten-2"
          primary-title
          light
        ) Удалить запись

        v-card-text 
          v-alert(
            v-model="error.length > 0"
            type="error"
            class="mb15"
          ) {{ this.error }}
          div Вы уверены?

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
          ) Удалить
</template>

<script>
import itemRemove from '@/mixins/item/remove'

export default {
  mixins: [itemRemove],
  methods: {
    async onSubmit () {
      this.buttonLoading = true

      await this.sendData()

      this.buttonLoading = false
    }
  }
}
</script>
