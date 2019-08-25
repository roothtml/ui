// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from '@/components/ui-icon'
import ButtonGroup from '@/components/button-group'
import Button from '@/components/button' 
import Input from '@/components/input'
Vue.config.productionTip = false
Vue.component('ui-icon',Icon);
Vue.component('ui-button',Button);
Vue.component('ui-Input',Input);
Vue.component('ui-button-group',ButtonGroup);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
 