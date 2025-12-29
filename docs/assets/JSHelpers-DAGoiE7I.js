import{E as s,I as h,O as u,R as f,_ as O,c as k,d as p,f as i,h as v,l as e,lt as l,o as m,st as y}from"./codemirror-B25QCqWr.js";import{d as A,f as M,p as D}from"./vendor-vue-C93_ecI2.js";import{t as P}from"./index-D7SmQqDE.js";var W={class:"min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"},B={class:"relative z-10 container mx-auto px-6 py-8"},J={class:"mb-6 flex flex-col sm:flex-row gap-4"},I={class:"flex-1"},L=["value"],H={class:"grid grid-cols-1 lg:grid-cols-3 gap-6"},N={class:"lg:col-span-1"},q={class:"bg-gray-900/70 border border-blue-500/30 rounded-xl p-5 max-h-[80vh] overflow-y-auto"},R={class:"text-lg font-semibold mb-4 text-blue-300"},U={key:0,class:"space-y-4"},V={class:"text-sm font-medium text-gray-300 border-b border-gray-700 pb-1"},$={class:"space-y-1"},T=["onClick"],F={class:"flex items-center justify-between"},G={key:1,class:"space-y-1"},z=["onClick"],Q={class:"flex items-center justify-between"},K={key:2,class:"text-center text-gray-400 py-8"},X={class:"lg:col-span-2"},Y={key:0,class:"bg-gray-900/70 border border-gray-600/30 rounded-xl p-8 text-center h-[80vh] flex flex-col justify-center"},Z={key:1,class:"h-[80vh] overflow-y-auto space-y-6 pr-2"},ee={class:"bg-gray-900/70 border border-blue-500/30 rounded-xl p-6"},te={class:"flex items-start justify-between mb-4"},ae={class:"text-2xl font-bold text-blue-300 mb-2"},re={class:"flex items-center gap-3 text-sm text-gray-400"},se={class:"px-2 py-1 bg-blue-600/20 text-blue-300 rounded"},ie={class:"text-gray-300 mb-4"},oe={key:0,class:"flex flex-wrap gap-2 mb-4"},le={class:"bg-gray-900/70 border border-purple-500/30 rounded-xl p-6"},ne={class:"bg-gray-800 rounded-lg p-4 overflow-x-auto"},de={class:"text-sm text-gray-300"},ce={key:0,class:"bg-gray-900/70 border border-green-500/30 rounded-xl p-6"},ue={class:"text-gray-300 whitespace-pre-line"},pe={key:1,class:"bg-gray-900/70 border border-yellow-500/30 rounded-xl p-6"},me={class:"text-gray-300"},ye={key:2,class:"bg-gray-900/70 border border-red-500/30 rounded-xl p-6"},ge={class:"text-gray-300 whitespace-pre-line"},be=O({__name:"JSHelpers",setup(fe){const g=f(""),c=f("all"),r=f(null),w={string:"String 字符串",array:"Array 数组",object:"Object 对象",number:"Number 数字",math:"Math 数学",date:"Date 日期",regexp:"RegExp 正则",json:"JSON",network:"Network 网络",encoding:"Encoding 编码",async:"Async 异步",syntax:"Syntax 语法",advanced:"Advanced 高级",symbol:"Symbol",proxy:"Proxy",reflect:"Reflect",generator:"Generator 生成器",type:"Type 类型",utility:"Utility 工具",dom:"DOM 操作",performance:"Performance 性能",observer:"Observer 观察者",browser:"Browser API",file:"File 文件",crypto:"Crypto 加密",intl:"Intl 国际化",error:"Error 错误"},E=f([{id:"string-includes",name:"String.includes",category:"string",description:"判断字符串是否包含指定的子字符串",example:`"hello world".includes("world") // true
"hello world".includes("World") // false (区分大小写)`,usage:"用于检查字符串中是否存在特定的子串，常用于搜索和过滤功能",compatibility:"ES6+，所有现代浏览器支持",difficulty:"easy",tags:["字符串","搜索","包含"]},{id:"string-startswith",name:"String.startsWith",category:"string",description:"判断字符串是否以指定字符串开头",example:`"JavaScript".startsWith("Java") // true
"JavaScript".startsWith("Script") // false`,usage:"常用于URL路径检查、文件扩展名验证等场景",compatibility:"ES6+，所有现代浏览器支持",difficulty:"easy",tags:["字符串","开头","验证"]},{id:"string-endswith",name:"String.endsWith",category:"string",description:"判断字符串是否以指定字符串结尾",example:`"image.jpg".endsWith(".jpg") // true
"document.pdf".endsWith(".jpg") // false`,usage:"常用于文件类型检查、URL后缀验证等",compatibility:"ES6+，所有现代浏览器支持",difficulty:"easy",tags:["字符串","结尾","文件类型"]},{id:"string-padstart",name:"String.padStart",category:"string",description:"在字符串开头填充指定字符到目标长度",example:`"42".padStart(5, "0") // "00042"
"5".padStart(3, "0") // "005"
"hello".padStart(8, "*") // "***hello"`,usage:"常用于数字格式化、时间显示、ID补零等场景",compatibility:"ES2017+，现代浏览器支持",difficulty:"easy",tags:["字符串","填充","格式化"]},{id:"string-padend",name:"String.padEnd",category:"string",description:"在字符串末尾填充指定字符到目标长度",example:`"42".padEnd(5, "0") // "42000"
"hello".padEnd(10, ".") // "hello....."`,usage:"常用于表格对齐、文本格式化等场景",compatibility:"ES2017+，现代浏览器支持",difficulty:"easy",tags:["字符串","填充","对齐"]},{id:"array-map",name:"Array.map",category:"array",description:"创建一个新数组，包含调用函数处理每个元素的结果",example:`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
// [2, 4, 6, 8]

const users = [{name: 'Alice'}, {name: 'Bob'}];
const names = users.map(user => user.name);
// ['Alice', 'Bob']`,usage:"用于数据转换，不修改原数组，返回新数组",compatibility:"ES5+，所有浏览器支持",difficulty:"easy",tags:["数组","转换","映射"]},{id:"array-filter",name:"Array.filter",category:"array",description:"创建一个新数组，包含通过测试函数的所有元素",example:`const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
// [2, 4]

const users = [{age: 18}, {age: 25}, {age: 16}];
const adults = users.filter(user => user.age >= 18);
// [{age: 18}, {age: 25}]`,usage:"用于数据过滤，根据条件筛选数组元素",compatibility:"ES5+，所有浏览器支持",difficulty:"easy",tags:["数组","过滤","筛选"]},{id:"array-reduce",name:"Array.reduce",category:"array",description:"对数组中的每个元素执行reducer函数，将其结果汇总为单个返回值",example:`// 求和
const sum = [1, 2, 3, 4].reduce((acc, cur) => acc + cur, 0);
// 10

// 计数
const fruits = ['apple', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// {apple: 2, banana: 1}`,usage:"用于数组聚合操作，如求和、计数、分组等",compatibility:"ES5+，所有浏览器支持",difficulty:"medium",tags:["数组","聚合","累计"]},{id:"array-find",name:"Array.find",category:"array",description:"返回数组中满足测试函数的第一个元素的值",example:`const users = [
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Bob'},
  {id: 3, name: 'Charlie'}
];

const user = users.find(u => u.id === 2);
// {id: 2, name: 'Bob'}

const notFound = users.find(u => u.id === 999);
// undefined`,usage:"用于查找数组中的特定元素，找到即返回，未找到返回undefined",compatibility:"ES6+，现代浏览器支持",difficulty:"easy",tags:["数组","查找","搜索"]},{id:"array-flat",name:"Array.flat",category:"array",description:"按照指定深度递归地将所有子数组连接，并返回一个新数组",example:`const nested = [1, [2, 3], [4, [5, 6]]];
nested.flat(); // [1, 2, 3, 4, [5, 6]]
nested.flat(2); // [1, 2, 3, 4, 5, 6]

const deep = [1, [2, [3, [4]]]];
deep.flat(Infinity); // [1, 2, 3, 4]`,usage:"用于扁平化嵌套数组，处理多维数组结构",compatibility:"ES2019+，现代浏览器支持",difficulty:"medium",tags:["数组","扁平化","嵌套"]},{id:"object-keys",name:"Object.keys",category:"object",description:"返回对象自身可枚举属性名组成的数组",example:`const obj = {a: 1, b: 2, c: 3};
Object.keys(obj); // ['a', 'b', 'c']

const arr = ['a', 'b', 'c'];
Object.keys(arr); // ['0', '1', '2']`,usage:"用于获取对象的所有属性名，常用于对象遍历",compatibility:"ES5+，所有浏览器支持",difficulty:"easy",tags:["对象","属性","遍历"]},{id:"object-entries",name:"Object.entries",category:"object",description:"返回对象自身可枚举属性的键值对数组",example:`const obj = {a: 1, b: 2, c: 3};
Object.entries(obj);
// [['a', 1], ['b', 2], ['c', 3]]

// 常用于 Map 构造
const map = new Map(Object.entries(obj));`,usage:"用于获取对象的键值对，方便遍历和转换",compatibility:"ES2017+，现代浏览器支持",difficulty:"easy",tags:["对象","键值对","转换"]},{id:"object-fromentries",name:"Object.fromEntries",category:"object",description:"将键值对列表转换为对象",example:`const entries = [['a', 1], ['b', 2], ['c', 3]];
Object.fromEntries(entries);
// {a: 1, b: 2, c: 3}

// 从 Map 创建对象
const map = new Map([['name', 'Alice'], ['age', 25]]);
Object.fromEntries(map);
// {name: 'Alice', age: 25}`,usage:"Object.entries的逆操作，用于从键值对创建对象",compatibility:"ES2019+，现代浏览器支持",difficulty:"easy",tags:["对象","创建","键值对"]},{id:"weakmap",name:"WeakMap",category:"advanced",description:"键必须是对象的弱引用键值对集合",example:`const wm = new WeakMap();
const obj = {};

wm.set(obj, 'some value');
wm.get(obj); // 'some value'
wm.has(obj); // true
wm.delete(obj); // true

// 对象被垃圾回收时，WeakMap中的条目也会被自动清除`,usage:"用于存储对象的私有数据，避免内存泄漏",compatibility:"ES6+，现代浏览器支持",difficulty:"hard",tags:["高级","弱引用","内存管理"]},{id:"proxy",name:"Proxy",category:"proxy",description:"用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）",example:`const target = {name: 'Alice'};
const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(\`Getting \${prop}\`);
    return obj[prop];
  },
  set(obj, prop, value) {
    console.log(\`Setting \${prop} = \${value}\`);
    obj[prop] = value;
    return true;
  }
});

proxy.name; // 输出: Getting name, 返回: 'Alice'
proxy.age = 25; // 输出: Setting age = 25`,usage:"用于创建对象代理，实现数据绑定、验证、日志等功能",compatibility:"ES6+，现代浏览器支持",difficulty:"hard",tags:["代理","拦截","元编程"]},{id:"queryselector",name:"document.querySelector",category:"dom",description:"返回文档中匹配指定CSS选择器的第一个元素",example:`// 选择第一个 .button 元素
const button = document.querySelector('.button');

// 选择 ID 为 main 的元素
const main = document.querySelector('#main');

// 选择第一个 data-id 属性的元素
const item = document.querySelector('[data-id]');`,usage:"用于选择DOM元素，比getElementById更灵活",compatibility:"所有现代浏览器支持",difficulty:"easy",tags:["DOM","选择器","元素"]},{id:"performance-now",name:"performance.now",category:"performance",description:"返回高精度时间戳，用于性能测量",example:`const start = performance.now();

// 执行一些操作
for (let i = 0; i < 1000000; i++) {
  // some work
}

const end = performance.now();
console.log(\`操作耗时: \${end - start} 毫秒\`);`,usage:"用于精确的性能测量和基准测试",compatibility:"现代浏览器支持",difficulty:"medium",tags:["性能","时间","测量"]},{id:"promise-all",name:"Promise.all",category:"async",description:"并发执行多个Promise，等待所有Promise完成",example:`const promises = [
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/comments')
];

Promise.all(promises)
  .then(responses => {
    // 所有请求都完成
    console.log('所有数据加载完成');
  })
  .catch(error => {
    // 任何一个请求失败都会触发
    console.error('有请求失败:', error);
  });`,usage:"用于并发执行多个异步操作，提高性能",compatibility:"ES6+，现代浏览器支持",difficulty:"medium",tags:["异步","并发","Promise"]}]),b=k(()=>{let o=E.value;if(c.value!=="all"&&(o=o.filter(t=>t.category===c.value)),g.value.trim()){const t=g.value.toLowerCase();o=o.filter(a=>a.name.toLowerCase().includes(t)||a.description.toLowerCase().includes(t)||a.category.toLowerCase().includes(t)||a.tags&&a.tags.some(n=>n.toLowerCase().includes(t)))}return o}),C=k(()=>{const o={};return b.value.forEach(t=>{o[t.category]||(o[t.category]=[]),o[t.category].push(t)}),o}),S=o=>{r.value=o},x=o=>{switch(o){case"easy":return"text-green-400";case"medium":return"text-yellow-400";case"hard":return"text-red-400";default:return"text-gray-400"}},_=o=>{switch(o){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return"未知"}};return(o,t)=>(s(),i("div",W,[t[10]||(t[10]=e("div",{class:"absolute inset-0 opacity-20"},[e("div",{class:"absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"}),e("div",{class:"absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"}),e("div",{class:"absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"})],-1)),e("div",B,[t[9]||(t[9]=e("h2",{class:"text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"}," JavaScript 实用工具集 ",-1)),e("div",J,[e("div",I,[h(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>g.value=a),type:"text",placeholder:"搜索方法名称、描述或分类...",class:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"},null,512),[[M,g.value]])]),h(e("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>c.value=a),class:"px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:border-blue-500 focus:outline-none"},[t[2]||(t[2]=e("option",{value:"all"},"全部分类",-1)),(s(),i(m,null,u(w,(a,n)=>e("option",{key:n,value:n},l(a),9,L)),64))],512),[[A,c.value]])]),e("div",H,[e("div",N,[e("div",q,[e("h3",R," 方法列表 ("+l(b.value.length)+") ",1),c.value==="all"?(s(),i("div",U,[(s(!0),i(m,null,u(C.value,(a,n)=>h((s(),i("div",{key:n,class:"space-y-2"},[e("h4",V,l(w[n]||n),1),e("div",$,[(s(!0),i(m,null,u(a,d=>{var j;return s(),i("button",{key:d.id,onClick:ve=>S(d),class:y(["w-full text-left px-3 py-2 rounded text-sm transition-colors",((j=r.value)==null?void 0:j.id)===d.id?"bg-blue-600/50 text-blue-200 border border-blue-500/50":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"])},[e("div",F,[e("span",null,l(d.name),1),e("span",{class:y([x(d.difficulty),"text-xs"])},l(_(d.difficulty)),3)])],10,T)}),128))])])),[[D,a.length>0]])),128))])):(s(),i("div",G,[(s(!0),i(m,null,u(b.value,a=>{var n;return s(),i("button",{key:a.id,onClick:d=>S(a),class:y(["w-full text-left px-3 py-2 rounded text-sm transition-colors",((n=r.value)==null?void 0:n.id)===a.id?"bg-blue-600/50 text-blue-200 border border-blue-500/50":"bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"])},[e("div",Q,[e("span",null,l(a.name),1),e("span",{class:y([x(a.difficulty),"text-xs"])},l(_(a.difficulty)),3)])],10,z)}),128))])),b.value.length===0?(s(),i("div",K,[...t[3]||(t[3]=[e("div",{class:"text-2xl mb-2"},"🔍",-1),e("div",null,"没有找到匹配的方法",-1)])])):p("",!0)])]),e("div",X,[r.value?(s(),i("div",Z,[e("div",ee,[e("div",te,[e("div",null,[e("h3",ae,l(r.value.name),1),e("div",re,[e("span",se,l(r.value.category),1),e("span",{class:y(x(r.value.difficulty))},l(_(r.value.difficulty)),3)])])]),e("p",ie,l(r.value.description),1),r.value.tags&&r.value.tags.length>0?(s(),i("div",oe,[(s(!0),i(m,null,u(r.value.tags,a=>(s(),i("span",{key:a,class:"px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"},l(a),1))),128))])):p("",!0)]),e("div",le,[t[5]||(t[5]=e("h4",{class:"text-lg font-semibold text-purple-300 mb-4 flex items-center"},[e("span",{class:"mr-2"},"💻"),v(" 代码示例 ")],-1)),e("div",ne,[e("pre",de,[e("code",null,l(r.value.example),1)])])]),r.value.usage?(s(),i("div",ce,[t[6]||(t[6]=e("h4",{class:"text-lg font-semibold text-green-300 mb-4 flex items-center"},[e("span",{class:"mr-2"},"📖"),v(" 使用说明 ")],-1)),e("div",ue,l(r.value.usage),1)])):p("",!0),r.value.compatibility?(s(),i("div",pe,[t[7]||(t[7]=e("h4",{class:"text-lg font-semibold text-yellow-300 mb-4 flex items-center"},[e("span",{class:"mr-2"},"🌐"),v(" 兼容性 ")],-1)),e("div",me,l(r.value.compatibility),1)])):p("",!0),r.value.notes?(s(),i("div",ye,[t[8]||(t[8]=e("h4",{class:"text-lg font-semibold text-red-300 mb-4 flex items-center"},[e("span",{class:"mr-2"},"⚠️"),v(" 注意事项 ")],-1)),e("div",ge,l(r.value.notes),1)])):p("",!0)])):(s(),i("div",Y,[...t[4]||(t[4]=[e("div",{class:"text-6xl mb-4"},"⚡",-1),e("h3",{class:"text-xl font-semibold text-gray-300 mb-2"},"选择一个JavaScript方法",-1),e("p",{class:"text-gray-400"},"从左侧列表中选择一个方法查看详细说明和代码示例",-1)])]))])])])]))}}),we=P(be,[["__scopeId","data-v-f9e7c52a"]]);export{we as default};
