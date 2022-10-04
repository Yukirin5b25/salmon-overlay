<template>
  <n-card title="Overlay Configs">
    <template #header-extra>
      <n-button ghost type="error" @click="resetConfig">
        Reset
      </n-button>
    </template>
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
  </n-card>
</template>

<script >
  import { computed } from 'vue'
  import { Promise } from 'bluebird'
  import { useOverlayConfigsStore } from '@/stores/overlayConfigs'
  import { NGrid, NForm, NFormItemGridItem, NCard, NButton, NInputNumber, NCheckbox } from 'naive-ui'
  export default {
    setup() {
      const overlayConfigsStore = useOverlayConfigsStore()
      return {
        configs: computed(() => overlayConfigsStore.configs )
      }
    },
    components: { NGrid, NForm, NFormItemGridItem, NInputNumber, NCheckbox, NCard, NButton },
    methods: {
      resetConfig() {
        Promise.try(() => {
          localStorage.removeItem("overlayConfigs")
        }).catch((e) => {
          console.warn(e)
        }).then(() => {
          useOverlayConfigsStore().$reset()
        })
      }
    }
  }
</script>