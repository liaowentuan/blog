import Vue from 'vue'
import Router from 'vue-router'

import skill from '@/components/skill/skill'
import resume from '@/components/resume/resume'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'resume'
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/skill/:fenlei/:id',
      name: 'skill',
      component: skill
    }
  ]
})
