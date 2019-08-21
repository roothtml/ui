// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from '@/components/ui-icon'
import ButtonGroup from '@/components/button-group'
import Button from '@/components/button'
import chai from 'chai'
Vue.config.productionTip = false
Vue.component('ui-icon',Icon);
Vue.component('ui-button',Button);
Vue.component('ui-button-group',ButtonGroup);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 单元测试
const expect=chai.expect;
{
    const Constructor=Vue.extend(Button);
    const button=new Constructor({
      propsData:{
         icon:'thumbs-up', 
      }
    });
    button.$mount('#testButton')
    const el=button.$el.querySelector('use');
    const href=el.getAttribute('xlink:href');
    expect(href).to.eq('#ui-thumbs-up');
}
{
  const Constructor=Vue.extend(Button);
  const button=new Constructor({
    propsData:{
       icon:'loading', 
       loading:true
    }
  });
  button.$mount('#testButtonLodding')
  const el=button.$el.querySelector('use');
  const svg=button.$el.querySelector('svg');
  const svgClass=svg.getAttribute('class').split(' ');
  const svgLast=svgClass[svgClass.length-1]; //考虑顺序问题 可以用过滤 保留一个
  const href=el.getAttribute('xlink:href');
  expect(href).to.eq('#ui-loading');
  expect(svgLast).to.eq('loading'); 
}