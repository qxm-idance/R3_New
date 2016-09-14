import Vue from 'vue';
import SpeechBubble from 'taurus/components/speech-bubble/speech-bubble';

new Vue({
  el: '#speechBubbleDivLarge',
  components: {
    't-speech-bubble': SpeechBubble
  },
  data: {
    showSpeechBubble: false,
    showSpeechBubbleBtnId: 'showSpeechBubbleBtnLarge',
    sizeSpeechBubble: 'large',
    titleSpeechBubble: '1112'
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    }
  }
});

new Vue({
  el: '#speechBubbleDivSmall',
  components: {
    't-speech-bubble': SpeechBubble
  },
  data: {
    showSpeechBubble: false,
    showSpeechBubbleBtnId: 'showSpeechBubbleBtnSmall',
    sizeSpeechBubble: 'small',
    titleSpeechBubble: '1112'
  },
  events: {
    'speech-bubble-opend': function () {
      console.log('speech bubble is opend');
    },
    'speech-bubble-closed': function () {
      console.log('speech bubble is closed');
    }
  }
});
