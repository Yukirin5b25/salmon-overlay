import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { OverlayAPI } from 'ffxiv-overlay-api';

import { useCombatDataStore } from '@/stores/combatData';
import { useOverlaySizeStore } from '@/stores/overlaySize';

import App from './App.vue';
import router from './router';

// import './assets/main.css'

const app = createApp(App);
const overlay = new OverlayAPI();

app.use(createPinia());
app.use(router);

const combatDataStore = useCombatDataStore();
const overlaySizeStore = useOverlaySizeStore();

overlay.addListener('CombatData', (data) => {
  combatDataStore.update(data.extendData)
});

window.addEventListener('resize', () => {
  overlaySizeStore.updateSize({height: window.innerHeight, width: window.innerWidth})
});

overlay.startEvent();

app.mount('#app');
