//入口文件,所有需要的全局文件都往这里引

console.log('ok');
import Vue from 'vue'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import router from './router'
import Resource from 'vue-resource'
Vue.use(Resource)
//设置域名，这么设置后之后的获取数据就直接接口就可以
Vue.http.options.root = "http://vue.studyit.io"
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'//导入mui的样式
import './lib/mui/css/icons-extra.css'//引入图标库的组件


// import { Header } from 'mint-ui';//按需引入
// Vue.component(Header.name, Header);
//定义全局过滤器，好几个地方都用到时间
import moment from 'moment' //时间对象插件
Vue.filter('dateFormat', function (dataStr, pattern = 'YYY-MM=DD HH:mm:ss') {
    //如果在这直接调用的话得到的只是时间当前的时间
    //我们目的是按照给定的字符串得到相应的时间对象
    //dataStr是给定的时间pattern是年-月-日-时-秒
    //定义好后通过管道符|dateFormat在需要的后面调用一下即可
    return moment(dataStr).format(pattern)
})




import App from './App'
var vm = new Vue({
    el: '#app',
    router,
    render: h => h(App)


})