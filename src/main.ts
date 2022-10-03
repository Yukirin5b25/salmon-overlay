import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OverlayAPI } from 'ffxiv-overlay-api';

import { useCombatDataStore } from '@/stores/combatData';
import { useOverlaySizeStore } from '@/stores/overlaySize';
import { useOverlayConfigsStore } from '@/stores/overlayConfigs'

import App from './App.vue';
// import router from './router';

// import './assets/main.css'

const app = createApp(App);
const overlay = new OverlayAPI();

app.use(createPinia());
// app.use(router);

const combatDataStore = useCombatDataStore();
const overlaySizeStore = useOverlaySizeStore();
const overlayConfigsStore = useOverlayConfigsStore();


// overlay.addListener('ChangeZone', (data) => {
//   console.log("Zone changed: ", data.zoneID)
// });

overlay.addListener('CombatData', (data) => {
  combatDataStore.update(data.extendData)
});

overlay.addListener('ChangePrimaryPlayer', (data) => {
  console.log("PrimaryPlayer changed: ", data.charID, ":", data.charName)
  overlayConfigsStore.updatePrimaryPlayer(data.charName)
});

window.addEventListener('resize', () => {
  overlaySizeStore.updateSize({height: window.innerHeight, width: window.innerWidth})
});

overlay.startEvent();

app.mount('#app');
