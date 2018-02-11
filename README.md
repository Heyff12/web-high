# 前端优化性能 
- 网络  
- 构建  
- 浏览器渲染
- 服务端

# 第一章-性能提升
* 资源合并压缩  
* 图片编码  
* 浏览器渲染  
* 懒加载/预加载  
* 浏览器存储  
* 缓存  
* PWA  
* vue-ssr

# 第二章-资源合并和压缩html/css/js 
- **原理：** 撤销空格、回车、无用代码、注释代码，css语义合并，js变量名缩写（安全性）
- **方案：** 压缩、合并资源，减少请求接口；合并公共库，不同页面合并（异步加载）      
- **实践：** webpack gulp fis3 在线网站 

# 第三章-图片优化 
## **场景：** 
* jpg,有损压缩，**压缩率高**，不支持透明  
* png,**支持透明**，浏览器兼容好  
* webp压缩成都更好，在ios webview有兼容问题--**安卓**  
* svg矢量图，代码内嵌，相对较小，图片样式相对简单的场景--**iconfont** 
## **方法：**   
* 雪碧图--图标合并，代码不便于更新  
* ImageInline--将突破内签到html中，减少http请求，较小的图片  
* 矢量图--SVG绘图，iconfont解决icon问题 
* 在线网站：**https://tinypng.com (压缩png),zhitu.isux.us (png转成webp),spritecow.com (生产雪碧图)   
* http://iconfont.cn**  加入购物车，下载，可以生产代码html/css/js在项目中统一引入使用(unicode兼容性最好，svg浏览器渲染比较差，fontclass ie8+)  

# 第四章-css 和 js 的装载与执行 
**HTML渲染过程的特性：** 顺序执行，并发加载；是否阻塞；依赖关系；引入方式 
* **顺序执行，并发加载：** head(css) body(div script) 
* **是否阻塞：** 
- css阻塞，css通过link放在head阻塞页面的渲染（防止闪动）；css阻塞内部js的执行（js可能会改变dom），css不阻塞外部脚本的执行  
- js阻塞，直接引入的js阻塞页面的渲染（放在body后面）；js不阻塞资源的加载；js顺序执行，阻塞后续js逻辑的执行  
* **依赖关系：** 页面渲染依赖css的加载；js的执行顺序有依赖关系；js逻辑dom节点有依赖关系；
* js引入的方式  
- 直接引入
- defer，不阻塞html的渲染，dom构建完成执行，顺序执行（等同直接引入）
- async，不阻塞html的渲染，不遵循依赖关系，服务端返回就立马执行
- 异步动态引入js
* **引入方式：** css样式表置顶；用link代替import（在css中通过import不会触发浏览并发机制，在body最后执行，可以在css内部使用）；js脚本置底；合理使用js的异步加载能力


# 第5章-懒加载和预加载 
**懒加载：** 适用图片很多、页面很长；并发加载资源过多阻塞js加载；图片进入可视区域之后请求图片资源;监听onscrrol  
**预加载：** 静态资源在使用之前的提前请求；从缓存加载；页面展示的依赖关系维护(src加载，xml请求-跨域)  

# 第6章-重绘与回流 
**回流：** 当 render tree中的一部分或全部因为元素的规模尺寸、布局、隐藏等改变而需要重新构建；当页面布局和几何属性改变时 
**影响回流的css属性**  
- 盒子模型相关属性，width padding border
- 定位属性及浮动,top position clear float
- 改变节点内部文字结构,font-weight text-align overflow   
**重绘：** 当 render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观、风格，而不会影响布局，比如background-color 
**影响重绘的css元素**  
- color border-style background outline box-shadow  
**将dom变成独立的图层**  
- 3D或透视，perspective transform
- 使用加速视频解码的video节点
- 拥有3D（webGL）上下文或者加速的2D上下文的canvas节点
- falsh
- 对自己的opacity做css动画，或者动画webkit变化
- 拥有加速css过滤器的元素
- 元素有一个包含复合层的后代节点
- z-index较低，并且包含一二复合层的兄弟元素





