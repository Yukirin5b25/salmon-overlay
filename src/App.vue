<template>
  <n-config-provider  :theme="darkTheme" :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>

<script lang="ts">
  import { RouterView } from 'vue-router'
  import { NConfigProvider, darkTheme, lightTheme } from 'naive-ui'
  export default {
    setup () {
      const themeOverrides = {
        Layout: {
          color: "rgba(16, 16, 20, 0.4)"
        },
        // Card: {
        //   color: "rgba(24, 24, 28, 0.6)"
        // }
      }

      return {
        darkTheme,
        lightTheme,
        themeOverrides
      }
    },
    components: { NConfigProvider, RouterView }
  }
</script>

<style>
  .body {
    opacity: 0.6
  }
</style>
