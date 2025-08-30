import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'
import { createPinia } from 'pinia'

const app=createApp(App)
app.use(router).mount('#app')
app.use(createApp())
