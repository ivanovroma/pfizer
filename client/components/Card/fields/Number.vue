<template lang="pug">
  v-text-field(
    :label="label"
    v-bind:value="value"
    v-on:input="$emit('input', $event)"
    :disabled="disabled"
    type="number"
    outline)
</template>

<script>
export default {
  data () {
    return {
      string: ''
    }
  },
  props: {
    value: {},
    label: {},
    disabled: {
      type: Boolean
    }
  },
  methods: {
    input (e) {
      console.log(e)
    }
  }
}
</script>

