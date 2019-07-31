import Vue from 'vue'
import App from './App.vue'
import Child from './Child.vue';
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.component('app' , App); 
Vue.component('Child', Child);

new Vue({
  el: '#app',
  
})
