import { defineStore } from 'pinia'

export const useOverlayConfigsStore = defineStore('overlayConfigs', {
  state: () => {
    return { 
      configs: {
        primaryPlayer: 'YOU',
        maxCombatants: 8,
        blurPlayerNames: false
      }
    }
  },
  actions: {
    updatePrimaryPlayer(payload: any) {
      this.configs.primaryPlayer = payload
    },
  }
})
