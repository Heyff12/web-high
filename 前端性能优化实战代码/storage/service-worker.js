self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('app-v1')
      .then( function (cache) {
        console.log('open cache')
        return cache.addAll([
          './app.js',
          './main.css',
          './serviceWorker.html'
        ])
      })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then( function (res) {
      if (res) {
        return res
      } else {
        //通过fetch方法向网络发起请求
        // fetch(url).then (function (res) {
        //   if (res) {
        //     // 对于新请求到资源存储到我们的cachestorage中
        //     caches
        //   } else {
        //     // 用户提示
        //   }
        // })
      }
    })
  )
})