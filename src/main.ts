import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OverlayAPI } from 'ffxiv-overlay-api';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import { useCombatDataStore } from '@/stores/combatData';
import { useOverlaySizeStore } from '@/stores/overlaySize';
import { usePrimaryPlayerStore } from '@/stores/primaryPlayer'

import App from './App.vue';
// import router from './router';

// import './assets/main.css'

const app = createApp(App);
const pinia = createPinia()
const overlay = new OverlayAPI();

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
// app.use(router);

const combatDataStore = useCombatDataStore();
const overlaySizeStore = useOverlaySizeStore();
const primaryPlayerStore = usePrimaryPlayerStore();


// overlay.addListener('ChangeZone', (data) => {
//   console.log("Zone changed: ", data.zoneID)
// });

overlay.addListener('CombatData', (data) => {
  combatDataStore.update(data.extendData)
});

overlay.addListener('ChangePrimaryPlayer', (data) => {
  console.log("PrimaryPlayer changed: ", data.charID, ":", data.charName)
  primaryPlayerStore.updatePrimaryPlayer(data.charName)
});

window.addEventListener('resize', () => {
  overlaySizeStore.updateSize({height: window.innerHeight, width: window.innerWidth})
});

overlay.startEvent();

app.mount('#app');
