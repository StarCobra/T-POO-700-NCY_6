import './assets/CSS/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// After installing libraries through npm, import them here
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the Google icon to the library
library.add(faGoogle)

// Create the app as before
const pinia = createPinia()
const app = createApp(App)

// Use all needed plugins
app.use(pinia)
app.use(router)

// Register the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
