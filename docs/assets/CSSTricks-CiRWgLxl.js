import{E as a,I as y,O as p,R as w,_ as E,c as C,d as _,f as s,l as e,lt as d,o as c,st as f}from"./codemirror-B25QCqWr.js";import{d as I,f as q,p as j}from"./vendor-vue-C93_ecI2.js";import{t as L}from"./index-BbTkupBr.js";var M={class:"min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"},W={class:"relative z-10 container mx-auto px-6 py-8"},$={class:"mb-6 flex flex-col sm:flex-row gap-4"},H={class:"flex-1"},B=["value"],G={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},U={class:"lg:col-span-1"},D={class:"bg-gray-900/70 border border-amber-500/30 rounded-xl p-5 max-h-[80vh] overflow-y-auto"},V={class:"text-lg font-semibold mb-4 text-amber-300"},N={key:0,class:"space-y-4"},A={class:"text-sm font-medium text-gray-300 border-b border-gray-700 pb-1"},J={class:"space-y-1"},P=["onClick"],R={class:"flex items-center justify-between"},Y={key:1,class:"space-y-1"},O=["onClick"],Q={class:"flex items-center justify-between"},X={key:2,class:"text-center text-gray-400 py-8"},K={class:"lg:col-span-2"},Z={key:0,class:"bg-gray-900/70 border border-gray-600/30 rounded-xl p-8 text-center h-[80vh] flex flex-col justify-center"},ee={key:1,class:"h-[80vh] overflow-y-auto space-y-6 pr-2"},te={class:"bg-gray-900/70 border border-cyan-500/30 rounded-xl p-5"},re={class:"flex items-start justify-between mb-4"},ie={class:"text-xl font-semibold text-cyan-300 mb-2"},oe={class:"flex items-center gap-4 text-sm text-gray-400"},ae={class:"px-2 py-1 bg-gray-800 rounded"},se={class:"space-y-3"},de={class:"text-gray-400"},ne={class:"text-gray-400"},le={class:"flex flex-wrap gap-2"},ce={class:"bg-gray-900/70 border border-pink-500/30 rounded-xl p-5"},pe={class:"bg-white rounded-lg p-4 min-h-[200px] relative overflow-hidden"},ue=["innerHTML"],be={class:"bg-gray-900/70 border border-emerald-500/30 rounded-xl p-5"},fe={class:"flex items-center justify-between mb-3"},ge={class:"bg-gray-800 p-4 rounded text-sm overflow-x-auto"},xe={class:"bg-gray-900/70 border border-purple-500/30 rounded-xl p-5"},me={class:"flex items-center justify-between mb-3"},ve={class:"bg-gray-800 p-4 rounded text-sm overflow-x-auto"},he={class:"bg-gray-900/70 border border-yellow-500/30 rounded-xl p-5"},ye={class:"space-y-2"},we={class:"bg-gray-900/70 border border-rose-500/30 rounded-xl p-5"},ke={class:"flex flex-wrap gap-3"},Se=E({__name:"CSSTricks",setup(Ce){const i=w(null),u=w("all"),g=w(""),m={flex:"Flex 布局",grid:"Grid 布局",center:"居中技巧",layout:"布局技巧",responsive:"响应式设计",effects:"视觉效果",text:"文本处理",animation:"动画效果"},z=[{id:"flex-center",name:"Flex 完美居中",category:"flex",description:"使用 Flex 实现水平垂直完美居中",useCase:"模态框、卡片内容、按钮文字等需要居中的场景",html:`<div class="flex-center">
  <div class="content">居中内容</div>
</div>`,css:`.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 或指定高度 */
}

.content {
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
}`,notes:["最简单可靠的居中方法","支持内容动态大小","兼容性极佳","min-height 可根据需要调整"],difficulty:"easy",browserSupport:"IE11+",tags:["居中","布局","基础"]},{id:"flex-space-between",name:"Flex 两端对齐",category:"flex",description:"元素分布在容器两端，中间自动填充空间",useCase:"导航栏、页脚、卡片头部等需要两端对齐的布局",html:`<div class="flex-between">
  <div class="left">左侧内容</div>
  <div class="right">右侧内容</div>
</div>`,css:`.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.left, .right {
  flex-shrink: 0; /* 防止内容被压缩 */
}`,notes:["space-between 自动分配剩余空间","flex-shrink: 0 防止内容被压缩","适合固定两端，中间弹性的布局","可配合 gap 属性增加间距"],difficulty:"easy",browserSupport:"IE11+",tags:["对齐","导航","布局"]},{id:"flex-equal-columns",name:"Flex 等宽列布局",category:"flex",description:"创建等宽的多列布局，自适应容器宽度",useCase:"卡片网格、表格列、仪表板布局等",html:`<div class="flex-columns">
  <div class="column">列 1</div>
  <div class="column">列 2</div>
  <div class="column">列 3</div>
</div>`,css:`.flex-columns {
  display: flex;
  gap: 20px; /* 列间距 */
}

.column {
  flex: 1; /* 等分剩余空间 */
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  min-width: 0; /* 防止内容溢出 */
}`,notes:["flex: 1 让所有列等宽分配空间","gap 属性设置列间距，比 margin 更优雅","min-width: 0 防止长内容撑破布局","响应式友好，自动适应屏幕宽度"],difficulty:"easy",browserSupport:"IE11+ (gap需要更新版本)",tags:["等宽","网格","响应式"]},{id:"flex-sticky-footer",name:"Flex 粘性页脚",category:"flex",description:"页脚始终在页面底部，内容不足时也不会上浮",useCase:"网站布局、应用界面、长表单页面等",html:`<div class="page-container">
  <header class="header">页头</header>
  <main class="main-content">主要内容</main>
  <footer class="footer">页脚</footer>
</div>`,css:`.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header, .footer {
  flex-shrink: 0; /* 固定高度 */
}

.main-content {
  flex: 1; /* 占据剩余空间 */
  padding: 20px;
}`,notes:["经典的粘性页脚解决方案","flex-direction: column 垂直排列","main-content 的 flex: 1 自动填充剩余高度","无需计算高度，完全自适应"],difficulty:"medium",browserSupport:"IE11+",tags:["页脚","布局","全屏"]},{id:"flex-wrap-responsive",name:"Flex 响应式换行",category:"flex",description:"元素在空间不足时自动换行，实现响应式布局",useCase:"标签云、按钮组、卡片列表等需要自适应换行的场景",html:`<div class="flex-wrap">
  <div class="item">标签 1</div>
  <div class="item">标签 2</div>
  <div class="item">标签 3</div>
  <div class="item">标签 4</div>
</div>`,css:`.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
}

.item {
  padding: 8px 16px;
  background: #e3f2fd;
  border-radius: 20px;
  white-space: nowrap; /* 防止文字换行 */
  flex-shrink: 0; /* 保持最小宽度 */
}`,notes:["flex-wrap: wrap 允许元素换行","gap 统一设置元素间距","white-space: nowrap 保持标签完整性","完全响应式，无需媒体查询"],difficulty:"medium",browserSupport:"IE11+",tags:["换行","响应式","标签"]},{id:"flex-order-responsive",name:"Flex 响应式排序",category:"flex",description:"在不同屏幕尺寸下改变元素顺序",useCase:"移动端优先显示重要内容、侧边栏位置调整等",html:`<div class="flex-container">
  <aside class="sidebar">侧边栏</aside>
  <main class="main">主内容</main>
  <div class="ads">广告</div>
</div>`,css:`.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.main {
  flex: 1;
  min-width: 300px;
}

.sidebar {
  flex: 0 0 250px;
  order: -1; /* 移动端优先显示 */
}

.ads {
  flex: 0 0 200px;
  order: 2;
}

@media (max-width: 768px) {
  .sidebar { order: 0; }
  .main { order: 1; }
  .ads { order: 3; display: none; } /* 移动端隐藏广告 */
}`,notes:["order 属性控制显示顺序，不影响HTML结构","负数order值可以让元素排在前面","结合媒体查询实现响应式排序","移动端可以隐藏不重要的内容"],difficulty:"hard",browserSupport:"IE11+",tags:["排序","响应式","移动端"]},{id:"grid-auto-fit",name:"Grid 自适应列数",category:"grid",description:"根据容器宽度自动调整列数，无需媒体查询",useCase:"图片画廊、产品展示、卡片网格等",html:`<div class="grid-auto">
  <div class="card">卡片 1</div>
  <div class="card">卡片 2</div>
  <div class="card">卡片 3</div>
  <div class="card">卡片 4</div>
</div>`,css:`.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}`,notes:["auto-fit 根据容器宽度自动调整列数","minmax(250px, 1fr) 设置最小宽度和弹性增长","完全响应式，无需媒体查询","gap 统一设置网格间距"],difficulty:"medium",browserSupport:"Chrome 57+, Firefox 52+",tags:["自适应","网格","响应式"]},{id:"grid-holy-grail",name:"Grid 圣杯布局",category:"grid",description:"经典的三列布局：固定侧边栏 + 弹性主内容",useCase:"网站主体布局、管理后台、文档站点等",html:`<div class="holy-grail">
  <header class="header">页头</header>
  <nav class="nav">导航</nav>
  <main class="main">主内容</main>
  <aside class="aside">侧边栏</aside>
  <footer class="footer">页脚</footer>
</div>`,css:`.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 10px;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }`,notes:["grid-template-areas 直观定义布局区域","语义化的区域命名，易于理解和维护","1fr 让主内容区域自适应宽度","完美的圣杯布局解决方案"],difficulty:"medium",browserSupport:"Chrome 57+, Firefox 52+",tags:["圣杯","布局","三列"]},{id:"center-absolute",name:"绝对定位居中",category:"center",description:"使用绝对定位和transform实现精确居中",useCase:"模态框、弹窗、加载动画等需要脱离文档流的居中元素",html:`<div class="container">
  <div class="centered">居中内容</div>
</div>`,css:`.container {
  position: relative;
  height: 400px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  color: #333;
}`,notes:["transform: translate(-50%, -50%) 精确居中","不需要知道元素的具体尺寸","脱离文档流，不影响其他元素","兼容性好，支持动态内容"],difficulty:"medium",browserSupport:"IE9+",tags:["居中","绝对定位","模态框"]},{id:"center-table-cell",name:"Table-cell 居中",category:"center",description:"利用表格单元格特性实现垂直居中",useCase:"兼容老浏览器的垂直居中方案",html:`<div class="table-container">
  <div class="table-cell">
    <div class="content">垂直居中内容</div>
  </div>
</div>`,css:`.table-container {
  display: table;
  width: 100%;
  height: 300px;
}

.table-cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.content {
  display: inline-block;
  text-align: left;
  padding: 20px;
  background: #e3f2fd;
  border-radius: 8px;
}`,notes:["利用 table-cell 的 vertical-align 特性","兼容性极佳，支持IE8+","text-align: center 实现水平居中","适合需要兼容老浏览器的项目"],difficulty:"medium",browserSupport:"IE8+",tags:["居中","兼容性","表格"]},{id:"layout-sidebar-toggle",name:"可折叠侧边栏",category:"layout",description:"带动画效果的侧边栏展开收起",useCase:"管理后台、移动端导航、设置面板等",html:`<div class="layout">
  <aside class="sidebar" :class="{ collapsed }">
    <div class="sidebar-content">侧边栏内容</div>
  </aside>
  <main class="main-content">
    <button @click="collapsed = !collapsed">切换侧边栏</button>
  </main>
</div>`,css:`.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background: #2c3e50;
  color: white;
  transition: width 0.3s ease;
  overflow: hidden;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar-content {
  padding: 20px;
  white-space: nowrap;
}

.main-content {
  flex: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}`,notes:["transition 属性添加平滑动画效果","overflow: hidden 隐藏溢出内容","white-space: nowrap 防止文字换行","可配合 JavaScript 实现交互控制"],difficulty:"medium",browserSupport:"IE10+",tags:["侧边栏","动画","交互"]},{id:"layout-masonry",name:"瀑布流布局",category:"layout",description:"纯CSS实现的瀑布流效果",useCase:"图片展示、Pinterest风格布局、内容聚合等",html:`<div class="masonry">
  <div class="item">内容 1</div>
  <div class="item tall">内容 2 (高)</div>
  <div class="item">内容 3</div>
  <div class="item">内容 4</div>
</div>`,css:`.masonry {
  columns: 3;
  column-gap: 20px;
  padding: 20px;
}

.item {
  break-inside: avoid;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.item.tall {
  height: 200px;
}

@media (max-width: 768px) {
  .masonry { columns: 2; }
}

@media (max-width: 480px) {
  .masonry { columns: 1; }
}`,notes:["CSS columns 属性实现瀑布流","break-inside: avoid 防止内容被分割","响应式列数调整","纯CSS方案，无需JavaScript"],difficulty:"hard",browserSupport:"IE10+",tags:["瀑布流","多列","响应式"]},{id:"responsive-typography",name:"响应式字体大小",category:"responsive",description:"使用clamp()函数实现流体字体大小",useCase:"标题、正文等需要在不同设备上自适应的文字",html:`<div class="responsive-text">
  <h1 class="title">响应式标题</h1>
  <p class="body">这是一段响应式的正文内容，字体大小会根据屏幕尺寸自动调整。</p>
</div>`,css:`.title {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: bold;
  line-height: 1.2;
}

.body {
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  line-height: 1.6;
  max-width: 65ch; /* 最佳阅读宽度 */
}

.responsive-text {
  padding: 20px;
}`,notes:["clamp(最小值, 首选值, 最大值) 实现流体大小","vw 单位让字体跟随视口宽度变化","max-width: 65ch 控制最佳阅读行长度","无需媒体查询，完全自适应"],difficulty:"medium",browserSupport:"Chrome 79+, Firefox 75+",tags:["响应式","字体","流体"]},{id:"responsive-images",name:"响应式图片",category:"responsive",description:"图片自适应容器，保持比例不变形",useCase:"头像、产品图、背景图等需要自适应的图片",html:`<div class="image-container">
  <img src="image.jpg" alt="响应式图片" class="responsive-img">
</div>

<div class="aspect-ratio-box">
  <img src="image.jpg" alt="固定比例图片" class="aspect-img">
</div>`,css:`.responsive-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* 固定宽高比的图片容器 */
.aspect-ratio-box {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* 16:9 比例 */
  overflow: hidden;
  border-radius: 8px;
}

.aspect-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 保持比例，裁剪多余部分 */
}`,notes:["width: 100% + height: auto 保持原始比例","aspect-ratio 属性设置固定宽高比","object-fit: cover 类似background-size: cover","object-fit: contain 完整显示图片"],difficulty:"easy",browserSupport:"aspect-ratio需要较新浏览器",tags:["图片","响应式","比例"]},{id:"effects-glassmorphism",name:"毛玻璃效果",category:"effects",description:"现代化的毛玻璃背景效果",useCase:"卡片、模态框、导航栏等需要半透明效果的元素",html:`<div class="background">
  <div class="glass-card">
    <h3>毛玻璃卡片</h3>
    <p>这是一个带有毛玻璃效果的卡片</p>
  </div>
</div>`,css:`.background {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 30px;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,notes:["backdrop-filter: blur() 创建毛玻璃效果","rgba() 设置半透明背景","边框使用半透明白色增强效果","需要有背景内容才能看到模糊效果"],difficulty:"medium",browserSupport:"Chrome 76+, Safari 9+",tags:["毛玻璃","半透明","现代"]},{id:"effects-neumorphism",name:"新拟态效果",category:"effects",description:"柔和的新拟态设计风格",useCase:"按钮、卡片、输入框等需要立体感的UI元素",html:`<div class="neu-container">
  <div class="neu-card">
    <h3>新拟态卡片</h3>
    <button class="neu-button">按钮</button>
  </div>
</div>`,css:`.neu-container {
  background: #e0e5ec;
  padding: 40px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.neu-card {
  background: #e0e5ec;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 
    9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
}

.neu-button {
  background: #e0e5ec;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  margin-top: 15px;
  box-shadow: 
    5px 5px 10px rgba(163, 177, 198, 0.6),
    -5px -5px 10px rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
}

.neu-button:active {
  box-shadow: 
    inset 5px 5px 10px rgba(163, 177, 198, 0.6),
    inset -5px -5px 10px rgba(255, 255, 255, 0.5);
}`,notes:["使用双重阴影创建立体效果","浅色阴影模拟高光，深色阴影模拟阴影","背景色与元素色相同是关键",":active 状态使用内阴影模拟按下效果"],difficulty:"hard",browserSupport:"IE9+",tags:["新拟态","立体","阴影"]},{id:"text-truncate",name:"文本截断省略",category:"text",description:"单行和多行文本截断显示省略号",useCase:"卡片标题、列表项、描述文本等需要限制显示长度的场景",html:`<div class="text-examples">
  <div class="single-line">这是一段很长的单行文本，超出容器宽度时会显示省略号</div>
  <div class="multi-line">这是一段很长的多行文本内容，当超过指定行数时会在末尾显示省略号，这种效果在卡片布局中非常有用。</div>
</div>`,css:`/* 单行文本截断 */
.single-line {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
  margin-bottom: 15px;
}

/* 多行文本截断 */
.multi-line {
  width: 200px;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 显示3行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  padding: 10px;
  background: #e3f2fd;
  border-radius: 4px;
}`,notes:["单行截断需要固定宽度和nowrap","多行截断使用-webkit-line-clamp","line-height影响截断位置的计算","多行截断兼容性有限，主要支持webkit内核"],difficulty:"medium",browserSupport:"单行IE6+，多行Chrome/Safari",tags:["文本","截断","省略号"]},{id:"text-gradient",name:"渐变文字效果",category:"text",description:"创建彩色渐变文字效果",useCase:"标题、Logo、强调文本等需要视觉冲击的文字",html:`<div class="gradient-text-examples">
  <h1 class="gradient-text-1">彩虹渐变标题</h1>
  <h2 class="gradient-text-2">蓝紫渐变</h2>
  <p class="gradient-text-3">金色渐变文字</p>
</div>`,css:`.gradient-text-1 {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  font-weight: bold;
}

.gradient-text-2 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
}

.gradient-text-3 {
  background: linear-gradient(45deg, #f39c12, #f1c40f, #f39c12);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.2rem;
}`,notes:["background-clip: text 将背景裁剪为文字形状","-webkit-text-fill-color: transparent 让文字透明","需要添加webkit前缀以获得更好兼容性","可以使用任何CSS渐变作为文字颜色"],difficulty:"medium",browserSupport:"Chrome, Safari, Firefox 49+",tags:["渐变","文字","彩色"]},{id:"selector-nth-child",name:"子元素选择器技巧",category:"layout",description:"使用nth-child等选择器实现复杂的子元素样式",useCase:"表格斑马纹、卡片间距、特殊位置元素样式等",html:`<div class="selector-demo">
  <div class="item">第1个</div>
  <div class="item">第2个</div>
  <div class="item">第3个</div>
  <div class="item">第4个</div>
  <div class="item">第5个</div>
  <div class="item">第6个</div>
</div>`,css:`.selector-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 20px;
}

.item {
  padding: 15px;
  border-radius: 8px;
  min-width: 80px;
  text-align: center;
}

/* 奇数项背景 */
.item:nth-child(odd) {
  background: #e3f2fd;
}

/* 偶数项背景 */
.item:nth-child(even) {
  background: #f3e5f5;
}

/* 第一个和最后一个特殊样式 */
.item:first-child {
  border-left: 4px solid #2196f3;
}

.item:last-child {
  border-right: 4px solid #9c27b0;
}

/* 每3个一组的第一个 */
.item:nth-child(3n+1) {
  font-weight: bold;
}`,notes:["nth-child(odd/even) 选择奇偶数子元素","nth-child(3n+1) 每3个一组选择","first-child/last-child 选择首尾元素","可以组合使用创建复杂的选择模式"],difficulty:"medium",browserSupport:"IE9+",tags:["选择器","子元素","模式"]},{id:"pseudo-elements",name:"伪元素装饰技巧",category:"effects",description:"使用::before和::after创建装饰效果",useCase:"引用标记、装饰线条、图标添加、内容增强等",html:`<div class="pseudo-demo">
  <blockquote class="quote">这是一段重要的引用文字，使用伪元素添加了装饰效果。</blockquote>
  <div class="badge">新功能</div>
  <div class="tooltip" data-tooltip="这是提示信息">悬停查看提示</div>
</div>`,css:`.pseudo-demo {
  padding: 30px;
  space-y: 20px;
}

/* 引用样式 */
.quote {
  position: relative;
  padding: 20px 40px;
  background: #f8f9fa;
  border-radius: 8px;
  font-style: italic;
  margin: 20px 0;
}

.quote::before,
.quote::after {
  content: '"';
  font-size: 3em;
  color: #007bff;
  position: absolute;
  font-family: serif;
}

.quote::before {
  top: -10px;
  left: 10px;
}

.quote::after {
  bottom: -40px;
  right: 10px;
}

/* 徽章效果 */
.badge {
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  background: #28a745;
  color: white;
  border-radius: 4px;
  margin: 10px;
}

.badge::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #28a745;
}

/* 工具提示 */
.tooltip {
  position: relative;
  display: inline-block;
  padding: 10px;
  background: #6c757d;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
}

.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  margin-bottom: 8px;
}

.tooltip:hover::after {
  opacity: 1;
}`,notes:["::before和::after必须有content属性","attr()函数可以获取HTML属性值","伪元素默认是inline，通常需要设置display","可以创建纯CSS的装饰效果，无需额外HTML"],difficulty:"hard",browserSupport:"IE8+",tags:["伪元素","装饰","提示"]},{id:"css-counters",name:"CSS计数器",category:"text",description:"使用CSS计数器自动编号",useCase:"章节编号、步骤指示、有序列表自定义等",html:`<div class="counter-demo">
  <div class="chapter">
    <h3>第一章 基础知识</h3>
    <div class="section">基本概念</div>
    <div class="section">核心原理</div>
    <div class="section">实践应用</div>
  </div>
  <div class="chapter">
    <h3>第二章 进阶技巧</h3>
    <div class="section">高级特性</div>
    <div class="section">性能优化</div>
  </div>
</div>`,css:`.counter-demo {
  counter-reset: chapter section;
  padding: 20px;
}

.chapter {
  counter-increment: chapter;
  margin-bottom: 30px;
}

.chapter h3::before {
  content: "第" counter(chapter) "章 ";
  color: #007bff;
  font-weight: bold;
}

.section {
  counter-increment: section;
  padding: 10px 0 10px 30px;
  position: relative;
}

.section::before {
  content: counter(chapter) "." counter(section) " ";
  position: absolute;
  left: 0;
  color: #6c757d;
  font-weight: bold;
}

/* 重置每章的小节计数 */
.chapter {
  counter-reset: section;
}`,notes:["counter-reset 初始化计数器","counter-increment 递增计数器","counter() 函数显示计数器值","可以嵌套使用多个计数器"],difficulty:"hard",browserSupport:"IE8+",tags:["计数器","编号","自动化"]},{id:"sticky-positioning",name:"粘性定位技巧",category:"layout",description:"使用sticky实现智能粘性效果",useCase:"表格头部、侧边导航、浮动按钮等需要粘性定位的元素",html:`<div class="sticky-demo">
  <div class="sticky-header">粘性头部 - 滚动时会固定在顶部</div>
  <div class="content">
    <div class="section">内容区域 1</div>
    <div class="section">内容区域 2</div>
    <div class="section">内容区域 3</div>
    <div class="section">内容区域 4</div>
    <div class="section">内容区域 5</div>
  </div>
  <div class="sticky-sidebar">侧边栏</div>
</div>`,css:`.sticky-demo {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  position: relative;
}

.sticky-header {
  position: sticky;
  top: 0;
  background: #007bff;
  color: white;
  padding: 15px;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.content {
  display: flex;
}

.section {
  flex: 1;
  padding: 20px;
  min-height: 150px;
  border-bottom: 1px solid #eee;
  background: #f8f9fa;
  margin: 10px;
  border-radius: 4px;
}

.sticky-sidebar {
  position: sticky;
  top: 70px; /* 头部高度 + 间距 */
  width: 200px;
  height: 100px;
  background: #28a745;
  color: white;
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
}`,notes:["sticky需要指定top/bottom/left/right值","只在父容器滚动范围内生效","可以设置不同的粘性位置","比fixed定位更智能，不会脱离文档流"],difficulty:"medium",browserSupport:"Chrome 56+, Firefox 32+",tags:["粘性","定位","滚动"]},{id:"css-variables",name:"CSS变量动态主题",category:"effects",description:"使用CSS自定义属性实现动态主题切换",useCase:"主题切换、动态样式、组件样式定制等",html:`<div class="theme-demo" data-theme="light">
  <div class="theme-controls">
    <button onclick="setTheme('light')">浅色主题</button>
    <button onclick="setTheme('dark')">深色主题</button>
    <button onclick="setTheme('colorful')">彩色主题</button>
  </div>
  <div class="card">
    <h4>主题卡片</h4>
    <p>这个卡片会根据选择的主题改变颜色</p>
    <button class="theme-button">按钮</button>
  </div>
</div>

<script>
function setTheme(theme) {
  document.querySelector('.theme-demo').setAttribute('data-theme', theme);
}
<\/script>`,css:`.theme-demo {
  /* 默认浅色主题变量 */
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #007bff;
  --card-bg: #f8f9fa;
  --border-color: #dee2e6;
  
  background: var(--bg-color);
  color: var(--text-color);
  padding: 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* 深色主题 */
.theme-demo[data-theme="dark"] {
  --bg-color: #2c3e50;
  --text-color: #ecf0f1;
  --primary-color: #3498db;
  --card-bg: #34495e;
  --border-color: #4a5f7a;
}

/* 彩色主题 */
.theme-demo[data-theme="colorful"] {
  --bg-color: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-color: #ffffff;
  --primary-color: #ff6b6b;
  --card-bg: rgba(255, 255, 255, 0.1);
  --border-color: rgba(255, 255, 255, 0.2);
}

.theme-controls {
  margin-bottom: 20px;
}

.theme-controls button {
  margin-right: 10px;
  padding: 8px 16px;
  background: var(--primary-color);
  color: var(--bg-color);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 20px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.theme-button {
  background: var(--primary-color);
  color: var(--bg-color);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}`,notes:["CSS变量使用--前缀定义","var()函数引用变量值","可以在任何选择器中重新定义变量","支持继承和层叠，非常灵活"],difficulty:"hard",browserSupport:"Chrome 49+, Firefox 31+",tags:["变量","主题","动态"]},{id:"scroll-snap",name:"滚动吸附效果",category:"layout",description:"使用scroll-snap实现平滑的滚动吸附",useCase:"轮播图、全屏滚动、卡片滑动等需要精确滚动定位的场景",html:`<div class="scroll-container">
  <div class="scroll-item" style="background: #ff6b6b;">第1页</div>
  <div class="scroll-item" style="background: #4ecdc4;">第2页</div>
  <div class="scroll-item" style="background: #45b7d1;">第3页</div>
  <div class="scroll-item" style="background: #96ceb4;">第4页</div>
  <div class="scroll-item" style="background: #feca57;">第5页</div>
</div>`,css:`.scroll-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  /* 隐藏滚动条 */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-item {
  flex: none;
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

/* 垂直滚动吸附示例 */
.vertical-scroll {
  height: 200px;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.vertical-scroll .scroll-item {
  height: 100%;
  scroll-snap-align: start;
}`,notes:["scroll-snap-type 定义吸附方向和强制性","scroll-snap-align 设置元素的吸附对齐方式","mandatory 强制吸附，proximity 接近时吸附","可以创建类似原生应用的滚动体验"],difficulty:"medium",browserSupport:"Chrome 69+, Firefox 68+",tags:["滚动","吸附","交互"]},{id:"container-queries",name:"容器查询布局",category:"responsive",description:"基于容器尺寸而非视口尺寸的响应式设计",useCase:"组件级响应式、卡片自适应、模块化布局等",html:`<div class="container-demo">
  <div class="responsive-card">
    <div class="card-header">响应式卡片</div>
    <div class="card-content">
      <p>这个卡片会根据容器大小调整布局，而不是根据屏幕大小。</p>
      <div class="card-actions">
        <button>操作1</button>
        <button>操作2</button>
      </div>
    </div>
  </div>
</div>`,css:`.container-demo {
  container-type: inline-size;
  container-name: card-container;
  width: 300px; /* 可以动态调整这个宽度 */
  border: 2px dashed #ccc;
  padding: 20px;
  resize: horizontal;
  overflow: auto;
}

.responsive-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card-header {
  background: #007bff;
  color: white;
  padding: 15px;
  font-weight: bold;
}

.card-content {
  padding: 15px;
}

.card-actions {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.card-actions button {
  flex: 1;
  padding: 8px 16px;
  border: 1px solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 4px;
  cursor: pointer;
}

/* 容器查询 - 当容器宽度小于250px时 */
@container card-container (max-width: 250px) {
  .card-actions {
    flex-direction: column;
  }
  
  .card-header {
    font-size: 0.9rem;
    padding: 10px;
  }
  
  .card-content {
    padding: 10px;
    font-size: 0.9rem;
  }
}`,notes:["container-type 定义容器查询类型","container-name 给容器命名","@container 规则基于容器尺寸应用样式","比媒体查询更精确的组件级响应式"],difficulty:"hard",browserSupport:"Chrome 105+, Firefox 110+",tags:["容器查询","响应式","组件"]},{id:"advanced-grid",name:"Grid高级布局技巧",category:"grid",description:"使用Grid的高级特性创建复杂布局",useCase:"杂志布局、仪表板、复杂网格系统等",html:`<div class="advanced-grid">
  <div class="grid-item header">头部</div>
  <div class="grid-item sidebar">侧边栏</div>
  <div class="grid-item main">主内容区域</div>
  <div class="grid-item widget1">小组件1</div>
  <div class="grid-item widget2">小组件2</div>
  <div class="grid-item footer">页脚</div>
</div>`,css:`.advanced-grid {
  display: grid;
  grid-template-columns: 
    [sidebar-start] 200px 
    [sidebar-end main-start] 1fr 
    [main-end widgets-start] 150px 
    [widgets-end];
  grid-template-rows: 
    [header-start] 60px 
    [header-end content-start] 1fr 
    [content-end footer-start] 40px 
    [footer-end];
  gap: 15px;
  height: 400px;
  padding: 15px;
  background: #f8f9fa;
}

.grid-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.header {
  grid-column: sidebar-start / widgets-end;
  grid-row: header-start / header-end;
  background: #007bff;
  color: white;
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
  grid-row: content-start / content-end;
  background: #28a745;
  color: white;
}

.main {
  grid-column: main-start / main-end;
  grid-row: content-start / content-end;
  background: #17a2b8;
  color: white;
}

.widget1 {
  grid-column: widgets-start / widgets-end;
  grid-row: content-start / content-start;
  background: #ffc107;
}

.widget2 {
  grid-column: widgets-start / widgets-end;
  grid-row: content-start / content-end;
  background: #dc3545;
  color: white;
  margin-top: 80px; /* 简单的垂直分割 */
}

.footer {
  grid-column: sidebar-start / widgets-end;
  grid-row: footer-start / footer-end;
  background: #6c757d;
  color: white;
}`,notes:["使用命名网格线创建语义化布局","grid-template-columns/rows 支持复杂的尺寸定义","可以创建不规则的网格布局","比传统布局方法更直观和灵活"],difficulty:"hard",browserSupport:"Chrome 57+, Firefox 52+",tags:["Grid","高级布局","命名网格线"]},{id:"custom-scrollbar-webkit",name:"Webkit 自定义滚动条",category:"effects",description:"使用 Webkit 伪元素自定义滚动条样式",useCase:"需要美化滚动条外观的容器，如聊天框、代码编辑器、内容列表等",html:`<div class="custom-scrollbar">
  <div class="content">
    <p>这是一个很长的内容...</p>
    <p>需要滚动才能看到全部内容</p>
    <p>滚动条已经被自定义样式化</p>
    <p>支持悬停效果和圆角设计</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
  </div>
</div>`,css:`.custom-scrollbar {
  width: 300px;
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

/* 滚动条整体样式 */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

/* 滚动条轨道 */
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

/* 滚动条滑块 */
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
  transition: background 0.3s ease;
}

/* 滚动条滑块悬停效果 */
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 滚动条角落 */
.custom-scrollbar::-webkit-scrollbar-corner {
  background: #f1f1f1;
}`,notes:["仅支持 Webkit 内核浏览器（Chrome、Safari、Edge）","width 控制滚动条宽度，height 控制水平滚动条高度","可以完全自定义颜色、圆角、阴影等样式","建议配合 scrollbar-width: thin 作为 Firefox 兼容方案"],difficulty:"medium",browserSupport:"Webkit 内核浏览器",tags:["滚动条","自定义","Webkit","美化"]},{id:"scrollbar-cross-browser",name:"跨浏览器滚动条样式",category:"effects",description:"兼容多浏览器的滚动条样式方案",useCase:"需要在所有浏览器中统一滚动条外观的项目",html:`<div class="scrollbar-container">
  <div class="scrollbar-content">
    <h3>跨浏览器滚动条</h3>
    <p>这个容器的滚动条在不同浏览器中都有统一的样式</p>
    <p>Firefox 使用 scrollbar-width 和 scrollbar-color</p>
    <p>Webkit 浏览器使用 ::-webkit-scrollbar 系列</p>
    <p>更多内容用于测试滚动效果...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
    <p>更多内容...</p>
  </div>
</div>`,css:`.scrollbar-container {
  width: 300px;
  height: 180px;
  overflow-y: auto;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  background: #f8fafc;
  
  /* Firefox 滚动条样式 */
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f1f5f9;
}

/* Webkit 浏览器滚动条样式 */
.scrollbar-container::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-container::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.scrollbar-container::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 3px;
}

.scrollbar-container::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}

.scrollbar-content {
  line-height: 1.6;
}`,notes:["Firefox 使用 scrollbar-width 和 scrollbar-color 属性","Webkit 使用 ::-webkit-scrollbar 伪元素","scrollbar-width 可选值：auto、thin、none","建议使用相近的颜色保持视觉一致性"],difficulty:"medium",browserSupport:"现代浏览器",tags:["滚动条","跨浏览器","兼容性"]},{id:"hide-scrollbar",name:"隐藏滚动条但保持滚动",category:"effects",description:"隐藏滚动条但保持滚动功能的技巧",useCase:"需要干净界面但保持滚动功能的场景，如轮播图、移动端界面",html:`<div class="hide-scrollbar">
  <div class="scroll-content">
    <div class="item">项目 1</div>
    <div class="item">项目 2</div>
    <div class="item">项目 3</div>
    <div class="item">项目 4</div>
    <div class="item">项目 5</div>
    <div class="item">项目 6</div>
  </div>
</div>`,css:`.hide-scrollbar {
  width: 300px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.scroll-content {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px; /* 隐藏滚动条的宽度 */
  margin-right: -17px;
  
  /* 现代浏览器方法 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

/* Webkit 浏览器隐藏滚动条 */
.scroll-content::-webkit-scrollbar {
  display: none;
}

.item {
  padding: 16px;
  margin: 8px 0;
  background: #f0f0f0;
  border-radius: 4px;
}`,notes:["使用 scrollbar-width: none 隐藏 Firefox 滚动条","使用 ::-webkit-scrollbar { display: none } 隐藏 Webkit 滚动条","padding-right 和 margin-right 技巧适用于老版本浏览器","确保内容仍然可以通过鼠标滚轮或触摸滚动"],difficulty:"medium",browserSupport:"所有现代浏览器",tags:["滚动条","隐藏","用户体验"]},{id:"text-selection-style",name:"自定义文本选择样式",category:"text",description:"自定义用户选择文本时的高亮样式",useCase:"品牌化网站、提升用户体验、匹配设计主题",html:`<div class="selection-demo">
  <h3>选择这些文本试试</h3>
  <p class="custom-selection">
    这段文本有自定义的选择样式，试着选择一些文字看看效果。
    背景色和文字颜色都可以自定义。
  </p>
  <p class="gradient-selection">
    这段文本有渐变背景的选择效果，更加炫酷。
  </p>
</div>`,css:`.selection-demo {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 自定义选择样式 */
.custom-selection::selection {
  background-color: #3b82f6;
  color: white;
}

.custom-selection::-moz-selection {
  background-color: #3b82f6;
  color: white;
}

/* 渐变背景选择样式 */
.gradient-selection::selection {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
}

.gradient-selection::-moz-selection {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
}

/* 全局选择样式 */
::selection {
  background-color: rgba(59, 130, 246, 0.3);
  color: #1e40af;
}

::-moz-selection {
  background-color: rgba(59, 130, 246, 0.3);
  color: #1e40af;
}`,notes:["::selection 伪元素用于 Webkit 浏览器","::-moz-selection 用于 Firefox 浏览器","只能设置 color、background-color、text-shadow 等少数属性","可以设置在特定元素或全局范围"],difficulty:"easy",browserSupport:"所有现代浏览器",tags:["文本选择","用户体验","品牌化"]},{id:"placeholder-styling",name:"输入框占位符样式",category:"text",description:"自定义 input 和 textarea 占位符文本样式",useCase:"表单设计、提升输入框视觉效果、品牌一致性",html:`<div class="placeholder-demo">
  <input type="text" placeholder="普通占位符" class="input-normal">
  <input type="text" placeholder="自定义颜色占位符" class="input-custom">
  <input type="text" placeholder="渐变占位符效果" class="input-gradient">
  <textarea placeholder="多行文本占位符样式" class="textarea-custom"></textarea>
</div>`,css:`.placeholder-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}

.input-normal, .input-custom, .input-gradient, .textarea-custom {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.input-normal:focus, .input-custom:focus, 
.input-gradient:focus, .textarea-custom:focus {
  outline: none;
  border-color: #3b82f6;
}

/* 自定义占位符颜色 */
.input-custom::placeholder {
  color: #8b5cf6;
  font-style: italic;
}

.input-custom::-webkit-input-placeholder {
  color: #8b5cf6;
  font-style: italic;
}

.input-custom::-moz-placeholder {
  color: #8b5cf6;
  font-style: italic;
  opacity: 1;
}

/* 渐变占位符效果 */
.input-gradient::placeholder {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 多行文本占位符 */
.textarea-custom {
  min-height: 80px;
  resize: vertical;
}

.textarea-custom::placeholder {
  color: #64748b;
  font-family: inherit;
  line-height: 1.5;
}`,notes:["需要使用多个前缀以确保跨浏览器兼容","::placeholder 是标准语法","::-webkit-input-placeholder 用于老版本 Webkit","Firefox 需要设置 opacity: 1 覆盖默认透明度"],difficulty:"easy",browserSupport:"所有现代浏览器",tags:["占位符","表单","输入框","样式"]},{id:"scroll-behavior-smooth",name:"平滑滚动行为",category:"effects",description:"实现页面内锚点跳转的平滑滚动效果",useCase:"单页应用导航、回到顶部按钮、页面内跳转",html:`<div class="scroll-demo">
  <nav class="scroll-nav">
    <a href="#section1">跳转到第一节</a>
    <a href="#section2">跳转到第二节</a>
    <a href="#section3">跳转到第三节</a>
  </nav>
  
  <div class="scroll-container">
    <section id="section1" class="scroll-section">
      <h3>第一节内容</h3>
      <p>这是第一节的内容...</p>
    </section>
    
    <section id="section2" class="scroll-section">
      <h3>第二节内容</h3>
      <p>这是第二节的内容...</p>
    </section>
    
    <section id="section3" class="scroll-section">
      <h3>第三节内容</h3>
      <p>这是第三节的内容...</p>
    </section>
  </div>
</div>`,css:`/* 全局平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 或者针对特定容器 */
.scroll-container {
  height: 300px;
  overflow-y: auto;
  scroll-behavior: smooth;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.scroll-nav {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  background: #f8fafc;
  border-radius: 8px;
}

.scroll-nav a {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.scroll-nav a:hover {
  background: #2563eb;
}

.scroll-section {
  padding: 40px 20px;
  border-bottom: 1px solid #e2e8f0;
  min-height: 200px;
}

.scroll-section:last-child {
  border-bottom: none;
}

/* 高级平滑滚动控制 */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}`,notes:["scroll-behavior: smooth 提供原生平滑滚动","可以应用于 html 元素或特定滚动容器","尊重用户的动画偏好设置","不支持的浏览器会回退到默认跳转行为"],difficulty:"easy",browserSupport:"Chrome 61+, Firefox 36+, Safari 15.4+",tags:["滚动","平滑","导航","用户体验"]},{id:"user-select-control",name:"文本选择控制",category:"text",description:"控制元素内容是否可以被用户选择",useCase:"按钮文字、UI 控件、防止意外选择的界面元素",html:`<div class="select-demo">
  <p class="selectable">这段文字可以正常选择</p>
  <p class="non-selectable">这段文字无法选择</p>
  <button class="button-demo">按钮文字不可选择</button>
  <div class="partial-select">
    <span class="selectable">可选择部分</span>
    <span class="non-selectable">不可选择部分</span>
  </div>
</div>`,css:`.select-demo {
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

/* 默认可选择 */
.selectable {
  user-select: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  background: #e0f2fe;
  padding: 8px;
  border-radius: 4px;
  margin: 8px 0;
}

/* 禁止选择 */
.non-selectable {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background: #fce4ec;
  padding: 8px;
  border-radius: 4px;
  margin: 8px 0;
  cursor: default;
}

/* 按钮样式 */
.button-demo {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin: 8px 0;
  display: block;
}

.button-demo:hover {
  background: #2563eb;
}

/* 部分选择控制 */
.partial-select {
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 6px;
  margin: 8px 0;
}

.partial-select .selectable {
  background: #dcfce7;
  padding: 4px;
  border-radius: 3px;
}

.partial-select .non-selectable {
  background: #fee2e2;
  padding: 4px;
  border-radius: 3px;
}`,notes:["user-select: none 完全禁止选择","user-select: text 允许选择文本","user-select: all 点击时选择整个元素","需要添加浏览器前缀以确保兼容性"],difficulty:"easy",browserSupport:"所有现代浏览器",tags:["文本选择","用户交互","控制"]},{id:"attribute-selectors",name:"高级属性选择器",category:"text",description:"使用属性选择器实现复杂的元素选择",useCase:"表单验证样式、动态内容样式、无需额外类名的样式控制",html:`<div class="attribute-demo">
  <input type="email" placeholder="邮箱" required>
  <input type="password" placeholder="密码" required>
  <input type="text" placeholder="可选字段">
  
  <div data-status="success">成功状态</div>
  <div data-status="warning">警告状态</div>
  <div data-status="error">错误状态</div>
  
  <a href="https://example.com">外部链接</a>
  <a href="/internal">内部链接</a>
  <a href="mailto:test@example.com">邮件链接</a>
</div>`,css:`.attribute-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 必填字段样式 */
input[required] {
  border-left: 4px solid #f59e0b;
}

input[required]:valid {
  border-left-color: #10b981;
}

input[required]:invalid {
  border-left-color: #ef4444;
}

/* 根据 type 属性设置样式 */
input[type="email"]::before {
  content: "📧 ";
}

input[type="password"] {
  font-family: monospace;
}

/* 属性值匹配 */
[data-status="success"] {
  background: #dcfce7;
  color: #166534;
  padding: 8px 12px;
  border-radius: 4px;
}

[data-status="warning"] {
  background: #fef3c7;
  color: #92400e;
  padding: 8px 12px;
  border-radius: 4px;
}

[data-status="error"] {
  background: #fee2e2;
  color: #991b1b;
  padding: 8px 12px;
  border-radius: 4px;
}

/* 链接类型选择器 */
a[href^="http"]:after {
  content: " 🔗";
}

a[href^="mailto"]:after {
  content: " 📧";
}

a[href^="/"]:after {
  content: " 🏠";
}

/* 部分匹配选择器 */
[class*="btn"] {
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}`,notes:["[attr] 选择具有指定属性的元素",'[attr="value"] 精确匹配属性值','[attr^="value"] 属性值以指定值开头','[attr$="value"] 属性值以指定值结尾','[attr*="value"] 属性值包含指定值'],difficulty:"medium",browserSupport:"所有现代浏览器",tags:["属性选择器","表单","动态样式"]},{id:"focus-visible-styling",name:"focus-visible 焦点样式",category:"effects",description:"使用 focus-visible 提供更好的键盘导航体验",useCase:"无障碍设计、键盘导航、提升用户体验",html:`<div class="focus-demo">
  <button class="focus-btn">点击或Tab键聚焦</button>
  <input type="text" placeholder="输入框" class="focus-input">
  <a href="#" class="focus-link">链接元素</a>
  <div tabindex="0" class="focus-div">可聚焦的div</div>
</div>`,css:`.focus-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.focus-btn, .focus-input, .focus-link, .focus-div {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
}

/* 移除默认焦点样式 */
.focus-btn:focus,
.focus-input:focus,
.focus-link:focus,
.focus-div:focus {
  outline: none;
}

/* 只在键盘导航时显示焦点样式 */
.focus-btn:focus-visible,
.focus-input:focus-visible,
.focus-link:focus-visible,
.focus-div:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
}

/* 鼠标点击时的样式 */
.focus-btn:active {
  transform: translateY(1px);
  background: #f1f5f9;
}

.focus-input:focus {
  border-color: #3b82f6;
}

.focus-link {
  color: #3b82f6;
  text-decoration: none;
}

.focus-link:hover {
  text-decoration: underline;
}

.focus-div {
  background: #f8fafc;
  cursor: pointer;
}

.focus-div:hover {
  background: #f1f5f9;
}`,notes:["focus-visible 只在键盘导航时显示焦点样式","鼠标点击不会触发 focus-visible","提升无障碍访问体验","需要 polyfill 支持老版本浏览器"],difficulty:"medium",browserSupport:"Chrome 86+, Firefox 85+, Safari 15.4+",tags:["焦点","无障碍","键盘导航"]},{id:"print-styles",name:"打印样式优化",category:"responsive",description:"专门为打印设计的CSS样式",useCase:"文档打印、报告生成、节省墨水、优化打印布局",html:`<div class="print-content">
  <header class="no-print">
    <nav>导航栏（打印时隐藏）</nav>
  </header>
  
  <main class="print-main">
    <h1>文档标题</h1>
    <p>这是正文内容，打印时会优化显示。</p>
    
    <div class="color-box">彩色背景（打印时变为边框）</div>
    
    <a href="https://example.com" class="print-link">
      链接文本（打印时显示URL）
    </a>
    
    <div class="page-break-before">新页面开始</div>
    
    <table class="print-table">
      <thead>
        <tr><th>列1</th><th>列2</th></tr>
      </thead>
      <tbody>
        <tr><td>数据1</td><td>数据2</td></tr>
      </tbody>
    </table>
  </main>
</div>`,css:`/* 屏幕显示样式 */
.print-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.color-box {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 20px;
  margin: 16px 0;
  border-radius: 8px;
}

.print-link {
  color: #3b82f6;
  text-decoration: underline;
}

/* 打印样式 */
@media print {
  /* 隐藏不需要打印的元素 */
  .no-print {
    display: none !important;
  }
  
  /* 页面设置 */
  @page {
    margin: 2cm;
    size: A4;
  }
  
  /* 基础样式重置 */
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  /* 保留重要的背景色 */
  .color-box {
    background: white !important;
    border: 2px solid black !important;
    color: black !important;
  }
  
  /* 链接处理 */
  a:after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }
  
  /* 分页控制 */
  .page-break-before {
    page-break-before: always;
  }
  
  .page-break-after {
    page-break-after: always;
  }
  
  .no-page-break {
    page-break-inside: avoid;
  }
  
  /* 表格优化 */
  .print-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .print-table th,
  .print-table td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  .print-table thead {
    display: table-header-group;
  }
  
  /* 字体大小调整 */
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
  
  h1 { font-size: 18pt; }
  h2 { font-size: 16pt; }
  h3 { font-size: 14pt; }
}`,notes:["@media print 专门用于打印样式","@page 可以设置页面边距和尺寸","page-break-* 控制分页行为","打印时通常需要移除背景色和阴影以节省墨水"],difficulty:"medium",browserSupport:"所有浏览器",tags:["打印","媒体查询","优化"]},{id:"backdrop-filter",name:"背景滤镜效果",category:"effects",description:"使用 backdrop-filter 创建毛玻璃和背景模糊效果",useCase:"模态框背景、导航栏、卡片叠加效果、现代UI设计",html:`<div class="backdrop-demo">
  <div class="background-image">
    <div class="backdrop-card blur">
      <h3>毛玻璃效果</h3>
      <p>背景模糊处理</p>
    </div>
    
    <div class="backdrop-card saturate">
      <h3>饱和度效果</h3>
      <p>增强背景色彩</p>
    </div>
    
    <div class="backdrop-card contrast">
      <h3>对比度效果</h3>
      <p>调整背景对比度</p>
    </div>
  </div>
</div>`,css:`.backdrop-demo {
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, 
    #ff9a9e 0%, 
    #fecfef 50%, 
    #fecfef 100%);
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.backdrop-card {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 20px;
  width: 180px;
  text-align: center;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* 不同的背景滤镜效果 */
.backdrop-card.blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.backdrop-card.saturate {
  backdrop-filter: saturate(2) blur(5px);
  -webkit-backdrop-filter: saturate(2) blur(5px);
}

.backdrop-card.contrast {
  backdrop-filter: contrast(1.5) brightness(1.2) blur(3px);
  -webkit-backdrop-filter: contrast(1.5) brightness(1.2) blur(3px);
}

/* 悬停效果 */
.backdrop-card:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
}`,notes:["backdrop-filter 对元素后面的内容应用滤镜","需要 -webkit- 前缀以支持 Safari","可以组合多个滤镜函数","性能消耗较大，建议谨慎使用"],difficulty:"medium",browserSupport:"Chrome 76+, Firefox 103+, Safari 9+",tags:["背景滤镜","毛玻璃","现代效果"]},{id:"aspect-ratio",name:"宽高比控制",category:"layout",description:"使用 aspect-ratio 属性控制元素宽高比",useCase:"响应式图片、视频容器、卡片布局、保持比例的容器",html:`<div class="aspect-demo">
  <div class="aspect-container square">
    <div class="aspect-content">1:1 正方形</div>
  </div>
  
  <div class="aspect-container video">
    <div class="aspect-content">16:9 视频比例</div>
  </div>
  
  <div class="aspect-container photo">
    <div class="aspect-content">4:3 照片比例</div>
  </div>
  
  <div class="aspect-container golden">
    <div class="aspect-content">黄金比例</div>
  </div>
</div>`,css:`.aspect-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.aspect-container {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.aspect-content {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: bold;
  text-align: center;
}

/* 使用 aspect-ratio 属性 */
.square {
  aspect-ratio: 1 / 1;
}

.video {
  aspect-ratio: 16 / 9;
}

.photo {
  aspect-ratio: 4 / 3;
}

.golden {
  aspect-ratio: 1.618 / 1; /* 黄金比例 */
}

/* 兼容性方案（使用 padding-top） */
@supports not (aspect-ratio: 1) {
  .aspect-container {
    position: relative;
  }
  
  .aspect-container::before {
    content: '';
    display: block;
    width: 100%;
  }
  
  .square::before {
    padding-top: 100%; /* 1:1 */
  }
  
  .video::before {
    padding-top: 56.25%; /* 16:9 */
  }
  
  .photo::before {
    padding-top: 75%; /* 4:3 */
  }
  
  .golden::before {
    padding-top: 61.8%; /* 黄金比例 */
  }
}`,notes:["aspect-ratio 是现代CSS属性，简化宽高比控制","可以使用分数形式或小数形式","提供了兼容性方案使用 padding-top","特别适合响应式设计中的媒体容器"],difficulty:"easy",browserSupport:"Chrome 88+, Firefox 89+, Safari 15+",tags:["宽高比","响应式","布局"]}],x=C(()=>{let o=z;if(u.value!=="all"&&(o=o.filter(t=>t.category===u.value)),g.value){const t=g.value.toLowerCase();o=o.filter(r=>r.name.toLowerCase().includes(t)||r.description.toLowerCase().includes(t)||r.tags.some(n=>n.toLowerCase().includes(t)))}return o}),F=C(()=>{const o={flex:[],grid:[],center:[],layout:[],responsive:[],effects:[],text:[],animation:[]};return x.value.forEach(t=>{o[t.category].push(t)}),o});function k(o){i.value=o}function b(o){if(!i.value)return;let t="";o==="html"?t=i.value.html:o==="css"?t=i.value.css:t=`<!-- HTML -->
${i.value.html}

/* CSS */
${i.value.css}`,navigator.clipboard.writeText(t)}function v(o){switch(o){case"easy":return"text-green-400";case"medium":return"text-yellow-400";case"hard":return"text-red-400";default:return"text-gray-400"}}function h(o){switch(o){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return"未知"}}function T(o){const t=`preview-style-${o.id}`,r=document.getElementById(t);r&&r.remove();const n=document.createElement("style");return n.id=t,n.textContent=o.css,document.head.appendChild(n),o.html}return(o,t)=>(a(),s("div",M,[e("div",W,[t[20]||(t[20]=e("h2",{class:"text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"}," CSS 技巧大集合 ",-1)),e("div",$,[e("div",H,[y(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>g.value=r),type:"text",placeholder:"搜索技巧名称、描述或标签...",class:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-amber-500 focus:outline-none"},null,512),[[q,g.value]])]),y(e("select",{"onUpdate:modelValue":t[1]||(t[1]=r=>u.value=r),class:"px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-amber-500 focus:outline-none"},[t[7]||(t[7]=e("option",{value:"all"},"全部分类",-1)),(a(),s(c,null,p(m,(r,n)=>e("option",{key:n,value:n},d(r),9,B)),64))],512),[[I,u.value]])]),e("div",G,[e("div",U,[e("div",D,[e("h3",V," 技巧列表 ("+d(x.value.length)+") ",1),u.value==="all"?(a(),s("div",N,[(a(!0),s(c,null,p(F.value,(r,n)=>y((a(),s("div",{key:n,class:"space-y-2"},[e("h4",A,d(m[n]),1),e("div",J,[(a(!0),s(c,null,p(r,l=>{var S;return a(),s("button",{key:l.id,onClick:_e=>k(l),class:f(["w-full text-left px-3 py-2 rounded text-sm transition-colors",((S=i.value)==null?void 0:S.id)===l.id?"bg-amber-600/50 text-amber-200 border border-amber-500/50":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"])},[e("div",R,[e("span",null,d(l.name),1),e("span",{class:f([v(l.difficulty),"text-xs"])},d(h(l.difficulty)),3)])],10,P)}),128))])])),[[j,r.length>0]])),128))])):(a(),s("div",Y,[(a(!0),s(c,null,p(x.value,r=>{var n;return a(),s("button",{key:r.id,onClick:l=>k(r),class:f(["w-full text-left px-3 py-2 rounded text-sm transition-colors",((n=i.value)==null?void 0:n.id)===r.id?"bg-amber-600/50 text-amber-200 border border-amber-500/50":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"])},[e("div",Q,[e("span",null,d(r.name),1),e("span",{class:f([v(r.difficulty),"text-xs"])},d(h(r.difficulty)),3)])],10,O)}),128))])),x.value.length===0?(a(),s("div",X,[...t[8]||(t[8]=[e("div",{class:"text-2xl mb-2"},"🔍",-1),e("div",null,"没有找到匹配的技巧",-1)])])):_("",!0)])]),e("div",K,[i.value?(a(),s("div",ee,[i.value?(a(),s(c,{key:0},[e("div",te,[e("div",re,[e("div",null,[e("h3",ie,d(i.value.name),1),e("div",oe,[e("span",ae,d(m[i.value.category]),1),e("span",{class:f(v(i.value.difficulty))},d(h(i.value.difficulty)),3),e("span",null,d(i.value.browserSupport),1)])])]),e("div",se,[e("div",null,[t[10]||(t[10]=e("h4",{class:"text-sm font-medium text-gray-300 mb-1"},"描述",-1)),e("p",de,d(i.value.description),1)]),e("div",null,[t[11]||(t[11]=e("h4",{class:"text-sm font-medium text-gray-300 mb-1"},"使用场景",-1)),e("p",ne,d(i.value.useCase),1)]),e("div",null,[t[12]||(t[12]=e("h4",{class:"text-sm font-medium text-gray-300 mb-1"},"标签",-1)),e("div",le,[(a(!0),s(c,null,p(i.value.tags,r=>(a(),s("span",{key:r,class:"px-2 py-1 bg-blue-900/30 text-blue-300 rounded text-xs"},d(r),1))),128))])])])]),e("div",ce,[t[13]||(t[13]=e("h3",{class:"text-lg font-semibold mb-3 text-pink-300"},"效果演示",-1)),e("div",pe,[e("div",{innerHTML:T(i.value),class:"preview-content"},null,8,ue)]),t[14]||(t[14]=e("div",{class:"mt-3 text-xs text-gray-400"}," 💡 实时预览效果，可以直观看到CSS技巧的实际表现 ",-1))]),e("div",be,[e("div",fe,[t[15]||(t[15]=e("h3",{class:"text-lg font-semibold text-emerald-300"},"HTML 结构",-1)),e("button",{onClick:t[2]||(t[2]=r=>b("html")),class:"px-3 py-1 bg-emerald-600 hover:bg-emerald-700 rounded text-sm transition-colors"}," 复制 HTML ")]),e("pre",ge,[e("code",null,d(i.value.html),1)])]),e("div",xe,[e("div",me,[t[16]||(t[16]=e("h3",{class:"text-lg font-semibold text-purple-300"},"CSS 样式",-1)),e("button",{onClick:t[3]||(t[3]=r=>b("css")),class:"px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors"}," 复制 CSS ")]),e("pre",ve,[e("code",null,d(i.value.css),1)])]),e("div",he,[t[18]||(t[18]=e("h3",{class:"text-lg font-semibold mb-3 text-yellow-300"},"注意事项",-1)),e("ul",ye,[(a(!0),s(c,null,p(i.value.notes,r=>(a(),s("li",{key:r,class:"flex items-start gap-2 text-gray-300"},[t[17]||(t[17]=e("span",{class:"text-yellow-400 mt-1"},"•",-1)),e("span",null,d(r),1)]))),128))])]),e("div",we,[t[19]||(t[19]=e("h3",{class:"text-lg font-semibold mb-3 text-rose-300"},"快速操作",-1)),e("div",ke,[e("button",{onClick:t[4]||(t[4]=r=>b("both")),class:"px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded transition-colors"}," 复制完整代码 "),e("button",{onClick:t[5]||(t[5]=r=>b("html")),class:"px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded transition-colors"}," 仅复制 HTML "),e("button",{onClick:t[6]||(t[6]=r=>b("css")),class:"px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded transition-colors"}," 仅复制 CSS ")])])],64)):_("",!0)])):(a(),s("div",Z,[...t[9]||(t[9]=[e("div",{class:"text-6xl mb-4"},"🎨",-1),e("h3",{class:"text-xl font-semibold text-gray-300 mb-2"},"选择一个CSS技巧",-1),e("p",{class:"text-gray-400"},"从左侧列表中选择一个技巧查看详细说明和代码示例",-1)])]))])])])]))}}),Ee=L(Se,[["__scopeId","data-v-480d9d2d"]]);export{Ee as default};
