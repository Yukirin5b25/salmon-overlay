import { defineStore } from 'pinia'
// import type ExtendData  from 'ffxiv-overlay-api/lib'

// interface State {
//   combatants: ExtendData[]
// }

export const usecombatDataStore = defineStore('combatData', {
  state: () => {
    return { 
      combatData: {
        active: false,
        encounter: {},
        combatant: []
      }
    }
  },
  actions: {
    update(payload: any) {
      this.combatData = payload;
    },
  }
})
