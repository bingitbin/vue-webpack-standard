import HelloWorld from '@/Pages/HelloWorld'
// import HW from '@/Pages/HW'
export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/HW',
    name: 'HW',
    component: resolve => require(['@/Pages/HW'], resolve)
  }
]
