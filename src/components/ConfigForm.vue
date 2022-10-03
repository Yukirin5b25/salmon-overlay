<template>
  <n-form v-model="configs">
    <n-grid x-gap="16" cols="1" >
      <n-form-item-grid-item :span="1">
        <n-checkbox v-model:checked="configs.blurPlayerNames">Blur Names</n-checkbox>
      </n-form-item-grid-item>
      <n-form-item-grid-item :span="1" label="Combatants">
        <n-input-number v-model:value="configs.maxCombatants"></n-input-number>
      </n-form-item-grid-item>
    </n-grid>
  </n-form>
</template>

<script >
  import { NGrid, NForm, NFormItemGridItem, NInput, NInputNumber, NCheckbox } from 'naive-ui'
  import { computed } from 'vue'
  import { useOverlayConfigsStore } from '@/stores/overlayConfigs'
  export default {
    setup() {
      const overlayConfigsStore = useOverlayConfigsStore()
      return {
        configs: computed(() => overlayConfigsStore.configs )
      }
    },
    components: { NGrid, NForm, NFormItemGridItem, NInputNumber, NCheckbox },
  }
</script>