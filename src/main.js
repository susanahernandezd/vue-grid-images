import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { LayoutPlugin, ImagePlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(LayoutPlugin)
Vue.use(ImagePlugin)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
