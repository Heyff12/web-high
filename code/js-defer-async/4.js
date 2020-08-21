var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')

const fouth = 'fouth js viriable'
console.log('========================================4.js==========================================================================================================')
console.log('------------------4.js--------------位于--DOMContentLoaded--load之后---load、DOMContentLoaded在该js加载并执行完成后才会执行----------------------------')
console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log('1.js的常量first',first)

//---------------------测试异步事件------------------------------------------------------------
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
    var temple = await sleep(1000);
    console.log('----------------4.js-----------await 1s 后，1.js的常量first--------------------------')

    console.log('await 1s 后，，1.js的常量first——',first)
    return temple
}
test();