export default new VueRouter({
  routes: [
    {
      path: '/index',
      component: resolve => require(['../pages/index.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
