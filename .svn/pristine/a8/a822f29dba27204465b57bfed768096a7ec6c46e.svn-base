<template>
    <div class="speech-bubble is-loaded {{openClass}}" @click.stop.prevent="">
        <div class="speech-bubble__top-bar {{topBarClass}}">
            {{ titleStr }}
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
            return {
                titleStr: "Speech Bubble"
            }
        },
        props: {
            show : {
                type: Boolean,
                required: true,
                twoWay: true
            },
            target : {
                type: String,
                required: true
            },
            size: {
                type:String
            },
            title: {
                type:String
            }
        },
        created: function () {

            if(!!this.title){
                this.titleStr = this.title;
            }
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
            topBarClass: function () {
                if (this.size === SIZE_LARGE) {
                    return CSS_TOP_LARGE;
                }else{
                    return CSS_TOP_SMALL;
                }
            },
            contentClass: function () {
                if (this.size === SIZE_LARGE) {
                    return CSS_CONTENT_LARGE;
                }else{
                    return CSS_CONTENT_SMALL;
                }
            },
            openClass: function () {
                if(this.show){
                    this.$dispatch('speech-bubble-opend');
                    this._adjustPosition();
                    return CSS_IS_OPEN;
                }else{
                    return '';
                }
            }
        },
        methods: {
            close: function () {
                this.show = false;
                this.$dispatch('speech-bubble-closed');
            },
            _adjustPosition: function(){
                var $dataTarget = document.getElementById(this.target),
                    xPosition = 0,
                    yPosition = 0;
              if(!!$dataTarget){
                xPosition = $dataTarget.offsetLeft;
                yPosition = $dataTarget.offsetHeight + $dataTarget.offsetTop + 7;
                this.$el.style.left = xPosition+"px";
                this.$el.style.top = yPosition+"px";
                this.$el.style.right = "auto";

              }
            }
        }
    };
</script>
