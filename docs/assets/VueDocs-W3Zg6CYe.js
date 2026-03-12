import{E as r,I as x,O as d,R as g,_ as O,c as h,d as b,f as i,l as e,lt as n,o as m,st as c}from"./codemirror-B25QCqWr.js";import{d as M,f as H}from"./vendor-vue-C93_ecI2.js";import{t as L}from"./index-DaUox3LW.js";const P=[{id:"vue2-beforeCreate",name:"beforeCreate",category:"lifecycle",version:"vue2",description:"实例初始化之后，数据观测和事件配置之前被调用",syntax:"beforeCreate() { }",example:`export default {
  beforeCreate() {
    console.log('beforeCreate: 实例刚创建');
    // 此时data、methods等都不可用
    console.log(this.$data); // undefined
  }
}`,usage:"用于插件开发或全局配置",difficulty:"medium",tags:["生命周期","Vue2"],commonUse:!1},{id:"vue2-created",name:"created",category:"lifecycle",version:"vue2",description:"实例创建完成后被立即调用",syntax:"created() { }",example:`export default {
  data() {
    return { message: 'Hello' };
  },
  created() {
    console.log('created: 实例已创建');
    console.log(this.message); // 'Hello'
    // 可以访问data、computed、methods
    this.fetchData();
  },
  methods: {
    fetchData() {
      // 发起API请求
    }
  }
}`,usage:"数据初始化、API调用的最佳时机",difficulty:"easy",tags:["生命周期","Vue2","常用"],commonUse:!0},{id:"vue2-beforeMount",name:"beforeMount",category:"lifecycle",version:"vue2",description:"实例挂载之前被调用，相关的 render 函数首次被调用",syntax:"beforeMount() { }",example:`export default {
  beforeMount() {
    console.log('beforeMount: 即将挂载');
    // 此时$el还未创建
    console.log(this.$el); // undefined
  }
}`,usage:"可用于最后一次修改数据的机会，不会触发重新渲染",difficulty:"medium",tags:["生命周期","Vue2"],commonUse:!1},{id:"vue2-mounted",name:"mounted",category:"lifecycle",version:"vue2",description:"实例挂载完成后被调用，此时$el已存在",syntax:"mounted() { }",example:`export default {
  mounted() {
    console.log('mounted: 已挂载');
    console.log(this.$el); // DOM元素
    // 可执行DOM操作或第三方库初始化
    this.initChart();
  },
  methods: {
    initChart() {
      // 初始化图表库
    }
  }
}`,usage:"DOM操作、第三方库初始化、数据请求的常用时机",difficulty:"easy",tags:["生命周期","Vue2","常用"],commonUse:!0},{id:"vue2-beforeUpdate",name:"beforeUpdate",category:"lifecycle",version:"vue2",description:"数据更新时调用，发生在虚拟DOM打补丁之前",syntax:"beforeUpdate() { }",example:`export default {
  data() {
    return { count: 0 }
  },
  beforeUpdate() {
    console.log('beforeUpdate: 即将更新DOM');
    // 此时数据已更新，但DOM尚未更新
    console.log('数据:', this.count);
    console.log('DOM:', this.$el.textContent); // 旧值
  }
}`,usage:"可在更新前访问现有DOM状态",difficulty:"medium",tags:["生命周期","Vue2"],commonUse:!1},{id:"vue2-updated",name:"updated",category:"lifecycle",version:"vue2",description:"数据更新且DOM重新渲染完成后调用",syntax:"updated() { }",example:`export default {
  data() {
    return { count: 0 }
  },
  updated() {
    console.log('updated: DOM已更新');
    // 此时数据和DOM都已更新
    console.log('数据:', this.count);
    console.log('DOM:', this.$el.textContent); // 新值
    // 避免在此修改数据，可能导致无限循环
  }
}`,usage:"可执行基于更新后DOM的操作",difficulty:"medium",tags:["生命周期","Vue2"],commonUse:!1},{id:"vue2-beforeDestroy",name:"beforeDestroy",category:"lifecycle",version:"vue2",description:"实例销毁之前调用，此时实例仍完全可用",syntax:"beforeDestroy() { }",example:`export default {
  data() {
    return { timer: null }
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log('运行中...');
    }, 1000);
  },
  beforeDestroy() {
    console.log('beforeDestroy: 即将销毁');
    // 清除定时器、事件监听等
    clearInterval(this.timer);
  }
}`,usage:"清除定时器、解绑事件、取消订阅等清理工作",difficulty:"medium",tags:["生命周期","Vue2","常用"],commonUse:!0},{id:"vue2-destroyed",name:"destroyed",category:"lifecycle",version:"vue2",description:"实例销毁后调用，所有指令和事件监听器已解绑",syntax:"destroyed() { }",example:`export default {
  destroyed() {
    console.log('destroyed: 已销毁');
    // 此时实例所有属性已解绑，无法访问
    console.log(this.$el); // 仍存在但已脱离Vue控制
  }
}`,usage:"最终清理工作，如释放内存",difficulty:"medium",tags:["生命周期","Vue2"],commonUse:!1},{id:"vue2-v-if",name:"v-if",category:"directives",version:"vue2",description:"根据表达式的值的真假条件渲染元素，条件为假时会移除元素",syntax:'v-if="condition"',example:`<template>
  <div>
    <p v-if="isShow">显示内容</p>
    <p v-else-if="isLoading">加载中...</p>
    <p v-else>隐藏内容</p>
    <button @click="isShow = !isShow">切换</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      isLoading: false
    }
  }
}
<\/script>`,usage:"条件性渲染元素，适合切换频率不高的场景",difficulty:"easy",tags:["指令","Vue2","模板","常用"],commonUse:!0},{id:"vue2-v-show",name:"v-show",category:"directives",version:"vue2",description:"根据表达式的值的真假条件显示元素，条件为假时会设置display: none",syntax:'v-show="condition"',example:`<template>
  <div>
    <p v-show="isVisible">始终存在于DOM中</p>
    <button @click="isVisible = !isVisible">切换显示</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    }
  }
}
<\/script>`,usage:"频繁切换显示状态的场景，性能优于v-if",notes:"不支持<template>标签，也不支持v-else",difficulty:"easy",tags:["指令","Vue2","模板","常用"],commonUse:!0},{id:"vue2-v-for",name:"v-for",category:"directives",version:"vue2",description:"基于源数据多次渲染元素或模板块",syntax:'v-for="(item, index) in items" :key="uniqueKey"',example:`<template>
  <div>
    <!-- 遍历数组 -->
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        {{ index }}: {{ item.name }}
      </li>
    </ul>

    <!-- 遍历对象 -->
    <div v-for="(value, key, index) in user" :key="key">
      {{ index }}. {{ key }}: {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'Vue' },
        { id: 2, name: 'React' }
      ],
      user: { name: 'John', age: 30 }
    }
  }
}
<\/script>`,usage:"列表渲染，必须使用:key提高性能和避免错误",notes:"key值应唯一且稳定，避免使用index作为key（尤其在列表有增删时）",difficulty:"easy",tags:["指令","Vue2","模板","常用"],commonUse:!0},{id:"vue2-v-bind",name:"v-bind",category:"directives",version:"vue2",description:"动态地绑定一个或多个特性，或一个组件prop到表达式",syntax:'v-bind:attribute="value" 或 :attribute="value"',example:`<template>
  <div>
    <!-- 绑定属性 -->
    <img :src="imageUrl" :alt="imageAlt">
    
    <!-- 绑定class -->
    <div :class="{ active: isActive, 'text-danger': hasError }"></div>
    <div :class="[activeClass, errorClass]"></div>
    
    <!-- 绑定style -->
    <div :style="{ color: textColor, fontSize: fontSize + 'px' }"></div>
    <div :style="[baseStyles, overrideStyles]"></div>
    
    <!-- 绑定prop -->
    <child-component :user="currentUser"></child-component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'logo.png',
      imageAlt: 'Logo',
      isActive: true,
      hasError: false,
      activeClass: 'active',
      errorClass: 'text-danger',
      textColor: 'red',
      fontSize: 16,
      baseStyles: { color: 'blue' },
      overrideStyles: { fontSize: '20px' },
      currentUser: { name: 'John' }
    }
  }
}
<\/script>`,usage:"动态绑定属性、class、style、组件prop等",difficulty:"easy",tags:["指令","Vue2","模板","常用"],commonUse:!0},{id:"vue2-v-on",name:"v-on",category:"directives",version:"vue2",description:"绑定事件监听器，可简写为@",syntax:'v-on:event="handler" 或 @event="handler"',example:`<template>
  <div>
    <!-- 基本用法 -->
    <button @click="handleClick">点击我</button>
    
    <!-- 传递参数 -->
    <button @click="handleAdd(2, $event)">加2</button>
    
    <!-- 事件修饰符 -->
    <form @submit.prevent="handleSubmit">
      <button type="submit">提交</button>
    </form>
    <div @click.stop="handleDivClick">
      <button @click="handleBtnClick">阻止冒泡</button>
    </div>
    
    <!-- 按键修饰符 -->
    <input @keyup.enter="handleEnter">
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('点击事件');
    },
    handleAdd(num, e) {
      console.log('加', num);
      console.log('事件对象', e);
    },
    handleSubmit() {
      console.log('提交表单');
    },
    handleDivClick() {
      console.log('div点击');
    },
    handleBtnClick() {
      console.log('按钮点击');
    },
    handleEnter() {
      console.log('按下回车');
    }
  }
}
<\/script>`,usage:"绑定DOM事件或组件自定义事件",notes:"常用修饰符: .stop .prevent .capture .self .once .passive",difficulty:"easy",tags:["指令","Vue2","事件","常用"],commonUse:!0},{id:"vue2-v-model",name:"v-model",category:"directives",version:"vue2",description:"在表单控件或组件上创建双向数据绑定",syntax:'v-model="variable"',example:`<template>
  <div>
    <!-- 文本输入 -->
    <input v-model="message" placeholder="输入文本">
    <p>消息: {{ message }}</p>
    
    <!-- 复选框 -->
    <input type="checkbox" v-model="isChecked">
    <p>是否选中: {{ isChecked }}</p>
    
    <!-- 单选按钮 -->
    <input type="radio" v-model="selected" value="A"> A
    <input type="radio" v-model="selected" value="B"> B
    <p>选中: {{ selected }}</p>
    
    <!-- 下拉框 -->
    <select v-model="selectedOption">
      <option value="">请选择</option>
      <option value="vue">Vue</option>
      <option value="react">React</option>
    </select>
    <p>选择: {{ selectedOption }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      isChecked: false,
      selected: '',
      selectedOption: ''
    }
  }
}
<\/script>`,usage:"表单数据双向绑定，简化表单处理",notes:"在组件上使用时需要通过props和$emit实现",difficulty:"easy",tags:["指令","Vue2","表单","常用"],commonUse:!0},{id:"vue2-v-text",name:"v-text",category:"directives",version:"vue2",description:"更新元素的文本内容，等价于Mustache插值，不会解析HTML",syntax:'v-text="expression"',example:`<template>
  <div>
    <p v-text="message"></p>
    <!-- 等价于 <p>{{ message }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return { message: 'Hello Vue' }
  }
}
<\/script>`,usage:"避免页面加载时闪现未编译的{{}}模板",notes:"无法解析HTML字符串，需解析HTML用v-html",difficulty:"easy",tags:["指令","Vue2","模板"],commonUse:!1},{id:"vue2-v-html",name:"v-html",category:"directives",version:"vue2",description:"更新元素的innerHTML，会解析HTML字符串",syntax:'v-html="htmlString"',example:`<template>
  <div v-html="rawHtml"></div>
</template>

<script>
export default {
  data() {
    return {
      rawHtml: '<p style="color: red;">这是HTML内容</p>'
    }
  }
}
<\/script>`,usage:"渲染包含HTML的动态内容",notes:"有XSS风险，禁止用于用户提交的内容；会覆盖子元素",difficulty:"easy",tags:["指令","Vue2","模板"],commonUse:!1},{id:"vue2-v-pre",name:"v-pre",category:"directives",version:"vue2",description:"跳过元素及子元素的编译，直接显示原始内容",syntax:"v-pre",example:`<template>
  <div>
    <p v-pre>{{ 不会被编译的Mustache }}</p>
    <p>{{ 会被编译的内容 }}</p>
  </div>
</template>`,usage:"显示包含{{}}的原始文本，或优化不需要编译的静态内容",difficulty:"easy",tags:["指令","Vue2","模板"],commonUse:!1},{id:"vue2-v-cloak",name:"v-cloak",category:"directives",version:"vue2",description:"在Vue实例编译完成前隐藏元素，编译后自动移除",syntax:"v-cloak",example:`<style>
/* 配合CSS使用 */
[v-cloak] { display: none; }
</style>

<template>
  <div v-cloak>{{ 编译完成后才显示 }}</div>
</template>`,usage:"解决页面加载时{{}}模板闪现的问题",notes:"需配合CSS隐藏样式使用，编译完成后v-cloak属性会被移除",difficulty:"easy",tags:["指令","Vue2","模板"],commonUse:!1},{id:"vue2-v-once",name:"v-once",category:"directives",version:"vue2",description:"只渲染元素/组件一次，之后不再更新",syntax:"v-once",example:`<template>
  <div>
    <p v-once>初始值: {{ count }}</p>
    <p>实时值: {{ count }}</p>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  data() { return { count: 0 } }
}
<\/script>`,usage:"优化静态内容渲染性能，避免不必要的更新",notes:"子元素也会被视为静态内容，无法再响应数据变化",difficulty:"easy",tags:["指令","Vue2","模板"],commonUse:!1},{id:"vue2-props-emit",name:"props/$emit",category:"communication",version:"vue2",description:"父子组件通信的主要方式，props用于父传子，$emit用于子传父",syntax:'// 父传子: <child :prop-name="value"> // 子传父: this.$emit("event-name", data)',example:`// 子组件 Child.vue
<template>
  <div>
    <p>父组件传递的值: {{ parentMsg }}</p>
    <button @click="sendToParent">向父组件发送消息</button>
  </div>
</template>

<script>
export default {
  // 声明接收的props
  props: {
    parentMsg: {
      type: String,
      required: true,
      default: '默认值'
    }
  },
  methods: {
    sendToParent() {
      // 向父组件触发事件并传递数据
      this.$emit('child-event', '来自子组件的消息');
    }
  }
}
<\/script>

// 父组件 Parent.vue
<template>
  <div>
    <child-component 
      :parent-msg="message" 
      @child-event="handleChildEvent"
    ></child-component>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  data() {
    return {
      message: '来自父组件的消息'
    }
  },
  methods: {
    handleChildEvent(data) {
      console.log('收到子组件消息:', data);
    }
  }
}
<\/script>`,usage:"最基础的父子组件通信方式，适用大部分场景",notes:"props是单向数据流，子组件不应直接修改props，应通过$emit通知父组件修改",difficulty:"easy",tags:["组件通信","Vue2","父子组件","常用"],commonUse:!0},{id:"vue2-event-bus",name:"Event Bus",category:"communication",version:"vue2",description:"通过创建一个空的Vue实例作为事件总线，实现任意组件间通信",syntax:'// 创建: const bus = new Vue() // 发送: bus.$emit("event", data) // 接收: bus.$on("event", callback)',example:`// bus.js
import Vue from 'vue';
export default new Vue();

// 组件A (发送方)
<template>
  <button @click="sendMessage">发送消息</button>
</template>

<script>
import bus from './bus.js';
export default {
  methods: {
    sendMessage() {
      // 发送事件
      bus.$emit('message-sent', 'Hello from Component A');
    }
  }
}
<\/script>

// 组件B (接收方)
<template>
  <div>收到的消息: {{ message }}</div>
</template>

<script>
import bus from './bus.js';
export default {
  data() {
    return { message: '' }
  },
  mounted() {
    // 监听事件
    this.eventHandler = (data) => {
      this.message = data;
    };
    bus.$on('message-sent', this.eventHandler);
  },
  beforeDestroy() {
    // 移除监听，避免内存泄漏
    bus.$off('message-sent', this.eventHandler);
  }
}
<\/script>`,usage:"非父子组件、跨层级组件间的简单通信",notes:"复杂应用建议使用Vuex，使用后需在组件销毁时移除事件监听",difficulty:"medium",tags:["组件通信","Vue2","跨组件"],commonUse:!0},{id:"vue2-vuex",name:"Vuex",category:"communication",version:"vue2",description:"Vue的状态管理模式，集中管理应用的所有组件的状态",syntax:"// 核心概念: state, mutations, actions, getters, modules",example:`// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // 状态
  state: {
    count: 0,
    user: null
  },
  
  // 获取器
  getters: {
    doubleCount: state => state.count * 2,
    isLoggedIn: state => !!state.user
  },
  
  // 突变 (同步)
  mutations: {
    increment(state) {
      state.count++;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  
  // 动作 (异步)
  actions: {
    fetchUser({ commit }) {
      return new Promise(resolve => {
        // 模拟API请求
        setTimeout(() => {
          const user = { id: 1, name: 'John' };
          commit('setUser', user); // 提交mutation
          resolve(user);
        }, 1000);
      });
    }
  }
});

// 在组件中使用
<template>
  <div>
    <p>Count: {{ $store.state.count }}</p>
    <p>Double: {{ $store.getters.doubleCount }}</p>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="loadUser">加载用户</button>
  </div>
</template>

<script>
export default {
  methods: {
    async loadUser() {
      await this.$store.dispatch('fetchUser');
      console.log('用户:', this.$store.state.user);
    }
  }
}
<\/script>`,usage:"中大型应用的状态管理，多组件共享数据",notes:"Vue2对应Vuex 3版本，Vue3使用Pinia",difficulty:"medium",tags:["状态管理","Vue2","Vuex","常用"],commonUse:!0},{id:"vue2-parent-children",name:"$parent / $children",category:"communication",version:"vue2",description:"通过实例属性直接访问父/子组件实例",syntax:"// 子访问父: this.$parent // 父访问子: this.$children",example:`// 父组件 Parent.vue
<template>
  <child-component></child-component>
</template>

<script>
import Child from './Child.vue';
export default {
  components: { Child },
  data() { return { parentMsg: '父组件数据' } },
  methods: { parentMethod() { console.log('父组件方法') } }
}
<\/script>

// 子组件 Child.vue
<template>
  <button @click="accessParent">访问父组件</button>
</template>

<script>
export default {
  methods: {
    accessParent() {
      console.log(this.$parent.parentMsg); // 访问父组件数据
      this.$parent.parentMethod(); // 调用父组件方法
      console.log(this.$parent.$children); // 父组件的子组件列表
    }
  }
}
<\/script>`,usage:"简单场景下快速访问父子组件（不推荐复杂场景）",notes:"耦合度高，易导致组件依赖混乱；$children是无序数组，不保证顺序",difficulty:"medium",tags:["组件通信","Vue2","父子组件"],commonUse:!1},{id:"vue2-refs",name:"$refs",category:"communication",version:"vue2",description:"通过ref属性获取DOM元素或组件实例的引用",syntax:'// 定义: <element ref="name"> // 访问: this.$refs.name',example:`<template>
  <div>
    <!-- 绑定DOM元素 -->
    <input ref="usernameInput" type="text">
    
    <!-- 绑定组件 -->
    <child-component ref="childComp"></child-component>
    
    <button @click="handleRefs">操作refs</button>
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: { Child },
  methods: {
    handleRefs() {
      // 操作DOM元素
      this.$refs.usernameInput.focus();
      
      // 调用子组件方法
      this.$refs.childComp.childMethod();
      
      // 访问子组件数据
      console.log(this.$refs.childComp.childData);
    }
  }
}
<\/script>`,usage:"直接操作DOM或子组件实例（需在mounted后访问）",notes:"非响应式，更新数据不会自动同步；避免在模板或计算属性中使用",difficulty:"easy",tags:["组件通信","Vue2","DOM操作","常用"],commonUse:!0},{id:"vue2-provide-inject",name:"provide / inject",category:"communication",version:"vue2",description:"跨层级组件通信，父组件提供数据，深层子组件注入使用",syntax:"// 提供: provide() { return { key: value } } // 注入: inject: [key] 或 inject: { key: { default } }",example:`// 祖先组件 Ancestor.vue
<script>
export default {
  provide() {
    return {
      theme: 'dark',
      setTheme: (val) => { this.theme = val } // 提供方法
    }
  },
  data() { return { theme: 'dark' } }
}
<\/script>

// 深层子组件 DeepChild.vue
<template>
  <div>
    <p>当前主题: {{ theme }}</p>
    <button @click="setTheme('light')">切换主题</button>
  </div>
</template>

<script>
export default {
  inject: ['theme', 'setTheme'], // 注入祖先提供的数据
}
<\/script>`,usage:"高阶组件/组件库中跨多层级共享数据（如主题、权限）",notes:"非响应式（需配合Vue.observable实现响应式）；不推荐用于应用业务代码",difficulty:"medium",tags:["组件通信","Vue2","跨层级"],commonUse:!1},{id:"vue2-computed",name:"computed",category:"core",version:"vue2",description:"计算属性，基于依赖进行缓存的派生属性",syntax:"computed: { property() { return value } }",example:`<template>
  <div>
    <p>原始消息: {{ message }}</p>
    <p>反转消息: {{ reversedMessage }}</p>
    <p>消息长度: {{ messageLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue'
    }
  },
  computed: {
    // 计算属性的getter
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    messageLength() {
      return this.message.length;
    }
  }
}
<\/script>`,usage:"处理复杂逻辑、基于现有数据派生新数据",notes:"相比methods，计算属性会基于依赖缓存，只有依赖变化时才会重新计算",difficulty:"easy",tags:["计算属性","Vue2","常用"],commonUse:!0},{id:"vue2-watch",name:"watch",category:"core",version:"vue2",description:"观察和响应Vue实例上的数据变动",syntax:"watch: { property(newVal, oldVal) { } }",example:`<template>
  <div>
    <input v-model="searchQuery">
    <p>结果: {{ searchResult }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchResult: []
    }
  },
  watch: {
    // 监听searchQuery变化
    searchQuery(newVal, oldVal) {
      // 防抖处理
      clearTimeout(this.searchTimer);
      this.searchTimer = setTimeout(() => {
        this.fetchSearchResults(newVal);
      }, 500);
    }
  },
  methods: {
    fetchSearchResults(query) {
      // 模拟API请求
      console.log('搜索:', query);
      this.searchResult = ['结果1', '结果2'];
    }
  }
}
<\/script>`,usage:"数据变化时执行异步或开销较大的操作",notes:"简单场景优先使用computed，复杂异步场景使用watch",difficulty:"medium",tags:["监听器","Vue2","常用"],commonUse:!0},{id:"vue2-filters",name:"filters",category:"core",version:"vue2",description:"用于文本格式化的过滤器，可在模板中使用",syntax:"// 定义: filters: { filterName(value) { return formattedValue } } // 使用: {{ value | filterName }}",example:`<template>
  <div>
    <p>原始价格: {{ price }}</p>
    <p>格式化价格: {{ price | currency('￥') }}</p>
    <p>日期格式化: {{ date | formatDate }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 199.9,
      date: new Date()
    }
  },
  filters: {
    // 价格格式化
    currency(value, symbol = '$') {
      return symbol + value.toFixed(2);
    },
    // 日期格式化
    formatDate(value) {
      const date = new Date(value);
      return \`\${date.getFullYear()}-\${date.getMonth()+1}-\${date.getDate()}\`;
    }
  }
}
<\/script>`,usage:"文本格式化，如日期、货币、大小写转换等",notes:"Vue3中已移除过滤器，建议使用计算属性或方法替代",difficulty:"easy",tags:["过滤器","Vue2"],commonUse:!0},{id:"vue2-methods",name:"methods",category:"core",version:"vue2",description:"组件的方法集合，用于定义业务逻辑和事件处理函数",syntax:"methods: { methodName(parameters) { // 逻辑 } }",example:`<template>
  <div>
    <p>计数: {{ count }}</p>
    <button @click="increment(2)">+2</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  data() { return { count: 0 } },
  methods: {
    increment(step) {
      this.count += step;
      this.logChange(); // 调用其他方法
    },
    reset() {
      this.count = 0;
    },
    logChange() {
      console.log('计数已更新:', this.count);
    }
  }
}
<\/script>`,usage:"定义事件处理、数据操作等业务逻辑",notes:"每次渲染都会创建新函数；与computed的区别：无缓存，调用时执行",difficulty:"easy",tags:["核心特性","Vue2","方法","常用"],commonUse:!0},{id:"vue2-data",name:"data",category:"core",version:"vue2",description:"组件的数据对象，存储响应式数据",syntax:"data() { return { key: value } }",example:`<script>
// 组件中（必须是函数，避免数据共享）
export default {
  data() {
    return {
      message: 'Hello',
      user: { name: 'Vue' },
      list: [1, 2, 3]
    }
  }
}

// 根实例中（可直接是对象）
new Vue({
  el: '#app',
  data: {
    rootData: '根实例数据'
  }
})
<\/script>`,usage:"存储组件的响应式状态，驱动视图更新",notes:"组件中必须是返回对象的函数（避免多个实例共享数据）；对象属性需提前声明才能响应式",difficulty:"easy",tags:["核心特性","Vue2","数据","常用"],commonUse:!0},{id:"vue2-props-detail",name:"props 详细验证",category:"core",version:"vue2",description:"子组件接收父组件数据的详细配置，包括类型、验证、默认值等",syntax:"props: { propName: { type, required, default, validator } }",example:`<script>
export default {
  props: {
    // 基础类型检查
    age: Number,
    
    // 多个可能的类型
    id: [String, Number],
    
    // 必填项检查
    name: {
      type: String,
      required: true
    },
    
    // 带默认值的基础类型
    size: {
      type: String,
      default: 'medium'
    },
    
    // 带默认值的对象/数组（必须用工厂函数）
    user: {
      type: Object,
      default: () => ({ name: '默认用户' })
    },
    
    // 自定义验证函数
    score: {
      type: Number,
      validator: (value) => {
        return value >= 0 && value <= 100;
      }
    }
  }
}
<\/script>`,usage:"规范父组件传递给子组件的数据格式和有效性",notes:"type可选值：String/Number/Boolean/Array/Object/Date/Function/Symbol；默认值为对象/数组时必须用工厂函数",difficulty:"medium",tags:["核心特性","Vue2","组件","常用"],commonUse:!0},{id:"vue2-mixins",name:"mixins",category:"core",version:"vue2",description:"可复用的组件选项集合，用于抽离共享逻辑",syntax:"// 定义: const myMixin = { ... } // 使用: mixins: [myMixin]",example:`// 定义混入 mixin.js
export const logMixin = {
  data() {
    return { logCount: 0 }
  },
  methods: {
    log(message) {
      console.log('[LOG]:', message);
      this.logCount++;
    }
  },
  mounted() {
    this.log('组件已挂载');
  }
}

// 使用混入的组件
<script>
import { logMixin } from './mixin.js';
export default {
  mixins: [logMixin], // 混入
  mounted() {
    this.log('组件自定义挂载逻辑'); // 调用混入的方法
  }
}
<\/script>`,usage:"抽离多个组件共享的逻辑（如日志、权限检查）",notes:"合并规则：data浅合并（组件优先）、钩子函数数组化（混入先执行）、methods/computed同名组件覆盖混入",difficulty:"medium",tags:["核心特性","Vue2","复用"],commonUse:!1},{id:"vue2-keep-alive",name:"keep-alive",category:"core",version:"vue2",description:"缓存包裹的组件实例，避免重复创建和销毁",syntax:'<keep-alive> <component :is="currentComp"></component> </keep-alive>',example:`<template>
  <div>
    <button @click="currentComp = 'CompA'">组件A</button>
    <button @click="currentComp = 'CompB'">组件B</button>
    
    <keep-alive>
      <!-- 缓存动态组件 -->
      <component :is="currentComp"></component>
    </keep-alive>
  </div>
</template>

<script>
import CompA from './CompA.vue';
import CompB from './CompB.vue';
export default {
  components: { CompA, CompB },
  data() { return { currentComp: 'CompA' } }
}
<\/script>

// CompA.vue（被缓存的组件）
<script>
export default {
  data() { return { count: 0 } },
  // 缓存相关钩子
  activated() { console.log('CompA 被激活') },
  deactivated() { console.log('CompA 被缓存') }
}
<\/script>`,usage:"缓存动态组件或路由组件，保留组件状态（如表单输入、滚动位置）",notes:"包裹的组件会触发activated/deactivated钩子；可通过include/exclude属性指定缓存/排除的组件",difficulty:"medium",tags:["核心特性","Vue2","性能","常用"],commonUse:!0},{id:"vue2-dynamic-component",name:"动态组件",category:"core",version:"vue2",description:"通过:is属性动态切换不同的组件",syntax:'<component :is="componentName"></component>',example:`<template>
  <div>
    <button @click="currentComponent = 'Home'">首页</button>
    <button @click="currentComponent = 'About'">关于</button>
    
    <!-- 动态渲染组件 -->
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
export default {
  components: { Home, About },
  data() { return { currentComponent: 'Home' } }
}
<\/script>`,usage:"在同一个位置动态切换不同组件（如标签页、导航内容）",notes:":is的值可以是组件名称字符串、组件选项对象或组件构造器；配合keep-alive缓存状态",difficulty:"easy",tags:["核心特性","Vue2","组件","常用"],commonUse:!0},{id:"vue2-async-component",name:"异步组件",category:"core",version:"vue2",description:"按需加载组件，优化初始加载性能",syntax:"() => import('./Component.vue') 或 () => Promise",example:`<script>
// 基础用法
export default {
  components: {
    // 异步加载组件（打包时会分割为单独的chunk）
    LargeComponent: () => import('./LargeComponent.vue')
  }
}

// 高级用法（加载状态处理）
const AsyncComponent = () => ({
  // 加载组件
  component: import('./AsyncComponent.vue'),
  // 加载中显示的组件
  loading: LoadingComponent,
  // 加载失败显示的组件
  error: ErrorComponent,
  // 延迟显示加载组件（默认200ms）
  delay: 100,
  // 超时时间（默认Infinity）
  timeout: 3000
})

export default {
  components: { AsyncComponent }
}
<\/script>`,usage:"加载大型组件或路由组件时，减少初始包体积",notes:"依赖webpack的代码分割功能；Vue Router中常用此方式加载路由组件",difficulty:"medium",tags:["核心特性","Vue2","性能","常用"],commonUse:!0},{id:"vue2-transition",name:"transition / transition-group",category:"core",version:"vue2",description:"为元素/组件的进入/离开提供过渡动画",syntax:'<transition name="fade"> <element v-if="show"></element> </transition>',example:`<template>
  <div>
    <button @click="show = !show">切换</button>
    
    <!-- 单个元素过渡 -->
    <transition name="fade">
      <p v-if="show">带过渡的内容</p>
    </transition>
    
    <!-- 列表过渡 -->
    <transition-group name="list" tag="ul">
      <li v-for="item in items" :key="item.id" @click="remove(item)">
        {{ item.text }}
      </li>
    </transition-group>
  </div>
</template>

<style>
/* 进入/离开过渡的类名（name前缀） */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* 列表过渡 */
.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<script>
export default {
  data() {
    return {
      show: true,
      items: [{ id: 1, text: '项目1' }, { id: 2, text: '项目2' }]
    }
  },
  methods: {
    remove(item) {
      this.items = this.items.filter(i => i.id !== item.id);
    }
  }
}
<\/script>`,usage:"为条件渲染（v-if）、动态组件、路由切换等添加过渡动画",notes:"transition用于单个元素/组件，transition-group用于列表；支持CSS过渡/动画和JS钩子",difficulty:"medium",tags:["核心特性","Vue2","动画","常用"],commonUse:!0},{id:"vue2-slots",name:"slots",category:"slots",version:"vue2",description:"组件内容分发API，允许在组件内部放置内容",syntax:"// 组件内: <slot></slot> // 使用时: <component>内容</component>",example:`// 子组件 SlotComponent.vue
<template>
  <div class="card">
    <div class="card-header">
      <!-- 具名插槽 -->
      <slot name="header">默认标题</slot>
    </div>
    <div class="card-body">
      <!-- 默认插槽 -->
      <slot></slot>
    </div>
    <div class="card-footer">
      <!-- 作用域插槽 -->
      <slot name="footer" :user="user" :time="currentTime">
        默认底部
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: 'John' },
      currentTime: new Date().toLocaleTimeString()
    }
  }
}
<\/script>

// 使用组件
<template>
  <slot-component>
    <!-- 具名插槽内容 -->
    <template slot="header">
      <h2>自定义标题</h2>
    </template>
    
    <!-- 默认插槽内容 -->
    <p>这是卡片的主体内容</p>
    <ul>
      <li>列表项1</li>
      <li>列表项2</li>
    </ul>
    
    <!-- 作用域插槽内容 -->
    <template slot="footer" slot-scope="slotProps">
      <p>用户: {{ slotProps.user.name }}</p>
      <p>时间: {{ slotProps.time }}</p>
    </template>
  </slot-component>
</template>`,usage:"组件内容定制化，提高组件复用性和灵活性",notes:"Vue2.6+推荐使用v-slot语法，替代slot和slot-scope属性",difficulty:"medium",tags:["插槽","Vue2","组件","常用"],commonUse:!0},{id:"vue2-v-slot",name:"v-slot 语法",category:"slots",version:"vue2",description:"Vue2.6+推荐的插槽语法，替代slot和slot-scope属性",syntax:'// 具名插槽: <template v-slot:name> // 作用域插槽: <template v-slot:name="props">',example:`<template>
  <slot-component>
    <!-- 具名插槽（v-slot:可简写为#） -->
    <template #header>
      <h2>v-slot标题</h2>
    </template>
    
    <!-- 默认插槽 -->
    <template v-slot:default>
      <p>默认内容</p>
    </template>
    
    <!-- 作用域插槽 -->
    <template #footer="slotProps">
      <p>用户: {{ slotProps.user.name }}</p>
    </template>
  </slot-component>
</template>`,usage:"更清晰的插槽语法，提高可读性",notes:"v-slot只能用于<template>或组件标签上；#是v-slot:的简写",difficulty:"medium",tags:["插槽","Vue2","组件","常用"],commonUse:!0},{id:"vue2-vue-router",name:"vue-router 基础",category:"router",version:"vue2",description:"Vue2官方路由库，用于实现单页应用的路由管理",syntax:"// 路由配置、<router-link>、<router-view>、$router、$route",example:`// 1. 安装: npm install vue-router@3（Vue2对应v3版本）

// 2. 路由配置 router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  // 动态路由
  { path: '/user/:id', component: () => import('../views/User.vue') }
];

const router = new VueRouter({
  mode: 'history', // 去掉URL中的#
  routes
});

export default router;

// 3. 入口文件 main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
  router, // 注入路由
  render: h => h(App)
}).$mount('#app');

// 4. 组件中使用
<template>
  <div>
    <!-- 导航链接 -->
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="{ path: '/user/123' }">用户123</router-link>
    
    <!-- 路由出口（匹配的组件显示在这里） -->
    <router-view></router-view>
  </div>
</template>

// 5. 路由信息访问（User.vue）
<script>
export default {
  mounted() {
    console.log(this.$route.params.id); // 获取动态参数
    this.$router.push('/about'); // 编程式导航
  }
}
<\/script>`,usage:"实现单页应用的页面跳转、参数传递、路由守卫等",notes:'Vue2对应vue-router@3，Vue3对应vue-router@4；mode: "history"需后端配合配置',difficulty:"medium",tags:["路由","Vue2","vue-router","常用"],commonUse:!0}];var T={class:"h-screen bg-gray-900 text-white flex flex-col"},j={class:"flex-1 overflow-hidden"},I={class:"max-w-7xl mx-auto h-full p-6"},B={class:"grid grid-cols-1 lg:grid-cols-3 gap-6 h-full"},R={class:"lg:col-span-1 h-full"},N={class:"bg-gray-800/50 rounded-lg h-full flex flex-col"},E={class:"flex-shrink-0 p-4 border-b border-gray-700"},q={class:"mb-4"},z={class:"mb-4"},J=["value"],Q={class:"overflow-y-auto p-4 custom-scrollbar",style:{height:"calc(100vh - 241px - 120px)"}},F={class:"space-y-4"},Y={class:"text-lg font-semibold text-blue-400 mb-3 border-b border-gray-700 pb-2 sticky top-0 bg-gray-800/80 backdrop-blur-sm"},G={class:"space-y-2"},K=["onClick"],X={class:"flex items-center justify-between mb-1"},W={class:"font-medium"},Z={class:"flex items-center space-x-2"},ee={class:"text-sm text-gray-400 line-clamp-2"},te={class:"flex items-center mt-2"},oe={class:"flex flex-wrap gap-1"},se={key:0,class:"ml-auto text-xs text-green-400"},ae={class:"lg:col-span-2 h-full overflow-auto"},re={key:0,class:"bg-gray-800/50 rounded-lg h-full flex flex-col"},ie={class:"flex-shrink-0 p-6 border-b border-gray-700"},ne={class:"flex items-center justify-between mb-2"},le={class:"text-2xl font-bold text-white"},ue={class:"flex items-center space-x-3"},de={key:0,class:"px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm font-medium"},me={class:"text-gray-300 text-lg"},ce={class:"flex-1 min-h-100 overflow-y-auto p-6 custom-scrollbar"},pe={class:"mb-6"},ve={class:"bg-gray-900/50 rounded-lg p-4 relative"},fe={class:"text-green-400 font-mono text-sm overflow-x-auto"},ge={class:"mb-6"},ye={class:"bg-gray-900/50 rounded-lg p-4 relative"},xe={class:"text-gray-300 font-mono text-sm overflow-x-auto whitespace-pre-wrap"},he={class:"mb-6"},be={class:"text-gray-300"},Ve={key:0,class:"mb-6"},Ce={class:"text-gray-300"},ke={class:"mb-6"},we={class:"flex flex-wrap gap-2"},_e={key:1,class:"bg-gray-800/50 rounded-lg flex items-center justify-center h-full"},Ue=O({__name:"VueDocs",setup(De){const u=g(""),p=g("all"),v=g("all"),a=g(null),$=[...P],A=h(()=>$.filter(s=>{const t=!u.value||s.name.toLowerCase().includes(u.value.toLowerCase())||s.description.toLowerCase().includes(u.value.toLowerCase())||s.tags.some(f=>f.toLowerCase().includes(u.value.toLowerCase())),o=p.value==="all"||s.version===p.value,l=v.value==="all"||s.category===v.value;return t&&o&&l})),V=h(()=>{const s={};return A.value.forEach(t=>{var o;s[t.category]||(s[t.category]=[]),(o=s[t.category])==null||o.push(t)}),s}),C=h(()=>Object.keys(V.value).sort()),k={lifecycle:"生命周期",directives:"指令",communication:"组件通信",slots:"插槽",mixins:"混入",composition:"Composition API",reactivity:"响应式系统",features:"新特性",composables:"组合式函数"},S=s=>{a.value=s},w=s=>{switch(s){case"easy":return"text-green-400";case"medium":return"text-yellow-400";case"hard":return"text-red-400";default:return"text-gray-400"}},_=s=>{switch(s){case"easy":return"简单";case"medium":return"中等";case"hard":return"困难";default:return"未知"}},U=s=>{switch(s){case"vue2":return"text-orange-400";case"vue3":return"text-green-400";case"both":return"text-purple-400";default:return"text-gray-400"}},D=async s=>{try{await navigator.clipboard.writeText(s)}catch(t){console.error("复制失败:",t)}};return(s,t)=>(r(),i("div",T,[t[15]||(t[15]=e("div",{class:"flex-shrink-0 p-6 border-b border-gray-700"},[e("div",{class:"max-w-7xl mx-auto"},[e("h1",{class:"text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"}," Vue 文档大全 "),e("p",{class:"text-gray-400 mt-2"},"Vue2 和 Vue3 常用及不常用 API 完整指南")])],-1)),e("div",j,[e("div",I,[e("div",B,[e("div",R,[e("div",N,[e("div",E,[e("div",q,[x(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),type:"text",placeholder:"搜索 API...",class:"w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"},null,512),[[H,u.value]])]),e("div",z,[t[6]||(t[6]=e("label",{class:"block text-sm font-medium text-gray-300 mb-2"},"版本筛选",-1)),x(e("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>p.value=o),class:"w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"},[...t[5]||(t[5]=[e("option",{value:"all"},"全部版本",-1),e("option",{value:"vue2"},"Vue 2",-1),e("option",{value:"vue3"},"Vue 3",-1)])],512),[[M,p.value]])]),e("div",null,[t[8]||(t[8]=e("label",{class:"block text-sm font-medium text-gray-300 mb-2"},"分类筛选",-1)),x(e("select",{"onUpdate:modelValue":t[2]||(t[2]=o=>v.value=o),class:"w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded text-white focus:outline-none focus:border-blue-500"},[t[7]||(t[7]=e("option",{value:"all"},"全部分类",-1)),(r(!0),i(m,null,d(C.value,o=>(r(),i("option",{key:o,value:o},n(k[o]||o),9,J))),128))],512),[[M,v.value]])])]),e("div",Q,[e("div",F,[(r(!0),i(m,null,d(C.value,o=>(r(),i("div",{key:o,class:"mb-6"},[e("h3",Y,n(k[o]||o),1),e("div",G,[(r(!0),i(m,null,d(V.value[o]||[],l=>{var f;return r(),i("button",{key:l.id,onClick:y=>S(l),class:c(["w-full text-left p-3 rounded-lg transition-all duration-200",((f=a.value)==null?void 0:f.id)===l.id?"bg-blue-600/30 border border-blue-500":"bg-gray-700/30 hover:bg-gray-700/50 border border-transparent"])},[e("div",X,[e("span",W,n(l.name),1),e("div",Z,[e("span",{class:c(["text-xs px-2 py-1 rounded",U(l.version)])},n(l.version.toUpperCase()),3),e("span",{class:c(["text-xs",w(l.difficulty)])},n(_(l.difficulty)),3)])]),e("p",ee,n(l.description),1),e("div",te,[e("div",oe,[(r(!0),i(m,null,d(l.tags.slice(0,3),y=>(r(),i("span",{key:y,class:"text-xs bg-gray-600/50 px-2 py-1 rounded"},n(y),1))),128))]),l.commonUse?(r(),i("span",se,"常用")):b("",!0)])],10,K)}),128))])]))),128))])])])]),e("div",ae,[a.value?(r(),i("div",re,[e("div",ie,[e("div",ne,[e("h2",le,n(a.value.name),1),e("div",ue,[e("span",{class:c(["px-3 py-1 rounded-full text-sm font-medium",U(a.value.version)])},n(a.value.version.toUpperCase()),3),e("span",{class:c(["px-3 py-1 rounded-full text-sm font-medium",w(a.value.difficulty)])},n(_(a.value.difficulty)),3),a.value.commonUse?(r(),i("span",de," 常用 ")):b("",!0)])]),e("p",me,n(a.value.description),1)]),e("div",ce,[e("div",pe,[t[9]||(t[9]=e("h3",{class:"text-lg font-semibold text-blue-400 mb-3"},"语法",-1)),e("div",ve,[e("button",{onClick:t[3]||(t[3]=o=>D(a.value.syntax)),class:"absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors",title:"复制代码"}," 📋 "),e("pre",fe,n(a.value.syntax),1)])]),e("div",ge,[t[10]||(t[10]=e("h3",{class:"text-lg font-semibold text-blue-400 mb-3"},"示例",-1)),e("div",ye,[e("button",{onClick:t[4]||(t[4]=o=>D(a.value.example)),class:"absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors",title:"复制代码"}," 📋 "),e("pre",xe,n(a.value.example),1)])]),e("div",he,[t[11]||(t[11]=e("h3",{class:"text-lg font-semibold text-blue-400 mb-3"},"使用场景",-1)),e("p",be,n(a.value.usage),1)]),a.value.notes?(r(),i("div",Ve,[t[12]||(t[12]=e("h3",{class:"text-lg font-semibold text-yellow-400 mb-3"},"注意事项",-1)),e("p",Ce,n(a.value.notes),1)])):b("",!0),e("div",ke,[t[13]||(t[13]=e("h3",{class:"text-lg font-semibold text-blue-400 mb-3"},"标签",-1)),e("div",we,[(r(!0),i(m,null,d(a.value.tags,o=>(r(),i("span",{key:o,class:"px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"},n(o),1))),128))])])])])):(r(),i("div",_e,[...t[14]||(t[14]=[e("div",{class:"text-center"},[e("div",{class:"text-6xl mb-4"},"📚"),e("h3",{class:"text-xl font-semibold text-gray-300 mb-2"},"选择一个 API 查看详情"),e("p",{class:"text-gray-400"},"从左侧菜单中选择您想了解的 Vue API")],-1)])]))])])])])]))}}),Se=L(Ue,[["__scopeId","data-v-5d32d08e"]]);export{Se as default};
