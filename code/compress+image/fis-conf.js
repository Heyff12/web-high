fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('babel-5.x', {
        blacklist: ['regenerator'],
        stage: 3
    }),
    isMod: true,
    useHash: true,
    isJsLike: true
})

fis.match('*.{es6,js}', {
  optimizer: fis.plugin('uglify-js')
})

fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
})

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
})

fis.match('*.html', {
  optimizer: fis.plugin('html-minifier')
})

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        useInlineMap: false,
        allInOne: {
          ignore: 'vue.js'
        },
        processor: {
          '.html': 'html'
        }
    })
})

fis.match('yindao.png', {
  rExt: '.webp',
  parser: fis.plugin('webp',{
      quality: 80
  })
})