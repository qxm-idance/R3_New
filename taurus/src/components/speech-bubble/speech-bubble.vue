<template>
  <div class="speech-bubble is-loaded {{openClass}}" @click.stop.prevent="">
    <div class="speech-bubble__top-bar {{topBarClass}}">
      {{ title }}
      <button type="button" class="no-js--hidden icon-reject speech-bubble__close" @click="close">
        <span class="aria--visible">Close</span>
      </button>
    </div>
    <div class="speech-bubble__content">
      <div class="block {{contentClass}}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';

  const SIZE_SMALL = 'small';
  const SIZE_LARGE = 'large';
  const CSS_TOP_SMALL = 'speech-bubble__top-bar--small';
  const CSS_TOP_LARGE = '';
  const CSS_CONTENT_SMALL = 'text--small';
  const CSS_CONTENT_LARGE = '';
  const CSS_IS_OPEN = 'is-open';

  export default {
    name: 'taurus-speech-bubble',
    data: function () {
    },
    props: {
      //显示隐藏参数
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      //调用speech-bubble的组件id
      target: {
        type: String,
        required: true
      },
      //small或者large
      size: {
        type: String
      },
      //组件名称
      title: {
        default: "Speech Bubble",
        type: String
      }
    },
    created: function () {
      //给document绑定click事件关闭speech bubble
      document.addEventListener('click', function (e) {
        if (!this.show ||
          e.target === document.getElementById(this.target)) {
          return;
        }
        this.$emit('speech-bubble-closed');
        this.close();
      }.bind(this), false);
    },
    computed: {
      //标题栏大小
      topBarClass: function () {
        if (this.size === SIZE_LARGE) {
          return CSS_TOP_LARGE;
        } else {
          return CSS_TOP_SMALL;
        }
      },
      //内容区域大小
      contentClass: function () {
        if (this.size === SIZE_LARGE) {
          return CSS_CONTENT_LARGE;
        } else {
          return CSS_CONTENT_SMALL;
        }
      },
      //打开组件调用的方法，增加打开的class
      openClass: function () {
        if (this.show) {
          //调用打开时的触发事件
          this.$dispatch('speech-bubble-opend');
          this._adjustPosition();
          return CSS_IS_OPEN;
        } else {
          return '';
        }
      }
    },
    methods: {
      /**
       * 关闭方法
       */
      close: function () {
        this.show = false;
        //调用关闭时的触发事件
        this.$dispatch('speech-bubble-closed');
      },
      /**
       * 自动调整位置方法
       * @private
       */
      _adjustPosition: function () {
        var $dataTarget = document.getElementById(this.target),
          xPosition = 0,
          yPosition = 0;
        if (!!$dataTarget) {
          xPosition = $dataTarget.offsetLeft;
          yPosition = $dataTarget.offsetHeight + $dataTarget.offsetTop + 7;
          this.$el.style.left = xPosition + "px";
          this.$el.style.top = yPosition + "px";
          this.$el.style.right = "auto";

        }
      }
    }
  };
</script>
