<template>
  <NLayout v-if="combatants.length != 0" content-style="padding: 2px 2px 2px 2px" :native-scrollbar="false">
    <EncounterBar :encounterInfo="encounter"></EncounterBar>
    <n-divider style="margin: 4px 0 4px 0"></n-divider>
    <CombatantCard v-for="combatant in combatants" 
      :key="combatant.name"
      :active="active" 
      :combatant-info="combatant"
    />
  </NLayout>
</template>

<script lang="ts">
  import CombatantCard from '@/components/CombatantCard.vue'
  import EncounterBar from '@/components/EncounterBar.vue'
  import { NLayout, NDivider } from 'naive-ui'
  import { computed } from 'vue';
  import { usecombatDataStore } from '@/stores/combatData'

  export default {
    setup() {
      const combatDataStore = usecombatDataStore()

      const active = computed(() => combatDataStore.combatData.active)
      const encounter = computed(() => combatDataStore.combatData.encounter)
      const combatants = computed(() => combatDataStore.combatData.combatant)
      return { 
        active,
        encounter,
        combatants     
      };
    },
    components: { NLayout, NDivider, CombatantCard, EncounterBar }
}
</script>