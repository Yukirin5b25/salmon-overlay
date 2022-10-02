<template>
  <n-divider title-placement="left" style="margin: 0 0 0 0">
    <template #default>
      <n-p style="margin: 0 0 0 0">{{ encounterInfo.dps }}</n-p>
      <n-divider vertical />
      <n-p style="margin: 0 0 0 0">{{ encounterInfo.duration }}</n-p>
      <n-divider vertical />
      <n-p style="margin: 0 0 0 0">{{ encounterInfo.zoneName }}</n-p>
    </template>
  </n-divider>
</template>

<script lang="ts" >
  import { NDivider, NP } from 'naive-ui'
  export default {
   setup() {
   },
   components: { NDivider, NP },
   props: ['encounterInfo']
  }
</script>