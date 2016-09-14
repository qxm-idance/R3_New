<template>
  <div id="chartdiv"></div>
</template>

<script>
import Vue from 'vue';
import 'amcharts/dist/amcharts/amcharts.js';
import 'amcharts/dist/amcharts/pie.js';

let Doughnut = Vue.extend({
  name: 'taurus-amcharts-doughnut',
  ready: function () {
    AmCharts.makeChart("chartdiv", {
      "type": "pie",
      "dataProvider": this.data,
      "labelsEnabled": this.labelsEnabled,   //是否显示label,默认不显示
      "titleField": this.titleField,    // 饼图的label用哪个源数据哪个字段来映射
      "valueField": this.valueField,    // 饼图的value用哪个源数据哪个字段来映射
      "depth3D": this.show3d ? 10 : 1,  // 是否3d显示，对外只提供显示或者不显示，显示为10，否则为1
      "labelRadius": 5,                 // label距离slice的距离
      "radius": "40%",                  // pie 的半径，可用百分比或像素来控制
      "innerRadius": "85%",             // slice厚度所占半径百分比
      "labelText": "[[title]]",        // label 显示模式，默认为	[[title]]: [[percents]]%
      "maxLabelWidth": 200,             // label的最大宽度，超出此宽度后换行
      "panEventsEnabled": true          // 防止在pie在移动端占据整个屏幕导致无法滑动
    });
  },
  props: {
    data: {
      type: Array
    },
    titleField: {
      type: String
    },
    valueField: {
      type: String
    },
    show3d: {
      default: false,
      type: Boolean,
      coerce: function (show3d) {
        return show3d === 'true' ? true : false;
      }
    },
    labelsEnabled: {
      default: false,
      type: Boolean,
      coerce: function (isEnable) {
        return isEnable === 'true' ? true : false;
      }
    }
  }
});
export default Doughnut;
</script>

<style>
  #chartdiv {
    width: 100%;
    height: 500px;
    font-size: 14px;
  }
</style>
