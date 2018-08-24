import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Left from '@/components/left'
import Right from '@/components/right'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',  // name 传参
      components: {
        default: HelloWorld,
        left: Left,
        right: Right
      }
    },
    {
      path: '/Hi',
      // name: 'Hi', // 有子路由 name将不起作用
      component: Hi,
      alias: '/hiAlias', // 设置别名 /hiAlias与/Hi加载的内容一样 在根目录设置alias不起作用
      children: [
        // 子路由中的根目录为父路由
        {path: '/', name: 'Hello/Hi' ,component: Hi},
        {path: 'hi1', name: 'hi1', component: Hi1},
        {path: 'hi2', name: 'Hello/Hi/hi2', component: Hi2}
      ]
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',  // 参数后面添加正则校验
      name: 'params',
      component: Params,
      beforeEnter: function(to, from, next){
        // 钩子函数
        console.log(to)
        console.log(from)
        next()
        // next({path: '/'}) 
      }
    },
    {
      // 重定向
      path: '/goHome',
      redirect: '/'
    },
    {
      // 重定向并传递参数
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
