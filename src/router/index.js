import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index-page',
            component: () => import('@/components/page/index-page'),
            meta: {
                title: 'Home - viewOJ'
            }
        }, {
            path: '/freshman',
            name: 'freshman-page',
            component: () => import('@/components/page/freshman-page'),
            meta: {
                title: 'Freshman - viewOJ'
            }
        }, {
            path: '/upcoming-list',
            name: 'upcoming-list-page',
            component: () => import('@/components/page/upcoming-list-page'),
            meta: {
                title: 'UpcomingList - viewOJ'
            }
        }, {
            path: '/admin',
            name: 'admin-page',
            component: () => import('@/components/page/admin-page'),
            meta: {
                title: 'Admin - viewOJ'
            }
        }, {
            path: '/login',
            name: 'login-page',
            component: () => import('@/components/page/login-page'),
            meta: {
                title: 'Login - viewOJ'
            }
        }, {
            name: 'ssoCallback',
            path: '/ssoCallback',
            component: () => import('@/components/page/sso-login-callback-page'),
            meta: {
                title: '单点登录跳转 - viewOJ'
            }
        }, {
            path: '/ranklist',
            name: 'ranklist-page',
            component: () => import('@/components/page/ranklist-page'),
            meta: {
                title: 'Ranklist - viewOJ'
            }
        }, {
            path: '/user/:userid',
            name: 'userinfo-page',
            component: () => import('@/components/page/userinfo-page'),
            meta: {
                title: 'Userinfo - viewOJ'
            }
        }, {
            path: '/monitor',
            name: 'monitor-page',
            component: () => import('@/components/page/monitor-page'),
            meta: {
                title: 'Monitor - viewOJ'
            }
        }, {
            path: '/camp',
            name: 'camp-page',
            component: () => import('@/components/page/camp-page'),
            meta: {
                title: 'Camp - viewOJ'
            }
        }, {
            path: '/error401',
            name: 'error401-page',
            component: () => import('@/components/page/error401-page'),
            meta: {
                title: 'Error - viewOJ'
            }
        }, {
            path: '*',
            name: 'error404-page',
            component: () => import('@/components/page/error404-page'),
            meta: {
                title: 'Error - viewOJ'
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
