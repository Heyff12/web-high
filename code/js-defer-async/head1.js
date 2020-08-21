testViariableFunc()
var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
let testViariable = 'let--test-变量'
console.log('========================================head1.js==========================================================================================================')
console.log(one)
console.log(two)
console.log(three)

//----------------------测试方法中的变量-----------------------------------------------------------------------------
function testViariableFunc(){
    console.log('-----------head1.js--------------测试变量var----one-------在声明标量之前执行该函数为undefined-----------------------------------')
    console.log(one)
    console.log('-----------head1.js--------------测试变量let----testViariable-----------在声明标量之前执行该函数报错-------------------------------')
    // console.log(testViariable)
}
testViariableFunc()

//---------------------测试异步事件--------不阻塞后续js的加载执行，包括load----------------------------------------------------
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function test() {
    console.log('--------head1.js--------function--------调用--var--变量--------one-------------------------------', one)
    var temple = await sleep(1000);
    console.log('----------------head1.js-----------await 1s 后--------------------------------------')
    console.log(document.getElementById('three'))
    return temple
}
test();

//---------------------测试同步事件--------阻塞后续js的加载执行，包括load----------------------------------------------------
function sleepFor(d) {
    for (var t = Date.now(); Date.now() - t <= d;);
}
sleepFor(3000); //当前方法暂停3秒


