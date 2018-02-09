/**
 * A very lightweight jQuery plugin to lazy load images
 * maintain by wangyang@iwaimai.baidu.com
 */

;(function($) {

  function visible(elem){
    elem = $(elem)
    return !!(elem.width() || elem.height()) && elem.css("display") !== "none"
  }

  $.fn.lazyload = function(threshold, callback) {
    // 兼容参数写法
    if($.type(threshold) === 'object') {
      threshold = threshold.threshold;
    }
    if($.type(threshold) === 'function') {
      callback = threshold;
      threshold = 0;
    }
    var $w = $(window),
        th = threshold || 0,
        retina = window.devicePixelRatio > 1,
        attrib = retina? "data-original-retina" : "data-original",
        images = this,
        loaded;

    this.one("lazyload", function() {
      var source = this.getAttribute(attrib);
      source = source || this.getAttribute("data-original");
      if (source) {
        this.setAttribute("src", source);
        if (typeof callback === "function") callback(this);
      }
    });

    function lazyload() {
      var inview = images.filter(function() {
        var $e = $(this);
        if (!visible($e)) return;

        var wt = $w.scrollTop(),
            wb = wt + $w.height(),
            et = $e.offset().top,
            eb = et + $e.height();

        return eb >= wt - th && et <= wb + th;
      });
      // 触发加载
      loaded = inview.trigger("lazyload");
      // images剔除已加载的元素
      images = images.not(loaded);
    }

    $w.on("scroll.lazyload resize.lazyload lookup.lazyload", lazyload);

    lazyload();

    return this;

  };

})(window.Zepto);