import { defineStore } from 'pinia'

export const usePrimaryPlayerStore = defineStore('primaryPlayer', {
  state: () => {
    return {
      primaryPlayer: {
        name: 'YOU'
      }
    }
  },
  actions: {
    updatePrimaryPlayer(payload: any) {
      this.primaryPlayer.name = payload
    }
  }
})
