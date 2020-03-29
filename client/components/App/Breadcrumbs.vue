<template lang="pug">
  v-card(class="mb30")
    v-card-title(class="headline" color="indigo")
      v-breadcrumbs(
        :items="items"
        class="p0"
        divider="/")
        template(slot="item" slot-scope="props")
          
          v-breadcrumbs-item(v-if="!props.item.disabled")
            nuxt-link(
              :to="props.item.to") {{ props.item.text }}
          v-breadcrumbs-item(v-if="props.item.disabled" disabled) {{ props.item.text }}
</template>

<script>
export default {
  props: ['items']
}
</script>

