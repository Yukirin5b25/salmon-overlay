import { defineStore } from 'pinia'

export const useOverlayConfigsStore = defineStore('overlayConfigs', {
  state: () => {
    return { 
      configs: {
        maxCombatants: 8,
        blurPlayerNames: false
      }
    }
  },
  persist: true
})
