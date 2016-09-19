/**
 * Created by zengjie on 16/9/7.
 */
import Vue from 'vue';
import rangeSlider from 'taurus/components/range-slider/range-slider';
import select from 'taurus/components/select/select';
import Tooltip from 'taurus/components/tooltips/tooltip';
Vue.use(Tooltip);
new Vue({
  el: '#range-slider-wrap',
  components: {
    't-range-slider': rangeSlider,
    't-range-slider-select': select
  },
  data: {
    rangeOptions: {
      isDrag: false,
      rangeLabel: 'Months',
      min: 0,
      max: 6,
      step: 1,
      start: 0,
      end: 3
    },
    range: {
      start: 0,
      end: 3
    },
    options: [],
    defaultVal: ''

  },
  events: {
    'set-start': function (endValue) {
      this.range.start = endValue;
    },
    'set-end': function (endValue) {
      this.range.end = endValue;
    }
  },
  methods: {
    startChange: function (data) {
      this.range.start = data.value;
      this.rangeOptions.start = data.value;
      this.$broadcast('reset-start', data.value);
    },
    endChange: function (data) {
      this.range.end = data.value;
      this.rangeOptions.end = data.value;
      this.$broadcast('reset-end', data.value);
    }
  },
  created: function () {
    var _min = this.rangeOptions.min;
    var _max = this.rangeOptions.max;
    var _step = this.rangeOptions.step;
    for (var i = _min; i <= _max; i += _step) {
      var obj = {
        value: i,
        label: i + ' Month'
      };
      this.options.push(obj);
    }
    this.defaultVal = _min;
  }
});
new Vue({
  el: '#single-slider-wrap',
  components: {
    't-single-slider': rangeSlider,
    't-range-slider-select': select
  },
  data: {
    rangeOptions: {
      rangeLabel: 'Months',
      type: 'single',
      min: 0,
      max: 6,
      step: 1,
      start: 0,
      end: 3
    },
    range: {
      start: 0,
      end: 3
    },
    options: [],
    defaultVal: ''

  },
  events: {
    'set-start': function (endValue) {
      this.range.start = endValue;
    },
    'set-end': function (endValue) {
      this.range.end = endValue;
    }
  },
  methods: {
    endChange: function (data) {
      this.range.end = data.value;
      this.rangeOptions.end = data.value;
      this.$broadcast('reset-end', data.value);
    }
  },
  created: function () {
    var _min = this.rangeOptions.min;
    var _max = this.rangeOptions.max;
    var _step = this.rangeOptions.step;
    for (var i = _min; i <= _max; i += _step) {
      var obj = {
        value: i,
        label: i + ' Month'
      };
      this.options.push(obj);
    }
    this.defaultVal = _min;
  }
});
new Vue({
  el: '#select-slider-wrap',
  components: {
    't-select-slider': rangeSlider
  },
  data: {
    rangeOptions: {
      rangeLabel: 'MB',
      type: 'select',
      min: 100,
      max: 600,
      step: 100,
      start: 100,
      end: 300
    },
    range: {
      start: 100,
      end: 300
    }

  },
  events: {
    'set-start': function (endValue) {
      this.range.start = endValue;
    },
    'set-end': function (endValue) {
      this.range.end = endValue;
    }
  }
});
