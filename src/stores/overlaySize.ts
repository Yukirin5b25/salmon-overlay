import { defineStore } from 'pinia'

export const useOverlaySizeStore = defineStore('overlaySize', {
  state: () => {
    return { 
      window: {
        height: 450,
        width: 90
      }
    }
  },
  actions: {
    updateSize(payload: any) {
      this.window.height = payload.height;
      this.window.width = payload.width;
    },
  }
})
