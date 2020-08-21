var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
console.log('========================================3.js==========================================================================================================')

console.log(one)
console.log(two)
console.log(three)

//---------------------测试同步事件--------阻塞后续js的加载执行，包括load----------------------------------------------------
function sleepFor(d) {
    for (var t = Date.now(); Date.now() - t <= d;);
}
sleepFor(3000); //当前方法暂停3秒
one.style.backgroundColor='pink'