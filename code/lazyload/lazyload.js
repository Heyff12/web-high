// var viewHeight = document.documentElement.clientHeight // 可视区域的高度

// function lazyload () {
//   var eles = document.querySelectorAll('img[data-original][lazyload]')
//   Array.prototype.forEach.call(eles, function (item, index) {
//     var rect
//     if (item.dataset.original === '')
//       return
//     rect = item.getBoundingClientRect()

//     if (rect.bottom >= 0 && rect.top < viewHeight) {
//       !function () {
//         var img = new Image()
//         img.src = item.dataset.original
//         img.onload = function () {
//           item.src = img.src
//         }
//         item.removeAttribute('data-original')
//         item.removeAttribute('lazyload')
//       }()
//     }
//   })
// }

// lazyload()

// document.addEventListener('scroll', lazyload)

$('img[data-original][lazyload]').lazyload()