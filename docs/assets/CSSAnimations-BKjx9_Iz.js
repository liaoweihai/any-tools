import{A as B,E as s,F as R,I as b,O as m,R as d,_ as E,c as N,ct as P,d as l,f as n,h as C,l as e,lt as o,m as F,o as u,st as A,u as V}from"./codemirror-B25QCqWr.js";import{d as h}from"./vendor-vue-C93_ecI2.js";import{t as j}from"./index-CMaGPMgF.js";var H={class:"min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden"},M={class:"relative z-10 container mx-auto px-6 py-8"},G={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},W={class:"lg:col-span-1"},J={class:"bg-gray-900/70 border border-rose-500/30 rounded-xl p-5 max-h-[calc(100vh-200px)] overflow-y-auto"},q={class:"space-y-4"},K={class:"text-sm font-medium text-gray-300 border-b border-gray-700 pb-1 sticky top-12 bg-gray-900/70"},Q={class:"space-y-1"},Z=["onClick"],ee={class:"lg:col-span-2 space-y-6 max-h-screen overflow-y-auto pr-2"},te={class:"bg-gray-900/70 border border-cyan-500/30 rounded-xl p-5"},ae={class:"flex items-center justify-between mb-4"},se=["disabled"],ne={class:"bg-gray-800/50 rounded-lg p-8 flex items-center justify-center min-h-[200px]"},re={key:0,class:"typewriter-demo text-white text-xl font-mono"},oe={key:1,class:"neon-demo text-2xl font-bold text-cyan-400"},ie={key:2,class:"glitch-demo text-2xl font-bold text-white","data-text":"GLITCH"},le={key:3,class:"wave-demo flex space-x-1"},me={key:4,class:"matrix-demo text-green-400 font-mono text-sm"},de={key:5,class:"text-6xl text-red-500"},ue={key:6,class:"text-6xl text-yellow-400"},pe={key:7,class:"text-6xl"},ce={key:8,class:"text-6xl"},ye={key:9,class:"text-6xl"},fe={key:10,class:"text-6xl"},ge={key:11,class:"w-24 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg"},ve={key:12,class:"w-32 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold"},xe={key:0},ke={key:1},be={key:2},he={key:3},Ne={key:4},Fe={key:13,class:"text-6xl"},_e={key:14,class:"text-6xl"},we={key:15,class:"text-6xl text-yellow-300"},Ie={key:16,class:"w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold"},Ye={key:1,class:"text-gray-400 text-center"},Pe={key:0,class:"bg-gray-900/70 border border-purple-500/30 rounded-xl p-5"},Ce={class:"grid grid-cols-2 gap-4"},Xe={key:0},Se={key:1},De=["value"],Oe={key:2},ze={key:3},Le={class:"mt-4 p-3 bg-purple-900/30 rounded border border-purple-500/30"},$e={class:"text-sm font-medium text-purple-300 mb-1"},Ue={class:"text-xs text-gray-400"},Te={key:1,class:"bg-gray-900/70 border border-emerald-500/30 rounded-xl p-5"},Be={class:"text-lg font-semibold mb-4 text-emerald-300"},Re={class:"space-y-4"},Ee={class:"text-gray-400"},Ae={class:"text-gray-400"},Ve={class:"text-gray-400 space-y-1"},je={key:2,class:"bg-gray-900/70 border border-yellow-500/30 rounded-xl p-5"},He={class:"bg-gray-800 p-4 rounded text-sm overflow-x-auto"},Me={class:"mt-4 p-4 bg-blue-900/30 rounded border border-blue-500/30"},Ge={class:"text-sm text-gray-300 space-y-1"},We={class:"bg-gray-700 px-1 rounded"},Je={key:0},qe=E({__name:"CSSAnimations",setup(Ke){const a=d(null),y=d(!1),p=d("1s"),f=d("ease"),g=d("0s"),v=d("1"),X=["ease","ease-in","ease-out","ease-in-out","linear","cubic-bezier(0.25, 0.46, 0.45, 0.94)","cubic-bezier(0.55, 0.085, 0.68, 0.53)","cubic-bezier(0.25, 0.46, 0.45, 0.94)","cubic-bezier(0.165, 0.84, 0.44, 1)"],S=[{name:"fadeIn",displayName:"淡入",type:"entrance",description:"元素从透明渐变到不透明",keyframes:`@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,className:"fade-in",duration:"1s",timingFunction:"ease",usage:"适用于页面加载、内容显示等场景",notes:["最基础的入场动画","性能友好","兼容性极佳"],supportedParams:["duration","timingFunction","delay"]},{name:"fadeInUp",displayName:"淡入向上",type:"entrance",description:"元素从下方淡入并向上移动",keyframes:`@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,className:"fade-in-up",duration:"0.8s",timingFunction:"ease-out",usage:"适用于卡片、列表项等内容展示",notes:["优雅的入场效果","适合内容逐个显示"],supportedParams:["duration","timingFunction","delay"]},{name:"fadeInDown",displayName:"淡入向下",type:"entrance",description:"元素从上方淡入并向下移动",keyframes:`@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`,className:"fade-in-down",duration:"0.8s",timingFunction:"ease-out",usage:"适用于标题、通知等从顶部出现的内容",notes:["适合顶部导航","下拉效果自然"],supportedParams:["duration","timingFunction","delay"]},{name:"slideInLeft",displayName:"从左滑入",type:"entrance",description:"元素从左侧滑入到原位置",keyframes:`@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}`,className:"slide-in-left",duration:"0.6s",timingFunction:"ease-out",usage:"适用于侧边栏、导航菜单等",notes:["需要父容器设置 overflow: hidden","移动端性能良好"],supportedParams:["duration","timingFunction","delay"]},{name:"slideInRight",displayName:"从右滑入",type:"entrance",description:"元素从右侧滑入到原位置",keyframes:`@keyframes slideInRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}`,className:"slide-in-right",duration:"0.6s",timingFunction:"ease-out",usage:"适用于侧边栏、通知等",notes:["需要父容器设置 overflow: hidden","与 slideInLeft 成对使用"],supportedParams:["duration","timingFunction","delay"]},{name:"slideInUp",displayName:"从下滑入",type:"entrance",description:"元素从下方滑入到原位置",keyframes:`@keyframes slideInUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}`,className:"slide-in-up",duration:"0.6s",timingFunction:"ease-out",usage:"适用于底部弹窗、Toast 提示等",notes:["移动端常用","适合底部操作面板"],supportedParams:["duration","timingFunction","delay"]},{name:"slideInDown",displayName:"从上滑入",type:"entrance",description:"元素从上方滑入到原位置",keyframes:`@keyframes slideInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}`,className:"slide-in-down",duration:"0.6s",timingFunction:"ease-out",usage:"适用于顶部通知、下拉菜单等",notes:["适合顶部导航","下拉刷新效果"],supportedParams:["duration","timingFunction","delay"]},{name:"zoomIn",displayName:"缩放入场",type:"entrance",description:"元素从小到大缩放入场",keyframes:`@keyframes zoomIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}`,className:"zoom-in",duration:"0.5s",timingFunction:"ease-out",usage:"适用于模态框、图片预览等",notes:["视觉冲击力强","适合重要内容展示"],supportedParams:["duration","timingFunction","delay"]},{name:"zoomInUp",displayName:"缩放向上入场",type:"entrance",description:"元素从小到大缩放并向上移动",keyframes:`@keyframes zoomInUp {
  from {
    opacity: 0;
    transform: scale(0.1) translateY(2000px);
  }
  60% {
    opacity: 1;
    transform: scale(0.475) translateY(-60px);
  }
  to {
    transform: scale(1) translateY(0);
  }
}`,className:"zoom-in-up",duration:"1s",timingFunction:"ease",usage:"适用于重要内容的戏剧性入场",notes:["视觉效果强烈","适合产品展示"],supportedParams:["duration","timingFunction","delay"]},{name:"bounceIn",displayName:"弹跳入场",type:"entrance",description:"元素带有弹跳效果的入场动画",keyframes:`@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`,className:"bounce-in",duration:"0.8s",timingFunction:"ease",usage:"适用于按钮点击反馈、成功提示等",notes:["活泼有趣","不宜过度使用","适合游戏化界面"],supportedParams:["duration","timingFunction","delay"]},{name:"bounceInDown",displayName:"弹跳向下入场",type:"entrance",description:"元素从上方弹跳入场",keyframes:`@keyframes bounceInDown {
  0% {
    opacity: 0;
    transform: translateY(-3000px);
  }
  60% {
    opacity: 1;
    transform: translateY(25px);
  }
  75% {
    transform: translateY(-10px);
  }
  90% {
    transform: translateY(5px);
  }
  to {
    transform: translateY(0);
  }
}`,className:"bounce-in-down",duration:"1s",timingFunction:"ease",usage:"适用于重要通知、警告信息",notes:["引人注目","适合重要信息展示"],supportedParams:["duration","timingFunction","delay"]},{name:"lightSpeedInRight",displayName:"光速从右入场",type:"entrance",description:"元素以光速效果从右侧入场",keyframes:`@keyframes lightSpeedInRight {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}`,className:"light-speed-in-right",duration:"1s",timingFunction:"ease-out",usage:"适用于快速切换、动态效果",notes:["速度感强烈","适合科技感界面"],supportedParams:["duration","timingFunction","delay"]},{name:"fadeOut",displayName:"淡出",type:"exit",description:"元素从不透明渐变到透明",keyframes:`@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}`,className:"fade-out",duration:"0.5s",timingFunction:"ease",usage:"适用于内容隐藏、页面切换等",notes:["最基础的出场动画","通常需要配合 JS 移除元素"],supportedParams:["duration","timingFunction","delay"]},{name:"fadeOutUp",displayName:"淡出向上",type:"exit",description:"元素向上移动并淡出",keyframes:`@keyframes fadeOutUp {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}`,className:"fade-out-up",duration:"0.5s",timingFunction:"ease-in",usage:"适用于删除操作、内容收起",notes:["优雅的退场效果","与fadeInUp配对使用"],supportedParams:["duration","timingFunction","delay"]},{name:"slideOutLeft",displayName:"向左滑出",type:"exit",description:"元素向左侧滑出并消失",keyframes:`@keyframes slideOutLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}`,className:"slide-out-left",duration:"0.5s",timingFunction:"ease-in",usage:"适用于侧边栏关闭、卡片删除等",notes:["与 slideInLeft 成对使用","出场动画通常更快"],supportedParams:["duration","timingFunction","delay"]},{name:"slideOutRight",displayName:"向右滑出",type:"exit",description:"元素向右侧滑出并消失",keyframes:`@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}`,className:"slide-out-right",duration:"0.5s",timingFunction:"ease-in",usage:"适用于卡片滑动删除、页面切换等",notes:["移动端手势操作常用","可配合触摸事件"],supportedParams:["duration","timingFunction","delay"]},{name:"zoomOut",displayName:"缩放出场",type:"exit",description:"元素从大到小缩放出场",keyframes:`@keyframes zoomOut {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}`,className:"zoom-out",duration:"0.4s",timingFunction:"ease-in",usage:"适用于模态框关闭、图片收起等",notes:["与 zoomIn 成对使用","关闭效果直观"],supportedParams:["duration","timingFunction","delay"]},{name:"bounceOut",displayName:"弹跳出场",type:"exit",description:"元素带有弹跳效果的出场动画",keyframes:`@keyframes bounceOut {
  20% {
    transform: scale(0.9);
  }
  50%, 55% {
    opacity: 1;
    transform: scale(1.1);
  }
  to {
    opacity: 0;
    transform: scale(0.3);
  }
}`,className:"bounce-out",duration:"0.75s",timingFunction:"ease",usage:"适用于删除确认、错误提示消失",notes:["与bounceIn配对","有趣的退场效果"],supportedParams:["duration","timingFunction","delay"]},{name:"lightSpeedOutRight",displayName:"光速向右出场",type:"exit",description:"元素以光速效果向右出场",keyframes:`@keyframes lightSpeedOutRight {
  from {
    opacity: 1;
  }
  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}`,className:"light-speed-out-right",duration:"1s",timingFunction:"ease-in",usage:"适用于快速切换、页面跳转",notes:["速度感强烈","科技感十足"],supportedParams:["duration","timingFunction","delay"]},{name:"pulse",displayName:"脉冲",type:"attention",description:"元素周期性的缩放变化",keyframes:`@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}`,className:"pulse",duration:"1s",timingFunction:"ease-in-out",usage:"适用于按钮高亮、重要提示等",notes:["通常设置 infinite 循环","吸引用户注意力"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"heartbeat",displayName:"心跳",type:"attention",description:"模拟心跳的缩放效果",keyframes:`@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}`,className:"heartbeat",duration:"1.5s",timingFunction:"ease-in-out",usage:"适用于点赞按钮、收藏功能",notes:["模拟心跳节奏","情感化设计"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"shake",displayName:"摇摆",type:"attention",description:"元素左右摇摆",keyframes:`@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}`,className:"shake",duration:"0.8s",timingFunction:"ease-in-out",usage:"适用于表单验证错误、警告提示等",notes:["表示错误或警告","不宜频繁使用"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"shakeY",displayName:"垂直摇摆",type:"attention",description:"元素上下摇摆",keyframes:`@keyframes shakeY {
  0%, 100% { transform: translateY(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateY(-10px); }
  20%, 40%, 60%, 80% { transform: translateY(10px); }
}`,className:"shake-y",duration:"0.8s",timingFunction:"ease-in-out",usage:"适用于拒绝操作、错误反馈",notes:["垂直方向的摇摆","错误提示效果"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"bounce",displayName:"弹跳",type:"attention",description:"元素上下弹跳",keyframes:`@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 43% {
    transform: translateY(-30px);
  }
  70% {
    transform: translateY(-15px);
  }
  90% {
    transform: translateY(-4px);
  }
}`,className:"bounce",duration:"1s",timingFunction:"ease",usage:"适用于成功提示、活跃按钮等",notes:["活泼有趣","适合游戏化设计"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"flash",displayName:"闪烁",type:"attention",description:"元素透明度快速变化",keyframes:`@keyframes flash {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}`,className:"flash",duration:"1s",timingFunction:"ease-in-out",usage:"适用于紧急提醒、状态指示等",notes:["强烈的视觉效果","谨慎使用，可能影响用户体验"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"rubberBand",displayName:"橡皮筋",type:"attention",description:"元素像橡皮筋一样拉伸变形",keyframes:`@keyframes rubberBand {
  from { transform: scale(1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  to { transform: scale(1); }
}`,className:"rubber-band",duration:"1s",timingFunction:"ease",usage:"适用于按钮点击、交互反馈",notes:["有趣的变形效果","适合创意设计"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"swing",displayName:"摆动",type:"attention",description:"元素像钟摆一样摆动",keyframes:`@keyframes swing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  to { transform: rotate(0deg); }
}`,className:"swing",duration:"1s",timingFunction:"ease",usage:"适用于悬挂元素、装饰效果",notes:["自然的摆动效果","适合装饰性动画"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"tada",displayName:"欢呼",type:"attention",description:"元素做出欢呼的动作",keyframes:`@keyframes tada {
  from { transform: scale(1); }
  10%, 20% { transform: scale(0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); }
  to { transform: scale(1) rotate(0); }
}`,className:"tada",duration:"1s",timingFunction:"ease",usage:"适用于成功庆祝、完成任务",notes:["庆祝效果","积极的情感表达"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"wobble",displayName:"摇晃",type:"attention",description:"元素不规则摇晃",keyframes:`@keyframes wobble {
  from { transform: translate(0); }
  15% { transform: translate(-25%, 0) rotate(-5deg); }
  30% { transform: translate(20%, 0) rotate(3deg); }
  45% { transform: translate(-15%, 0) rotate(-3deg); }
  60% { transform: translate(10%, 0) rotate(2deg); }
  75% { transform: translate(-5%, 0) rotate(-1deg); }
  to { transform: translate(0); }
}`,className:"wobble",duration:"1s",timingFunction:"ease",usage:"适用于不稳定状态、警告提示",notes:["不稳定的摇晃效果","表示异常状态"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"rotateIn",displayName:"旋转入场",type:"transform",description:"元素旋转并淡入",keyframes:`@keyframes rotateIn {
  from {
    transform: rotate(-200deg);
    opacity: 0;
  }
  to {
    transform: rotate(0);
    opacity: 1;
  }
}`,className:"rotate-in",duration:"0.8s",timingFunction:"ease-out",usage:"适用于图标展示、特殊效果等",notes:["视觉效果独特","适合创意设计"],supportedParams:["duration","timingFunction","delay"]},{name:"rotateOut",displayName:"旋转出场",type:"transform",description:"元素旋转并淡出",keyframes:`@keyframes rotateOut {
  from {
    transform: rotate(0);
    opacity: 1;
  }
  to {
    transform: rotate(200deg);
    opacity: 0;
  }
}`,className:"rotate-out",duration:"0.8s",timingFunction:"ease-in",usage:"适用于删除操作、页面切换",notes:["与rotateIn配对使用","旋转退场效果"],supportedParams:["duration","timingFunction","delay"]},{name:"flipInX",displayName:"X轴翻转入场",type:"transform",description:"元素沿X轴翻转入场",keyframes:`@keyframes flipInX {
  from {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateX(-20deg);
  }
  60% {
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateX(-5deg);
  }
  to {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
}`,className:"flip-in-x",duration:"0.8s",timingFunction:"ease-in",usage:"适用于卡片翻转、内容切换等",notes:["3D效果","需要现代浏览器支持","移动端性能考虑"],supportedParams:["duration","timingFunction","delay"]},{name:"flipInY",displayName:"Y轴翻转入场",type:"transform",description:"元素沿Y轴翻转入场",keyframes:`@keyframes flipInY {
  from {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotateY(-20deg);
  }
  60% {
    transform: perspective(400px) rotateY(10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotateY(-5deg);
  }
  to {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
}`,className:"flip-in-y",duration:"0.8s",timingFunction:"ease-in",usage:"适用于卡片翻转、图片切换等",notes:["3D效果","视觉冲击力强","适合产品展示"],supportedParams:["duration","timingFunction","delay"]},{name:"flipOutX",displayName:"X轴翻转出场",type:"transform",description:"元素沿X轴翻转出场",keyframes:`@keyframes flipOutX {
  from {
    transform: perspective(400px) rotateX(0deg);
    opacity: 1;
  }
  30% {
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}`,className:"flip-out-x",duration:"0.75s",timingFunction:"ease-in",usage:"适用于卡片删除、内容隐藏",notes:["与flipInX配对","3D翻转效果"],supportedParams:["duration","timingFunction","delay"]},{name:"flipOutY",displayName:"Y轴翻转出场",type:"transform",description:"元素沿Y轴翻转出场",keyframes:`@keyframes flipOutY {
  from {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
  30% {
    transform: perspective(400px) rotateY(-15deg);
    opacity: 1;
  }
  to {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}`,className:"flip-out-y",duration:"0.75s",timingFunction:"ease-in",usage:"适用于页面切换、内容替换",notes:["与flipInY配对","流畅的翻转效果"],supportedParams:["duration","timingFunction","delay"]},{name:"hinge",displayName:"铰链",type:"special",description:"元素像门一样从铰链处旋转掉落",keyframes:`@keyframes hinge {
  0% { transform: rotate(0); transform-origin: top left; }
  20%, 60% { transform: rotate(80deg); transform-origin: top left; }
  40%, 80% { transform: rotate(60deg); transform-origin: top left; opacity: 1; }
  to { transform: translateY(700px); opacity: 0; }
}`,className:"hinge",duration:"2s",timingFunction:"ease-in-out",usage:"适用于删除操作、戏剧性退场",notes:["独特的掉落效果","时间较长","适合特殊场景"],supportedParams:["duration","timingFunction","delay"]},{name:"jackInTheBox",displayName:"弹簧盒",type:"special",description:"元素像弹簧盒一样弹出",keyframes:`@keyframes jackInTheBox {
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }
  50% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(3deg);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`,className:"jack-in-the-box",duration:"1s",timingFunction:"ease",usage:"适用于惊喜效果、特殊入场",notes:["有趣的弹出效果","适合游戏化设计"],supportedParams:["duration","timingFunction","delay"]},{name:"rollIn",displayName:"滚动入场",type:"special",description:"元素滚动着入场",keyframes:`@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate(-100%) rotate(-120deg);
  }
  to {
    opacity: 1;
    transform: translate(0) rotate(0deg);
  }
}`,className:"roll-in",duration:"1s",timingFunction:"ease",usage:"适用于创意展示、特殊效果",notes:["滚动效果独特","适合创意设计"],supportedParams:["duration","timingFunction","delay"]},{name:"rollOut",displayName:"滚动出场",type:"special",description:"元素滚动着出场",keyframes:`@keyframes rollOut {
  from {
    opacity: 1;
    transform: translate(0) rotate(0deg);
  }
  to {
    opacity: 0;
    transform: translate(100%) rotate(120deg);
  }
}`,className:"roll-out",duration:"1s",timingFunction:"ease",usage:"适用于删除操作、页面切换",notes:["与rollIn配对","滚动退场效果"],supportedParams:["duration","timingFunction","delay"]},{name:"typewriter",displayName:"打字机",type:"special",description:"文字逐个显示的打字机效果",keyframes:`@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blinkCursor {
  from, to { border-color: transparent; }
  50% { border-color: currentColor; }
}`,className:"typewriter",duration:"3s",timingFunction:"steps(40, end)",usage:"适用于文字展示、标题动画",notes:["需要配合overflow:hidden","适合文字内容","需要设置固定宽度"],supportedParams:["duration"]},{name:"slideInBlurred",displayName:"模糊滑入",type:"special",description:"元素从模糊状态滑入并变清晰",keyframes:`@keyframes slideInBlurred {
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}`,className:"slide-in-blurred",duration:"0.6s",timingFunction:"ease-out",usage:"适用于现代化界面、科技感效果",notes:["现代浏览器支持","视觉效果出色"],supportedParams:["duration","timingFunction","delay"]},{name:"glitch",displayName:"故障",type:"special",description:"故障风格的抖动效果",keyframes:`@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}`,className:"glitch",duration:"0.3s",timingFunction:"ease-in-out",usage:"适用于错误状态、科技风格",notes:["故障风格","适合科技主题","不宜长时间使用"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"neon",displayName:"霓虹灯",type:"special",description:"霓虹灯发光效果",keyframes:`@keyframes neon {
  0%, 100% {
    text-shadow: 
      0 0 5px currentColor,
      0 0 10px currentColor,
      0 0 15px currentColor,
      0 0 20px currentColor;
  }
  50% {
    text-shadow: 
      0 0 2px currentColor,
      0 0 5px currentColor,
      0 0 8px currentColor,
      0 0 12px currentColor;
  }
}`,className:"neon",duration:"1.5s",timingFunction:"ease-in-out",usage:"适用于标题、品牌名称、夜间主题",notes:["发光效果","适合深色背景","现代感强"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"wave",displayName:"波浪",type:"special",description:"文字波浪起伏效果",keyframes:`@keyframes wave {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-20px); }
}`,className:"wave",duration:"1.5s",timingFunction:"ease-in-out",usage:"适用于文字动画、装饰效果",notes:["需要逐字符应用","延迟效果更佳","活泼有趣"],supportedParams:["duration","timingFunction","delay","iterationCount"]},{name:"matrix",displayName:"矩阵",type:"special",description:"矩阵数字雨效果",keyframes:`@keyframes matrix {
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}`,className:"matrix",duration:"2s",timingFunction:"linear",usage:"适用于科技主题、数据展示",notes:["科技感十足","适合深色主题","循环播放效果佳"],supportedParams:["duration","timingFunction","delay","iterationCount"]}],D=N(()=>{const i={entrance:[],exit:[],attention:[],transform:[],special:[]};return S.forEach(t=>{i[t.type].push(t)}),i}),_={entrance:"入场动画",exit:"出场动画",attention:"注意力动画",transform:"变形动画",special:"特殊动画"},O={entrance:"元素进入页面时的动画效果",exit:"元素离开页面时的动画效果",attention:"吸引用户注意力的循环动画",transform:"元素形态变化的动画效果",special:"独特创意的特殊动画效果"},z=N(()=>a.value?a.value.supportedParams||[]:[]),x=i=>z.value.includes(i);function L(i){a.value=i,w()}function w(){a.value&&(y.value=!0,setTimeout(()=>{y.value=!1},parseFloat(p.value)*1e3+100))}function $(){if(!a.value)return;const i=I();navigator.clipboard.writeText(i)}function U(){if(!a.value)return;const i=`<div class="${a.value.className}">
  <!-- 你的内容 -->
</div>`;navigator.clipboard.writeText(i)}function I(){return a.value?`${a.value.keyframes}

.${a.value.className} {
  animation: ${a.value.name} ${p.value} ${f.value} ${g.value} ${v.value};
}`:""}const T=N(()=>!a.value||!y.value?{}:{animation:`${a.value.name} ${p.value} ${f.value} ${g.value} ${v.value}`});return(i,t)=>(s(),n("div",H,[e("div",M,[t[25]||(t[25]=e("h2",{class:"text-3xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent"}," CSS 动画大集合 ",-1)),e("div",G,[e("div",W,[e("div",J,[t[4]||(t[4]=e("h3",{class:"text-lg font-semibold mb-4 text-rose-300 sticky top-0 bg-gray-900/70 pb-2"},"动画列表",-1)),e("div",q,[(s(!0),n(u,null,m(D.value,(r,c)=>(s(),n("div",{key:c,class:"space-y-2"},[e("h4",K,o(_[c]),1),e("div",Q,[(s(!0),n(u,null,m(r,k=>{var Y;return s(),n("button",{key:k.name,onClick:Qe=>L(k),class:A(["w-full text-left px-3 py-2 rounded text-sm transition-colors",((Y=a.value)==null?void 0:Y.name)===k.name?"bg-rose-600/50 text-rose-200 border border-rose-500/50":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"])},o(k.displayName),11,Z)}),128))])]))),128))])])]),e("div",ee,[e("div",te,[e("div",ae,[t[5]||(t[5]=e("h3",{class:"text-lg font-semibold text-cyan-300"},"动画预览",-1)),e("button",{onClick:w,disabled:!a.value,class:"px-4 py-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded transition-colors"},o(y.value?"播放中...":"播放动画"),9,se)]),e("div",ne,[a.value?(s(),n("div",{key:0,style:P(T.value),class:"demo-container"},[a.value.name==="typewriter"?(s(),n("div",re," Hello World! ")):a.value.name==="neon"?(s(),n("div",oe," NEON ")):a.value.name==="glitch"?(s(),n("div",ie," GLITCH ")):a.value.name==="wave"?(s(),n("div",le,[(s(),n(u,null,m("WAVE",(r,c)=>e("span",{key:c,class:"inline-block text-2xl font-bold text-blue-400",style:P({animationDelay:`${c*.1}s`})},o(r),5)),64))])):a.value.name==="matrix"?(s(),n("div",me,[(s(),n(u,null,m(5,r=>e("div",{key:r,class:"matrix-line"},o("01".repeat(10)),1)),64))])):a.value.name==="heartbeat"?(s(),n("div",de," ❤️ ")):a.value.name==="flash"?(s(),n("div",ue," 💡 ")):a.value.name==="swing"?(s(),n("div",pe," 🕰️ ")):a.value.name==="bounce"?(s(),n("div",ce," ⚽ ")):a.value.name==="shake"||a.value.name==="shakeY"?(s(),n("div",ye," 🏠 ")):a.value.name.includes("rotate")?(s(),n("div",fe," ⚙️ ")):a.value.name.includes("flip")?(s(),n("div",ge,[...t[6]||(t[6]=[e("div",{class:"text-center"},[e("div",{class:"text-2xl"},"🃏"),e("div",{class:"text-xs mt-1"},"CARD")],-1)])])):a.value.name.includes("slide")?(s(),n("div",ve,[a.value.name.includes("Left")?(s(),n("span",xe,"← SLIDE")):a.value.name.includes("Right")?(s(),n("span",ke,"SLIDE →")):a.value.name.includes("Up")?(s(),n("span",be,"↑ SLIDE")):a.value.name.includes("Down")?(s(),n("span",he,"SLIDE ↓")):(s(),n("span",Ne,"SLIDE"))])):a.value.name.includes("zoom")?(s(),n("div",Fe," 🔍 ")):a.value.name.includes("fade")?(s(),n("div",_e," 👻 ")):a.value.name.includes("lightSpeed")?(s(),n("div",we," ⚡ ")):(s(),n("div",Ie," Demo "))],4)):(s(),n("div",Ye,[...t[7]||(t[7]=[e("div",{class:"text-4xl mb-2"},"🎭",-1),e("div",null,"选择一个动画查看效果",-1)])]))])]),a.value?(s(),n("div",Pe,[t[15]||(t[15]=e("h3",{class:"text-lg font-semibold mb-4 text-purple-300"},"参数调整",-1)),e("div",Ce,[x("duration")?(s(),n("div",Xe,[t[9]||(t[9]=e("label",{class:"block text-sm text-gray-400 mb-2"},"持续时间",-1)),b(e("select",{"onUpdate:modelValue":t[0]||(t[0]=r=>p.value=r),class:"w-full px-3 py-2 rounded bg-gray-800 text-white"},[...t[8]||(t[8]=[F('<option value="0.3s" data-v-6f490436>0.3s (快)</option><option value="0.5s" data-v-6f490436>0.5s</option><option value="0.8s" data-v-6f490436>0.8s</option><option value="1s" data-v-6f490436>1s (默认)</option><option value="1.5s" data-v-6f490436>1.5s</option><option value="2s" data-v-6f490436>2s (慢)</option><option value="3s" data-v-6f490436>3s (很慢)</option>',7)])],512),[[h,p.value]])])):l("",!0),x("timingFunction")?(s(),n("div",Se,[t[10]||(t[10]=e("label",{class:"block text-sm text-gray-400 mb-2"},"缓动函数",-1)),b(e("select",{"onUpdate:modelValue":t[1]||(t[1]=r=>f.value=r),class:"w-full px-3 py-2 rounded bg-gray-800 text-white"},[(s(),n(u,null,m(X,r=>e("option",{key:r,value:r},o(r),9,De)),64))],512),[[h,f.value]])])):l("",!0),x("delay")?(s(),n("div",Oe,[t[12]||(t[12]=e("label",{class:"block text-sm text-gray-400 mb-2"},"延迟时间",-1)),b(e("select",{"onUpdate:modelValue":t[2]||(t[2]=r=>g.value=r),class:"w-full px-3 py-2 rounded bg-gray-800 text-white"},[...t[11]||(t[11]=[F('<option value="0s" data-v-6f490436>无延迟</option><option value="0.2s" data-v-6f490436>0.2s</option><option value="0.5s" data-v-6f490436>0.5s</option><option value="1s" data-v-6f490436>1s</option><option value="2s" data-v-6f490436>2s</option>',5)])],512),[[h,g.value]])])):l("",!0),x("iterationCount")?(s(),n("div",ze,[t[14]||(t[14]=e("label",{class:"block text-sm text-gray-400 mb-2"},"播放次数",-1)),b(e("select",{"onUpdate:modelValue":t[3]||(t[3]=r=>v.value=r),class:"w-full px-3 py-2 rounded bg-gray-800 text-white"},[...t[13]||(t[13]=[F('<option value="1" data-v-6f490436>1次</option><option value="2" data-v-6f490436>2次</option><option value="3" data-v-6f490436>3次</option><option value="5" data-v-6f490436>5次</option><option value="infinite" data-v-6f490436>无限循环</option>',5)])],512),[[h,v.value]])])):l("",!0)]),e("div",Le,[e("h4",$e,o(_[a.value.type]),1),e("p",Ue,o(O[a.value.type]),1)])])):l("",!0),a.value?(s(),n("div",Te,[e("h3",Be,o(a.value.displayName),1),e("div",Re,[e("div",null,[t[16]||(t[16]=e("h4",{class:"text-sm font-medium text-gray-300 mb-2"},"描述",-1)),e("p",Ee,o(a.value.description),1)]),e("div",null,[t[17]||(t[17]=e("h4",{class:"text-sm font-medium text-gray-300 mb-2"},"使用场景",-1)),e("p",Ae,o(a.value.usage),1)]),e("div",null,[t[19]||(t[19]=e("h4",{class:"text-sm font-medium text-gray-300 mb-2"},"注意事项",-1)),e("ul",Ve,[(s(!0),n(u,null,m(a.value.notes,r=>(s(),n("li",{key:r,class:"flex items-start gap-2"},[t[18]||(t[18]=e("span",{class:"text-yellow-400 mt-1"},"•",-1)),e("span",null,o(r),1)]))),128))])]),e("div",{class:"flex gap-3 pt-4"},[e("button",{onClick:$,class:"px-4 py-2 bg-emerald-600 hover:bg-emerald-700 rounded transition-colors"}," 复制 CSS 代码 "),e("button",{onClick:U,class:"px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors"}," 复制 HTML 示例 ")])])])):l("",!0),a.value?(s(),n("div",je,[t[24]||(t[24]=e("h3",{class:"text-lg font-semibold mb-4 text-yellow-300"},"生成的 CSS 代码",-1)),e("pre",He,[e("code",null,o(I()),1)]),e("div",Me,[t[23]||(t[23]=e("h4",{class:"text-sm font-medium text-blue-300 mb-2"},"使用说明",-1)),e("div",Ge,[t[21]||(t[21]=e("p",null,"1. 复制上面的 CSS 代码到你的样式文件中",-1)),e("p",null,[t[20]||(t[20]=C("2. 给需要动画的元素添加对应的 class: ",-1)),e("code",We,o(a.value.className),1)]),t[22]||(t[22]=e("p",null,"3. 如果是出场动画，记得在动画结束后移除元素或设置 display: none",-1)),a.value.type==="attention"?(s(),n("p",Je,"4. 注意力动画通常配合 infinite 使用，但要适度")):l("",!0)])])])):l("",!0)])])]),(s(),V(B("style"),null,{default:R(()=>[C(o(a.value?a.value.keyframes:""),1)]),_:1}))]))}}),at=j(qe,[["__scopeId","data-v-6f490436"]]);export{at as default};
