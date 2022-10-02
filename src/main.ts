import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OverlayAPI } from 'ffxiv-overlay-api';

import { usecombatDataStore } from '@/stores/combatData'

import App from './App.vue'
import router from './router'

// import './assets/main.css'

const app = createApp(App)
const overlay = new OverlayAPI();

app.use(createPinia())
app.use(router)

const combatDataStore = usecombatDataStore()

overlay.addListener('CombatData', (data) => {
  combatDataStore.update(data.extendData);
});

overlay.startEvent();

app.mount('#app')
