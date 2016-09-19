import Vue from 'vue';
import TSelDropDown from 'taurus/components/dropdown/select-dropdown.vue';
import TSubDropDown from 'taurus/components/dropdown/subscription-dropdown.vue';

new Vue({
  name: 'dropdown-demo',
  el: 'body',
  components: {
    TSelDropDown,
    TSubDropDown
  },
  data: {
    selDropDownData: [
      {
        'text': 'Push-Communication',
        'id': 1
      },
      {
        'text': 'Trouble-Ticket',
        'id': 2
      },
      {
        'text': 'Campaign',
        'id': 3
      },
      {
        'text': 'Customer-Management',
        'id': 4
      },
      {
        'text': 'C3',
        'id': 5
      }
    ],
    selDropReloadData: [
      {
        'text': 'Greg Zhang',
        'id': 1
      },
      {
        'text': 'Mike Bibby',
        'id': 2
      },
      {
        'text': 'Jay Chou',
        'id': 3
      },
      {
        'text': 'Amy Sun',
        'id': 4
      },
      {
        'text': 'Paul Gregory',
        'id': 5
      },
      {
        'text': 'Joan Wu',
        'id': 6
      },
      {
        'text': 'Lebron James',
        'id': 7
      }
    ],
    subDropDownData: [
      {
        'baseInfo': 'Jannik Mørch Søndergaard',
        'detailInfo': 'Jannik Mørch Søndergaard (32108000158121)',
        'ico': 'icon-people',
        'id': 1
      },
      {
        'baseInfo': 'Jannik Zhang',
        'detailInfo': 'Jannik Zhang (32108000158122)',
        'ico': 'icon-people',
        'id': 2
      },
      {
        'baseInfo': 'Denamik Mick Segement',
        'detailInfo': 'Denamik Mick Segement (32108000158123)',
        'ico': 'icon-people',
        'id': 3
      },
      {
        'baseInfo': 'Peter Mutomubo James',
        'detailInfo': 'Peter Mutomubo James (32108000158124)',
        'ico': 'icon-people',
        'id': 4
      },
      {
        'baseInfo': 'Søndergaard Anthony Gregory',
        'detailInfo': 'Søndergaard Anthony Gregory (32108000158125)',
        'ico': 'icon-people',
        'id': 5
      },
      {
        'baseInfo': 'Tim Duncan',
        'detailInfo': 'Tim Duncan (32108000158126)',
        'ico': 'icon-people',
        'id': 6
      },
      {
        'baseInfo': 'Zhou Qi',
        'detailInfo': 'Zhou Qi (32108000158127)',
        'ico': 'icon-people',
        'id': 7
      },
      {
        'baseInfo': 'Kevin Durrant',
        'detailInfo': 'Kevin Durrant (32108000158128)',
        'ico': 'icon-people',
        'id': 8
      },
      {
        'baseInfo': 'Paul Gregory',
        'detailInfo': 'Paul Gregory (32108000158129)',
        'ico': 'icon-people',
        'id': 9
      },
      {
        'baseInfo': 'Yi Jian lian',
        'detailInfo': 'Yi Jian lian (321080001581210)',
        'ico': 'icon-people',
        'id': 10
      },
      {
        'baseInfo': 'Lebron James',
        'detailInfo': 'Lebron James (321080001581211)',
        'ico': 'icon-people',
        'id': 11
      }
    ],
    subDropReloadData: [
      {
        'baseInfo': 'Leon Peng',
        'detailInfo': 'Leon Peng (32108000158121)',
        'ico': 'icon-people',
        'id': 1
      },
      {
        'baseInfo': 'Mike Ke',
        'detailInfo': 'Mike Ke (32108000158122)',
        'ico': 'icon-people',
        'id': 2
      },
      {
        'baseInfo': 'Greg Zhang',
        'detailInfo': 'Greg Zhang (32108000158123)',
        'ico': 'icon-people',
        'id': 3
      },
      {
        'baseInfo': 'Raymond Yuan',
        'detailInfo': 'Raymond Yuan (32108000158124)',
        'ico': 'icon-people',
        'id': 4
      },
      {
        'baseInfo': 'Jay Chou',
        'detailInfo': 'Jay Chou (32108000158125)',
        'ico': 'icon-people',
        'id': 5
      },
      {
        'baseInfo': 'Yao Ming',
        'detailInfo': 'Yao Ming (32108000158126)',
        'ico': 'icon-people',
        'id': 6
      },
      {
        'baseInfo': 'Zhou Qi',
        'detailInfo': 'Zhou Qi (32108000158127)',
        'ico': 'icon-people',
        'id': 7
      },
      {
        'baseInfo': 'Kevin Durrant',
        'detailInfo': 'Kevin Durrant (32108000158128)',
        'ico': 'icon-people',
        'id': 8
      },
      {
        'baseInfo': 'Paul Gregory',
        'detailInfo': 'Paul Gregory (32108000158129)',
        'ico': 'icon-people',
        'id': 9
      }
    ],
    rename: {
      icon: 'ico',
      value: 'id'
    }
  },
  methods: {
    reloadSelDropDown: function () {
      this.$refs.mySelectDropdown.reload(this.$data.selDropReloadData);
    },
    getSelDropDownValue: function () {
      alert(this.$refs.mySelectDropdown.getValue());
    },
    getSelDropDownText: function () {
      alert(this.$refs.mySelectDropdown.getText());
    },
    setSelDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySelectDropdown.setValue(value);
    },
    clearDropDown: function () {
      this.$refs.mySelectDropdown.clear();
    },
    enableDropDown: function () {
      this.$refs.mySelectDropdown.enable();
    },
    disableDropDown: function () {
      this.$refs.mySelectDropdown.disable();
    },
    onSelectValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    onSelectShowPanel: function () {
      console.log('Panel Show');
    },
    onSelectHidePanel: function () {
      console.log('Panel Hide');
    },
    reloadSubDropDown: function () {
      this.$refs.mySubDropdown.reload(this.$data.subDropReloadData);
    },
    getSubDropDownValue: function () {
      alert(this.$refs.mySubDropdown.getValue());
    },
    getSubDropDownText: function () {
      alert(this.$refs.mySubDropdown.getText());
    },
    setSubDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySubDropdown.setValue(value);
    },
    clearSubDropDown: function () {
      this.$refs.mySubDropdown.clear();
    },
    disableSubDropDown: function () {
      this.$refs.mySubDropdown.disable();
    },
    enableSubDropDown: function () {
      this.$refs.mySubDropdown.enable();
    },
    onSubValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    onSubShowPanel: function () {
      console.log('Panel Show');
    },
    onSubHidePanel: function () {
      console.log('Panel Hide');
    }
  }
});
