var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var first = 'first js viriable'
console.log('========================================1.js==========================================================================================================')
one.style.backgroundColor='purple'

console.log(one)
console.log(one.style.backgroundColor)
console.log(two)
console.log(three)
// 无法获取到 fourth
// console.log('4.js的常量fouth',fouth)



//---------------------测试异步事件------------------------------------------------------------
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
    var temple = await sleep(1000);
    first = 'await 1s 后，更改first的值'
    console.log('----------------1.js-----------await 1s 后，更改first的值--------------------------')
    console.log(first)
    return temple
}
test();