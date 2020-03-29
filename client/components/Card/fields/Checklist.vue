<template lang="pug">
  v-select(
    v-bind:value="value"
    v-on:change="$emit('input', $event)"
    :items="items"
    chips
    :label="label"
    multiple
    outline)
</template>

<script>
export default {
  props: ['label', 'items', 'value']
}
</script>

