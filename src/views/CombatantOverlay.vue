<template>
  <n-layout v-if="combatants.length != 0" content-style="padding: 2px 2px 2px 2px" :native-scrollbar="false">
    <EncounterBar :encounterInfo="encounter"></EncounterBar>
    <n-divider style="margin: 4px 0 4px 0"></n-divider>
    <n-tabs animated size="small" default-value="DPS" trigger="hover" @update:value="updatePannelMode" :tabs-padding="8" pane-style="padding-top: 4px">
      <template #suffix>
        <div style="margin-right: 8px">
          {{ pannelMode === 'DPS' ? encounter.dps : encounter.hps }}
        </div>
      </template>
      <n-tab-pane name="DPS" tab="DPS">
        <n-grid :cols="1">
          <n-grid-item :span="1" v-for="combatant in combatants" :key="combatant.name">
            <CombatantCard
              mode="DPS"
              :active="active" 
              :combatant-info="combatant"
              :height="combatantCardHeight"
            />
          </n-grid-item>
        </n-grid>
      </n-tab-pane>
      <n-tab-pane name="HPS" tab="HPS">
        <n-grid :cols="1">
          <n-grid-item :span="1" v-for="combatant in combatants" :key="combatant.name">
            <CombatantCard
              mode="HPS"
              :active="active" 
              :combatant-info="combatant"
              :height="combatantCardHeight"
            />
          </n-grid-item>
        </n-grid>
      </n-tab-pane>
    </n-tabs>
  </n-layout>
</template>

<script>
  import CombatantCard from '@/components/CombatantCard.vue'
  import EncounterBar from '@/components/EncounterBar.vue'
  import { NLayout, NDivider, NGrid, NGridItem, NTabs, NTabPane } from 'naive-ui'
  import { computed } from 'vue';
  import { useCombatDataStore } from '@/stores/combatData'
  import { useOverlaySizeStore } from '@/stores/overlaySize'
  import { floor } from 'lodash';

  export default {
    setup() {
      const combatDataStore = useCombatDataStore()
      const overlaySizeStore = useOverlaySizeStore()

      const active = computed(() => combatDataStore.combatData.active )
      const encounter = computed(() => combatDataStore.combatData.encounter )
      const combatants = computed(() => combatDataStore.combatData.combatant )
      const overlaySize = computed(() => overlaySizeStore.window )
      const pannelMode = 'DPS';
      return { 
        active,
        encounter,
        combatants,
        overlaySize,
        pannelMode
      };
    },
    components: { NLayout, NDivider, CombatantCard, EncounterBar, NTabs, NTabPane, NGrid, NGridItem, },
    computed: {
      combatantCardHeight() {
        return floor(this.overlaySize.height / 9) - 8
      }
    },
    methods: {
      updatePannelMode(value) {
        this.pannelMode = value
      }
    }
}
</script>

<style scoped>
  .n-tabs-nav {
    padding: 0 8px 0 8px
  }
</style>