// import HelloWorld from '@/Pages/HelloWorld'
import Register from 'Pages/Register'
import Login from 'Pages/Login'

export default [
  {
    path: '/',
    name: 'Register',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
  // ,
  // {
  //   path: '/HelloWorld',
  //   name: 'HelloWorld',
  //   component: resolve => require(['@/Pages/HelloWorld'], resolve)
  // }
]
