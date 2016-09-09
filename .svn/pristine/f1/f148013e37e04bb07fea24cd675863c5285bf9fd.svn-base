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
    rename: {
      icon: 'ico',
      value: 'id'
    }
  },
  methods: {
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
