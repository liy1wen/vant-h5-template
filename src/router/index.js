import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Main',
        component: () =>
            import ('../views/main'),
        redirect: "/home",
        children: [{
                path: '/home',
                name: 'Home',
                component: () =>
                    import ('../views/home'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/my',
                name: 'My',
                component: () =>
                    import ('../views/my'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/store',
                name: 'Store',
                component: () =>
                    import ('../views/store'),
                meta: {
                    keepAlive: true
                }
            },
            {
                path: '/shopcar',
                name: 'Shopcar',
                component: () =>
                    import ('../views/shopcar'),
                meta: {
                    keepAlive: true
                }
            }
        ]
    },
    {
        path: '/list',
        name: 'List',
        component: () =>
            import ('../views/list'),
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () =>
            import ('../views/detail'),
        meta: {
            keepAlive: false
        }
    },
    {
        path: "*",
        redirect: "/home"
    }

]

const router = new VueRouter({
    routes
})

export default router