<template lang="pug">
  div
    div(class="l-6 s-12" style="margin: 0px auto")
      h1(class="mb15 pt15") {{ label }}
      slot
    v-divider
</template>

<script>
export default {
  props: ['label']
}
</script>
