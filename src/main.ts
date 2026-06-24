import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import type { Component } from 'vue'

const app = createApp(App as Component)

app.use(createPinia())
app.use(router)

app.mount('#app')
