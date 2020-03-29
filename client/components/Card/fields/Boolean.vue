<template lang="pug">
  v-radio-group(
    v-bind:value="value"
    v-on:change="$emit('input', $event)"
    :label="label"
    class="boolean_field") 
    v-radio(
      v-for="value in BooleanValues"
      :key="value.text"
      :label="`${value.text}`"
      :value="value.value")
      
</template>

<script>
export default {
  props: ['label', 'value'],
  data () {
    return {
      BooleanValues: [
        {
          text: 'Да',
          value: true
        },
        {
          text: 'Нет',
          value: false
        }
      ]
    }
  }
}
</script>

<style>
.boolean_field {
  padding-top: 0px !important;
  margin-top: 0px !important;
}
</style>


