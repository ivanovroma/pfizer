<template lang="pug">
  v-layout(column justify-center align-center)
    
    CardCreate

    v-flex(class="l-12")
      CardList
</template>

<script>
  export default {
    middleware: 'Anonimus'
  }
</script>