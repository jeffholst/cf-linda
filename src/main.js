import Vue from 'vue'
import App from './App.vue'
import {  MdToolbar, 
          MdLayout, 
          MdField, 
          MdTable, 
          MdCard, 
          MdContent,
          MdButton,
          MdDialog} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import "vue-material-design-icons/styles.css"

Vue.config.productionTip = false

Vue.use(MdLayout)
Vue.use(MdToolbar)
Vue.use(MdField)
Vue.use(MdTable)
Vue.use(MdCard)
Vue.use(MdContent)
Vue.use(MdButton)
Vue.use(MdDialog)

new Vue({
  render: h => h(App),
  data: {
    userWeight: ''
  }
}).$mount('#app')
