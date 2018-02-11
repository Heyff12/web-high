/**
* @author flippyxu
* */

window['NewsListCase'] = window['NewsListCase'] || {}

window['NewsListCase']['components'] = window['NewsListCase']['components'] || {}

var inlineImage = __inline('./yindao.webp')

var TEMPLATE = 
  '<div class="selector-container">' + 
    '<div class="option-list">' + 
      '<div class="option" @click="type=1">最热新闻</div>' + 
      '<div class="option" @click="type=2">最新新闻</div>' + 
      '<div class="option" @click="type=3">附近新闻</div>' + 
      '<div class="option" @click="showMask=true">下载app</div>' + 
    '</div>' + 
    '<template v-if="type === 1">' + 
      '<div class="hot-news">' + 
        '<template v-for="item in hotNewsData">' + 
          '<div class="hot-news-item">' + 
            '<div class="hot-news-item-title">{{item.title}}</div>' + 
            '<div class="hot-news-item-content">' + 
              '<img :src="item.image" />' + 
            '</div>' + 
          '</div>' + 
        '</template>' + 
      '</div>' + 
    '</template>' + 
    '<template v-else-if="type === 2">' + 
      '<div class="lastest-news">' + 
        '<div class="lastest-news-item">' + 
          '<div class="lastest-news-item-title">墨尔本发生劫持人质事件 警方击毙劫持者</div>' + 
          '<div class="lastest-news-item-content">' + 
            '<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2806459891,6604429&fm=173&s=CD406886C14A2CE666D899180300C001&w=218&h=146&img.JPEG" /><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2808613921,18845132&fm=173&s=DEB404C64D33BADA144C48B803001003&w=218&h=146&img.JPEG" /><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2810767951,31085835&fm=173&s=2DE50B8E0852A4D680C4D8A903003000&w=218&h=146&img.JPEG" />' + 
          '</div>' + 
        '</div>' + 
      '</div>' + 
    '</template>' + 
    '<template v-else="type === 3">' + 
      '<div class="near-news">' + 
        '<div class="near-news-item">' + 
          '<div class="near-news-item-title">任性女司机高速路倒车，惨遭大货车“砍首”，这下长记性了</div>' + 
          '<div class="near-news-item-content">' + 
            '<img src="https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=120&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=b4b06d2aa878b0549f812eb6e462ca4f&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F07eb39f2717765f5cd93a46819430a8f.jpeg" />' + 
          '</div>' + 
        '</div>' + 
      '</div>' + 
    '</template>' +
    '<div class="downloadApp" v-show="showMask" @click="showMask=false">' + 
      '<img src="' + inlineImage + '" />' + 
    '</div>' + 
  '</div>' + 
'</template>'

window['NewsListCase']['components'].NewList =  {
  template: TEMPLATE,
  data: function ()  {
    return {
      showMask: false,
      type: 1,
      scrolling: false,
      hotNewsData: [
        {
          title: '镜头下：世界各地小偷行窃瞬间，看到最后一张我笑哭了',
          image: 'https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=d2fce00eea90aca8c923e90183754e8a&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D3077957088%2C2725281143%26fm%3D175%26s%3D818B93574ED321DE0D1499070300F043%26w%3D640%26h%3D360%26img.JPEG'
        },
        {
          title: '当一个摄影师患上色盲症，他拍出的照片是什么样的',
          image: 'https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=f5a7d67e763e7690d7c836784a5735af&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D2202736171%2C1506348745%26fm%3D175%26s%3DAAD22EC14E33BEDC5CFD45170300C0C2%26w%3D661%26h%3D370%26img.JPEG'
        },
        {
          title: '老版《倚天屠龙记》里的“赵敏”，在家里死了3天，却没有人知道',
          image: 'https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=d455c6334ed97974b0ee6f57da5ece7a&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D1226991411%2C164132089%26fm%3D175%26s%3DE6B055CBC65324744D08AD3803008042%26w%3D444%26h%3D249%26img.PNG'
        },
        {
          title: '吴镇宇9岁儿子费曼近照，胖到认不出，左眼角疤痕明显惨成断眉',
          image: 'https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=14659e73f60e53dbadadd91f361acced&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D2821969698%2C1790614101%26fm%3D175%26s%3D703B17D70A1337D6D0144DB30300F04A%26w%3D660%26h%3D370%26img.JPEG'
        }
      ]
    }
  },
  created: function () {
    var self = this
    this.$on('windowScrollEnd', function () {
      if (self.scrolling === false) {
        self.scrolling = true
        self.renderMoreData()
        self.$nextTick( function () {
          self.scrolling = false
        })
      }
    })
  },
  methods: {
    renderMoreData: function () {
      var data = [
        {
          title: '金雕活捉草原狼， 准确击中目标要害部位',
          image: 'https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=120&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=49e29e766464c2668ba59aa29b46bf10&src=http%3A%2F%2Fbos.nj.bpc.baidu.com%2Fv1%2Fmediaspot%2F1f9510bf5c5077fb19335325432eaa67.png'
        },
        {
          title: '传说中只有“土豪”才敢吃的美食——切糕',
          image: 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?searchbox_feed&quality=120&wh_rate=0&size=f648_364&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=ccc69039de31a5ec4f4ede4ea8eac32d&src=http%3A%2F%2Ft10.baidu.com%2Fit%2Fu%3D2363281557%2C59271533%26fm%3D175%26s%3D9E117687408058F01D3B116A0300E018%26w%3D660%26h%3D370%26img.JPEG'
        },
        {
          title: '老赌徒坚信麻将不能作弊，反赌赌王现场演示揭秘',
          image: 'https://ss0.bdstatic.com/9bA1vGba2gU2pMbfm9GUKT-w/timg?searchbox_feed&size=f660_370&quality=120&wh_rate=0&imgtype=0&ref=http%3A%2F%2Fwww.baidu.com&sec=0&di=8e1605444817c5525f5d3a21c91ba2a4&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fmda-gjmbztnjn4uz3ssx.jpg'
        }
      ]
      this.hotNewsData = this.hotNewsData.concat(data)
    }
  },
  mixins: [window['NewsListCase']['mixins'].scrollEndMixin]
}
