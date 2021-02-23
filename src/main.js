import Vue from 'vue'
import App from './App.vue'
import store from './store'
import InfiniteScroll from 'vue-infinite-scroll'
import { LayoutPlugin, ImagePlugin, SpinnerPlugin } from 'bootstrap-vue'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(LayoutPlugin)
Vue.use(ImagePlugin)
Vue.use(SpinnerPlugin)
Vue.use(InfiniteScroll)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
