<template lang="pug">
  v-card
    v-card-title(class="headline" :class="{ 'blue lighten-4': dark }" color="indigo") {{ title }}

    v-divider

    v-card-text(class="p15" :class="{ 'blue lighten-2': dark }")
      slot
</template>

<script>
  export default {
    props: ['title', 'dark']
  }
</script>
