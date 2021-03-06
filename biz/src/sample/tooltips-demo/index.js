import Vue from 'vue';
import Tooltip from 'taurus/components/tooltips/tooltip';

Vue.use(Tooltip);
new Vue({
  el: 'body',
  data: {
    tipTitle: 'tipTitle',
    tipText: 'this is  tipText!',
    errorTitle: 'error title',
    errorText: 'this is error text',
    longTipMessage: 'this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message,this is test message',
    formTipTitle: 'form-tipTitle',
    formTipText: 'form-tipText'
  },
  methods: {
    resetTitle: function () {
      this.formTipTitle = 'resetTitle' + Math.random();
    }
  }
});
