<template>
  <div class="gauge"></div>
</template>

<script>
  import Vue from 'vue';
  import 'amcharts/dist/amcharts/amcharts.js';
  import 'amcharts/dist/amcharts/gauge.js';

  let Gauge = Vue.extend({
    name: 'taurus-amcharts-gauge',
    ready: function () {
      let chartContainer = this.$el;
      AmCharts.makeChart(chartContainer, {
        "type": "gauge",
        "theme": "light",
        "axes": [{
          "axisThickness": 1,
          "axisAlpha": 0.2,
          "tickAlpha": 0.2,
          "tickThickness": 0,
          "minorTickLength": 1,
          "tickLength": 5,
          "valueInterval": 10,
          "bands": this.data,
          "bottomText": "0 km/h",
          "endValue": 90,
          "showFirstLabel": false,
          "showLastLabel": false
        }],
        "arrows": [{}]
      });
    },
    props: {
      data: {
        type: Array
      }
    }
  });
  export default Gauge;
</script>

<style>
  .gauge {
    width: 100%;
    height: 300px;
    font-size: 14px;
    overflow: hidden;
    display: inline-block;
  }
</style>
