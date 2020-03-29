<template lang="pug">
  v-text-field(
    v-bind:value="value"
    v-on:change="$emit('input', $event)"
    mask="date"
    :label="label"
    outline)
</template>

<script>
export default {
  props: ['label', 'value']
}
</script>
