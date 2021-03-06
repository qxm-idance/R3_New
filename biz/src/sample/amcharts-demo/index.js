import Vue from 'vue';
import Doughnut from 'taurus/components/amcharts/doughnut';
import Gauge from 'taurus/components/amcharts/gauge';

new Vue({
  el: '#doughnutDiv',
  data: {
    doughnutData: [
      {'country': 'USA', 'visits': 4252},
      {'country': 'China', 'visits': 1882},
      {'country': 'Japan', 'visits': 1809},
      {'country': 'Germany', 'visits': 1322},
      {'country': 'UK', 'visits': 1122},
      {'country': 'France', 'visits': 1114},
      {'country': 'India', 'visits': 984},
      {'country': 'Spain', 'visits': 711},
      {'country': 'Netherlands', 'visits': 665},
      {'country': 'Russia', 'visits': 580},
      {'country': 'South Korea', 'visits': 443},
      {'country': 'Canada', 'visits': 441},
      {'country': 'Brazil', 'visits': 395},
      {'country': 'Italy', 'visits': 386},
      {'country': 'Australia', 'visits': 384},
      {'country': 'Taiwan', 'visits': 338},
      {'country': 'Poland', 'visits': 328}],
    content: {
      title: 'title for pie chart',
      name: 'pie name',
      desc: 'some description for name'
    }
  },
  components: {
    't-doughnut': Doughnut
  },
  methods: {
    labelFunction: function (label) {
      return label + 'test';
    }
  }
});
new Vue({
  el: '#gaugeDiv',
  data: {
    gaugeData: [
      {'color': '#84b761', 'endValue': 30, 'innerRadius': '85%', 'startValue': 0},
      {'color': '#fdd400', 'endValue': 60, 'innerRadius': '85%', 'startValue': 30},
      {'color': '#cc4748', 'endValue': 90, 'innerRadius': '85%', 'startValue': 60}]
  },
  components: {
    't-gauge': Gauge
  }
});

