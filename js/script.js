import Vue from 'vue';
import Index from './Index.vue';

window.eventBus = new Vue({});

window.onload = function() {
  const vm = new Vue({
    el: '#vwpapp',
    render: h => h(Index),
  });
};
