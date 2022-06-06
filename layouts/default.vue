<template>
  <v-app>
    <custom-cursor
      :targets="['img', 'a', 'button', 'hover-element']"
      :circle-color="'transparent'"
      :circle-color-hover="'#2f2f2f'"
      :dot-color="'red'"
      :dot-color-hover="'black'"
      :hover-size="1.8"
    ></custom-cursor>
    <TheHeader />
    <v-main id="scrolling-techniques-5 mb-10">
      <TheMarquee />
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
* {
  cursor: none;
}
</style>
