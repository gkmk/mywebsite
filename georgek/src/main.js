/**
 * Version v0.0.1
 */

// Load VUE
import Vue from 'vue'
import App from './App.vue'

// Load Main styles
import './assets/scss/main.scss'

// Init VUE
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')