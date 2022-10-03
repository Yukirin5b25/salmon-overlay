<template>
  <n-page-header>
    <template #title>
      <n-space style="margin-left: -6px">
        <n-divider vertical style="height: 1.2em"></n-divider>
        <n-h6 style="margin: 2px 0 0 0px;">{{ encounterInfo.zoneName || 'No Data' }}</n-h6>
        <n-divider vertical style="height: 1.2em"></n-divider>
      </n-space>
    </template>
    <template #subtitle >
      <n-space>
        <div style="margin-top: 4px">
          {{ encounterInfo.duration || '00:00' }}
        </div>
        <n-divider vertical style="height: 1.2em"></n-divider>
      </n-space>
    </template>
    <template #extra>
      <n-button ghost :bordered="false" @click="showConfigModal = true">
        <template #icon>
          <n-icon>
            <IosSettings/>
          </n-icon>
        </template>
      </n-button>
    </template>
  </n-page-header>
  <n-modal v-model:show="showConfigModal">
    <n-card title="Overlay Configs">
      <ConfigForm/>
    </n-card>
  </n-modal>
</template>

<script >
  import { NDivider, NH6, NPageHeader, NSpace, NButton, NIcon, NModal, NCard } from 'naive-ui'
  import { IosSettings } from '@vicons/ionicons4'
  import { ref } from 'vue'
  import ConfigForm from '@/components/ConfigForm.vue'
  export default {
    setup() {
      return {
        showConfigModal: ref(false)
      }
    },
    components: { NDivider, NH6, NPageHeader, NSpace, NIcon, NButton, NModal, NCard, IosSettings, ConfigForm },
    props: ['encounterInfo']
  }
</script>