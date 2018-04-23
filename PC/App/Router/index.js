import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/Router/routes'

Vue.use(Router)

const router = new Router({routes})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  console.log(from.fullPath, '=>', to.fullPath)
  next()
})

export default router

// export default new Router({
//   routes
// })
