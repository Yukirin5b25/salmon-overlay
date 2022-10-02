<template>
  <n-layout v-if="combatants.length != 0" content-style="padding: 2px 2px 2px 2px" :native-scrollbar="false">
    <EncounterBar :encounterInfo="encounter"></EncounterBar>
    <n-divider style="margin: 4px 0 4px 0"></n-divider>
    <n-grid :cols="1">
      <n-grid-item :span="1" v-for="combatant in combatants" :key="combatant.name">
        <CombatantCard
          :active="active" 
          :combatant-info="combatant"
          :height="combatantCardHeight"
        />
      </n-grid-item>
    </n-grid>
  </n-layout>
</template>

<script lang="ts">
  import CombatantCard from '@/components/CombatantCard.vue'
  import EncounterBar from '@/components/EncounterBar.vue'
  import { NLayout, NDivider, NGrid, NGridItem } from 'naive-ui'
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
      return { 
        active,
        encounter,
        combatants,
        overlaySize
      };
    },
    components: { NLayout, NDivider, CombatantCard, EncounterBar, NGrid, NGridItem, },
    computed: {
      combatantCardHeight(): number {
        return floor(this.overlaySize.height / 9) - 8
      }
    }
}
</script>