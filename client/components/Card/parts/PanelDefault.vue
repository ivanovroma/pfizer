<template lang="pug">
  v-card
    v-card-title(
      class="headline"
      class="headline blue lighten-4"
      primary-title
      light) {{ title }}

      v-spacer
      v-btn(
        color="blue darken-4"
        flat
        v-if="!collapse"
        @click="collapse = !collapse") Развернуть
        v-icon(right) keyboard_arrow_down
      v-btn(
        color="blue darken-4"
        flat
        v-if="collapse"
        @click="collapse = !collapse") Свернуть
        v-icon(right) keyboard_arrow_up

    v-card-text(
      class="blue lighten-2 p15"
      v-if="collapse")
      slot
</template>

<script>
  export default {
    props: ['title', 'hide'],
    data () {
      return {
        collapse: true
      }
    },
    created () {
      if (this.hide === true) this.collapse = false
      else this.collapse = true
    }
  }
</script>
