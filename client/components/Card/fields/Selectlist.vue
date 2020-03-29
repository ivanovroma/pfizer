<template lang="pug">
  v-select(
    :items="items"
    v-bind:value="value"
    v-on:change="$emit('input', $event)"
    :label="label"
    outline)
</template>

<script>
export default {
  props: ['label', 'items', 'value']
}
</script>
