import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/hc',
            name: 'hc',
            component: () => import('./views/Hc'),
        },
        {
            path: '/js',
            name: 'js',
            component: () => import('./views/Js'),
        },
        {
            path: '/wx',
            name: 'wx',
            component: () => import('./views/Wx'),
        },
        {
            path: '/random',
            name: 'random',
            component: () => import('./views/Random'),
        },
        {
            path: '/own',
            name: 'own',
            component: () => import('./views/Own'),
        },
        {
            path: '/bg',
            name: 'bg',
            component: () => import('@/components/Bg.vue'),
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        // },
    ],
});
