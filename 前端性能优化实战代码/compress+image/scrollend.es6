/**
 * 滑动到底部的mixin
 * */

window['NewsListCase'] = window['NewsListCase'] || {}

window['NewsListCase']['mixins'] = window['NewsListCase']['mixins'] || {}

window['NewsListCase']['mixins'].scrollEndMixin = {
  props: {
    lock: {
      type: Boolean,
      'default': false
    }
  },
  methods: {
    getScollTop: function () {
      return document.body.scrollTop
    },
    getVisibleHeight: function () {
      return document.documentElement.clientHeight
    },
    getScrollHeight: function () {
      return document.body.scrollHeight
    },
    doCheck: function () {
      this.scrollTop = this.getScollTop()
      var downTrigger = this.getVisibleHeight() + this.scrollTop + 5 >= this.getScrollHeight()
      if (downTrigger && !this.lock) {
        this.$emit('windowScrollEnd')
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', this.doCheck)
  }
}
